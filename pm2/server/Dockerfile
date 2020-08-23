FROM node:12-alpine
WORKDIR /usr/src/app
COPY *.js ./
EXPOSE 8000
RUN npm install pm2 -g
CMD ["pm2-runtime", "ecosystem.config.js"]
