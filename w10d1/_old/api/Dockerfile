# pull official base image
FROM ruby:2.7

RUN gem install rails bundler

EXPOSE 3000

# docker build -t api . & docker run -it -v $(PWD):/app -p3000:3000 api /bin/sh