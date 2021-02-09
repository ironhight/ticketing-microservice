FROM node:12.20.1-alpine3.10

WORKDIR /app
COPY package.json .
COPY . . 
RUN yarn install --only=prod
RUN yarn build

CMD ["yarn", "start"]