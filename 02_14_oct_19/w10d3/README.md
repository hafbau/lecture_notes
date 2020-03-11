Advance Topics - ES2020 && Microservices
===

## ES2020 What's new

[es2020 experiments](https://codesandbox.io/s/zealous-meadow-nxnz9)

➡️ [BigInt](https://v8.dev/features/bigint)
➡️ Optional Chaining

```js
const person = {
  name: {
    first: 'Austin',
    last: 'Beck',
    alias: {
      first: 'guy with the goggles'
    }
  }
}

person.name.first

person.name && person.name.alias && person.name.alias.first
person.name.alias?.first

const getQuinton = undefined

getQuinton?.()
```

➡️ Nullish coalescing Operator

```js

// falsiness check
const PORT = process.env.PORT || 3000
// nothingness check - undefined / null
const PORT = process.env.PORT ?? 3000

const getAlex = (location = 'nowhere') => { console.log(location)}
```
➡️ [Promise.allSettled](https://v8.dev/features/promise-combinators#promise.allsettled)
➡️ [Dynamic import()](https://v8.dev/features/dynamic-import)
➡️ Optional Catch binding

```js
try {
  throw Error('your bad error')
} catch() {
  // arguments
  console.log('somefnm bad happened')
}

```

➡️ [globalThis](https://v8.dev/features/globalthis)

➡️ [String.prototype.matchAll](https://v8.dev/features/string-matchall)

Others features from the future

➡️ Numeric separators
➡️ Decorators
➡️ throw expressions

## Microservices

### Antipatterns

- Don't do microservices, don't!
- Don't make them too many, too micro
- Don't do this without automated DevOps (CI/CD, containerization)
- Don't start by building everything from scratch (Handcrafted gluten free organic apps)

### Why and What

[modified slides from founder of microservices.io](microservices_why_what.pdf)


### Build me a CMS

[CMS architecture breakdown](https://docs.google.com/presentation/d/1DsLwnZarDFv-cV_HL3QgTyAtj3uBiYSj43RAoLzSbrw/edit#slide=id.g814d667b86_0_30)


### Our Rust Rocket Experiment

- Install Docker
- Find a Rust docker image from docker hub (hub.docker.com)
- Copy the code for Dockerfile from docker hub page
- Create a file in your project directory; name the file Dokerfile and paste the copied code into that file. Save that file.
- Apparently, `cargo` is to Rust as `npm` is to `node`. Also, `Cargo.toml` is to `cargo` what `package.json` is to `npm`.

- So, we need a `Cargo.toml` that has `rocket` as dependency. `rocket` is kind of like `express` but for `Rust`

- Also, it seems the convention for entry into the server is `main.rs`

- See my copy/paste endeavor in the [rust_authoring directory](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w10d2/rust_authoring)

To run the rust `hello_world`, run the following on the command line:

```sh
docker build -t my-rust-app .
docker run -p 8000:8000 my-rust-app
```

And the beautiful app is up on `localhost:8000`

## References

- [Antipatterns](ibm.com/cloud/learn/microservices)
- [Why_What](microservices.io)

Thank you crew!