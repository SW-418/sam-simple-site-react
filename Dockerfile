FROM alpine AS build-stage
WORKDIR /app
COPY . .
RUN apk add --update npm
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build-stage /app/build/ /usr/share/nginx/html
