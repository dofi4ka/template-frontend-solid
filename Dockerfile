FROM node:lts AS base

WORKDIR /src

FROM base AS build

COPY --link package.json package-lock.json ./
RUN npm ci

COPY --link . .

RUN npm run build

FROM base

ENV PORT=3000
ENV NODE_ENV=production

COPY --from=build /src/.output /src/.output

CMD [ "node", ".output/server/index.mjs" ]