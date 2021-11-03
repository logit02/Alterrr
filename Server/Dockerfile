FROM node:16 

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

RUN ls -l

ENTRYPOINT [ "node" , "index.js" ] 
