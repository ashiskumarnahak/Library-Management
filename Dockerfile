#stage 1
FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build


#stage 2
FROM nginx:latest
COPY --from=build /usr/local/app/dist/book-list /usr/share/nginx/html






