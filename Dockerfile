FROM node:20

WORKDIR /workspace

COPY ./package*.json ./

RUN pwd

RUN ls -al

RUN npm i

COPY . .

EXPOSE 4200
