# 첫 번째 빌드 스테이지
FROM node:18.18.0 
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# 두 번째 배포 스테이지
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY conf/conf.d/default.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx","-g","daemon off;"]