FROM node:16.16.0-alpine AS build

LABEL description="Personal resume website"

WORKDIR /app

# Install CLI tools
RUN npm install -g pnpm@8.4.0
RUN apk update

# Files required by pnpm install
COPY pnpm-lock.yaml ./

# Fetch dep from virtual store
RUN pnpm fetch --prod

# Bundle app source
COPY . .

# Install app dependencies
RUN pnpm install --frozen-lockfile --prod

# Build the app
RUN pnpm build

# copy build directory to location on production
