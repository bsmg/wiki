# syntax = docker/dockerfile:1.4
FROM node:18-alpine AS builder

# Create app directory
RUN apk add --no-cache git
WORKDIR /usr/app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build source
COPY ./.git ./.git
COPY ./wiki ./wiki
RUN npm run build

# Static Web Server
FROM nginx:alpine

# Copy Prod Build
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/wiki/.vitepress/dist /usr/share/nginx/html

# Add git repo to metadata
ARG GIT_REPO
LABEL org.opencontainers.image.source=${GIT_REPO}

# Expose port and run
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
