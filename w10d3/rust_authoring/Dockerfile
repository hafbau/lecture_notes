FROM liuchong/rustup:nightly

WORKDIR /usr/src/myapp
COPY . .

RUN cargo install --path .

CMD ["myapp"]