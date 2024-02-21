FROM node:18

WORKDIR ./app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "sleep 25 && npm start"]