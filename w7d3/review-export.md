# [export / import](https://codesandbox.io/s/silly-sutherland-rxp9t)

### default

```js
// in Component.js
const Component = () => {
  //... stuff
}

export default Component;

// Which is wrong?
// in AnotherComponent.js in the same directory as Component.js
// 1.
import { Component } from './Component';

// 2.
import MyComponent from './Component';

// 3.
import Component from './Component';
```

### named

```js
// in SomeFile.js
export const someFunk = () => {
  //...stuff
}

export const SomeComp = (props) => {
  return null
}

const anotherThing = 'cool thing';

const bestFunk = () => {};

const TheComp = (props) => {};

export {
  anotherThing,
  bestFunk,
  TheComp
}

// export default () => console.log('defaule')

// Which is wrong
// in anotherFile.js in the same directory as someFile.js
// 1.
import someFunk, bestFunk, anotherThing, TheComp, SomeComp from './someFile'

// 2.
import someFunk from './someFile'

// 3.
import { someFunk } from './someFile'

// 4.
import * as allTheThings from './someFile'

allTheThings.bestFunk();
console.log(allTheThings.anotherThing);

// 5.
import { someFunk, bestFunk, anotherThing, TheComp, SomeComp } from './someFile'

```