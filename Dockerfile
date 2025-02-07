# Ubuntu Node.js
FROM node:22.13.1

WORKDIR /home/node

ENV NODE_ENV=development

RUN npm i -g npm@11.0.0
COPY package*.json .
RUN npm i

COPY . .

EXPOSE 5173
