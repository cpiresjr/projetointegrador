### STAGE 1: Build ###
FROM node AS build

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm cache clean --force

RUN npm i

COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx

COPY --from=build /src/dist/app /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'