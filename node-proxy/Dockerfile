FROM node:7.7.3

RUN mkdir /src

WORKDIR /src
ADD ./* /src/

RUN npm install

EXPOSE 3000

CMD npm start
