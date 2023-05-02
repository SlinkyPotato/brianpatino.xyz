FROM node:16.16.0-alpine AS build

WORKDIR /app

# Install CLI tools
RUN npm install -g pnpm@8.3.1

# install app dependencies
COPY . .
RUN pnpm install
RUN pnpm build

# copy build directory to location on production
