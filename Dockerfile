FROM node:16.16.0-alpine AS build

LABEL description="Personal resume website"

WORKDIR /app

# Install CLI tools
RUN npm install -g pnpm@8.4.0
RUN apk update

# install app dependencies
COPY . .
RUN pnpm install
RUN pnpm build

# copy build directory to location on production
