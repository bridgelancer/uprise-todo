FROM node:10

WORKDIR /app
COPY package*.json /app/
ENV PATH /app/node_modules/.bin:$PATH


RUN npm install
COPY . .
EXPOSE 3000

CMD [ "npm", "start" ]
