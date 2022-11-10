# Install dependencies only when needed
FROM node:14.8.0 AS runner
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
WORKDIR /test-app
RUN npm install yarn -g
RUN yarn global add pm2
COPY package.json yarn.lock ./
# COPY public ./public
COPY .next ./.next
# RUN yarn

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

# RUN cnpm install pm2 -g
EXPOSE 8080

# ENV PORT 8080

CMD ["pm2 start yarn --name test-app -- start --no-daemon"]
