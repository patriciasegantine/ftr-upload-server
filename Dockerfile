# Base image
FROM node:20.18 AS base

# Keep npm version consistent
RUN npm i -g npm

# Dependencies installation
FROM base AS dependencies
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

# Build stage
FROM base AS build
WORKDIR /usr/src/app

COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

RUN npm run build
RUN npm prune --prod

# Production image
FROM gcr.io/distroless/nodejs20-debian12 AS deploy

USER 1000

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

EXPOSE 3333

CMD ["dist/server.js"]
