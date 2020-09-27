FROM node:12-alpine
WORKDIR /usr/src/app
COPY *.js ./
COPY package*.json ./
RUN npm install
EXPOSE 8000
CMD [ "node", "server.js" ]
