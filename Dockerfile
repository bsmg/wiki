# syntax = docker/dockerfile:1.4
FROM node:16-alpine AS builder

# Create app directory
RUN apk add --no-cache git
WORKDIR /usr/app

# Install app dependencies
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

# Build source
COPY ./.git ./.git
COPY ./wiki ./wiki
RUN yarn run build:prod

# Static Web Server
FROM nginx:alpine

# Copy Prod Build
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/wiki/.vuepress/dist /usr/share/nginx/html

# Add git repo to metadata
ARG GIT_REPO
LABEL org.opencontainers.image.source=${GIT_REPO}

# Expose port and run
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
