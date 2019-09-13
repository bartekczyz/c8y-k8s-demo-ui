FROM node:12-alpine as node

WORKDIR /var/www/html

COPY package.json tsconfig.json yarn.lock ./
RUN yarn

COPY public ./public
COPY src ./src
RUN yarn build

FROM nginx:1.17-alpine

RUN adduser -u 1000 -S www-data
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

COPY --from=node /var/www/html/build /var/www/html
