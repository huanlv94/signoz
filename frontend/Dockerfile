FROM node:16.15.0-alpine as builder
WORKDIR /frontend
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:1.25.2-alpine as app

# Add Maintainer Info
LABEL maintainer="travala"

# Set working directory
WORKDIR /frontend

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx config and static files
COPY conf/default.conf /etc/nginx/conf.d/default.conf
# COPY build /usr/share/nginx/html
COPY --from=builder /frontend/build /usr/share/nginx/html

EXPOSE 3301

ENTRYPOINT ["nginx", "-g", "daemon off;"]
