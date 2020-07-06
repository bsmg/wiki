# Alpine Node Image
FROM node:12-alpine AS builder

# Create app directory
WORKDIR /usr/app

# Copy package info
COPY package.json yarn.lock ./

# Install app dependencies
RUN apk add --no-cache bash git openssh
RUN yarn install --frozen-lockfile

# Build source
COPY ./wiki ./wiki
RUN yarn run build:prod

# Static Web Server
FROM nginx:alpine

# Copy Prod Build
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/wiki/.vuepress/dist /usr/share/nginx/html

# Expose port and run
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
