# Alpine Node Image
FROM node:12-alpine AS builder

# Create app directory
WORKDIR /usr/app

# Copy package info
COPY package.json yarn.lock ./

# Install app dependencies
RUN apk add --no-cache tini bash git openssh
RUN yarn install --frozen-lockfile

# Build source
COPY . .
RUN yarn run build:prod

# Static Web Server
FROM nginx:alpine

# Copy Prod Build
COPY --from=builder /usr/app/wiki/.vuepress/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Label
ARG VCS_REF
LABEL org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vcs-url="https://github.com/beat-saber-modding-group/wiki"

# Expose port and run
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
