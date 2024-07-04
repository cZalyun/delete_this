FROM node:20

USER node

WORKDIR /workspace

RUN chown node:node /workspace

COPY --chown=node:node ./package*.json ./

RUN npm i

COPY --chown=node:node . .

EXPOSE 4200
