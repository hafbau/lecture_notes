# components

## Spot the bugzzz? 🐞🐞🐞

### 1.

```js
// in Component.js
import React from 'react';

const Component = (props) => {
  return (<p>{props.thing}</p>)
}

export default Component;

// in ParentComp.js
import React from 'react';
import Component from './Component';

const ParentComponent = () => {
  return <Component thing="is a fin" />
}
```

### 2.

```js
// 
// in Component.js
// ... imported dependencies properly;

// const Component = ({prop1, prop2, prop3}) => {
const Component = (props) => {
  console.log(props.prop2)
  return props.prop3 ? 'yay' : 'nay'
}

export default Component;
// in ParentComp.js
// ... imported dependencies properly;
import Component from './Component';

const ParentComponent = () => {
  return <Component prop3={true} prop1="messing wichu" prop2 />
}
```