FROM node:10

WORKDIR /usr/src/omnistack

COPY package.json .

RUN npm install --quiet

RUN npm install --global expo-cli

COPY . .
