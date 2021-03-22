FROM node:14.11.0-alpine
COPY . /newfeatures
WORKDIR /newfeatures
RUN npm install
RUN npm i -g ts-node
CMD npm run prod