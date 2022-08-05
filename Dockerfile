FROM node:14.18.3-alpine AS build

WORKDIR /app

# Install CLI tools
RUN npm install -g pnpm@7.8.0

# install app dependencies
COPY . .
RUN pnpm install
RUN pnpm build

# production environment
FROM nginx:1.23.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
