FROM node:current
WORKDIR /usr/src/app/

COPY kbc-react/package*.json /usr/src/app/

RUN npm install

COPY kbc-react/. .

RUN npm run build

CMD ["npm", "run", "dev"]