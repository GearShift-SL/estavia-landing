# Dockerfile

# Get the node 20 alpine image
FROM node:20-bullseye AS build

# Install git
RUN apt update && apt install -y git

# Add the env variable to allow additional hosts
ENV __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS=astrodev.estavia.ai