# Install dependencies only when needed
# FROM node:lts-alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# WORKDIR /test-app


# 使用apk命令安装 nodejs 和 yarn
# RUN apk add --no-cache --update nodejs=16.16.0-r0 yarn=1.22.17-r0

# RUN sudo apt install curl
# RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
# RUN sudo sh -c 'echo "deb https://dl.yarnpkg.com/debian/ stable main" >> /etc/apt/sources.list.d/yarn.list'
# RUN sudo apt update
# RUN sudo apt install yarn
# RUN node --version
# RUN npm --version
# RUN npm install yarn -g
# RUN yarn --version

# WORKDIR /test-app
# RUN yarn global add pm2
# COPY package.json yarn.lock ./
# COPY public ./public
# COPY .next ./.next

# RUN yarn

# COPY /test-app/node-modules ./node_modules
# COPY . .
# RUN yarn build:dev
# Rebuild the source code only when needed
# FROM node:alpine AS builder
# WORKDIR /test-app
# COPY . .
# COPY --from=deps /test-app/node_modules ./node_modules
# RUN yarn build:prod

# Production image, copy all the files and run next
# FROM node:alpine AS runner
# WORKDIR /test-app

# ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /test-app/next.config.js ./
# COPY --from=builder /test-app/public ./public
# COPY --from=builder /test-app/.next ./.next
# COPY --from=builder /test-app/node_modules ./node_modules

# -------------------------------------------------------------------------------------------------
FROM  --platform=linux/amd64 node:14
# RUN apk add --no-cache python g++ make
RUN mkdir /home/node/app/ && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json package.json
# COPY yarn.lock yarn.lock

USER node

RUN npm install
# RUN npm install --production

COPY .next .next
RUN npm install pm2

EXPOSE 8080

# ENV PORT 8080

CMD ["pm2 start yarn --name test-app -- start --no-daemon"]
