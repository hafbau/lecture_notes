# pull official base image
FROM node:13.12.0-alpine

EXPOSE 3000
EXPOSE 3001
EXPOSE 9009
# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]
# docker build -t sample:dev .
# docker run     -it     --rm     -v ${PWD}:/app     -v /app/node_modules     -p 3000:3000     -e CHOKIDAR_USEPOLLING=true     sample:dev /bin/bash

# docker build -t dev . & docker run -it -v $(PWD):/app -p3000:3000 -p 9009:9009 -p 3001:3001 dev /bin/sh