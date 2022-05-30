FROM node:16.15-alpine as base
RUN apk add --no-cache --virtual build-dependencies build-base
RUN apk add --no-cache tini

LABEL truegit.image.title="Truegit Docs"
LABEL truegit.image.licenses=UNLICENSED

EXPOSE 3000

WORKDIR /app
ENTRYPOINT ["/sbin/tini", "--"]
COPY package*.json ./
RUN npm ci
ENV TERM=xterm-256color \
    NODE_ENV=production \
    ENABLE_DB_LOGGING=false \
    PORT=3000

COPY . .
RUN npm run build
CMD ["npm", "run", "serve"]
