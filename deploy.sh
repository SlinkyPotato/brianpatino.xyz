docker cp [container-id]:/app/build/ ./build
docker '$(docker create brianpatinoxyz_prod)' cp /app/build/ ./build

