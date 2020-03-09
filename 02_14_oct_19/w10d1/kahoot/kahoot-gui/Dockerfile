# This file lists the instructions for docker on how to setup a docker container (it's like a miniature VM)

FROM node:12

ENV APP_PATH=/usr/src/kahoot-gui
WORKDIR ${APP_PATH}
COPY . ${APP_PATH}
RUN npm install
EXPOSE 3000
CMD npm start