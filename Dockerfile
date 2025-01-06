FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

ENV NODE_OPTIONS=--max_old_space_size=4096

RUN npm run build

# RUN npm start

CMD ["npm", "start"]

EXPOSE 3000