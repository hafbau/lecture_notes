# Components

## Spot the bugzzz? 🐞🐞🐞

### 1.

```js
// in Component.js
import React from 'react';

const Component = (props) => {
  return (<p>props.thing</p>)
}

export default Component;

// in ParentComponent.js
import React from 'react'
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
// Brad
// Alan props is one values
// Dexter proper destructure
// Jeff Props always
const Component = ({ prop1, prop2, prop3 }) => {
  return props2 ? props1 + 'yay' : 'nay'
}

export default Component;
// in ParentComp.js
// ... imported dependencies properly;
import Component from './Component';

const ParentComponent = () => {
  return <Component prop3={true} prop1="messing wichu" prop2 />
}
```

```
<input type="checkbox" checked />
```

```js
// Definition Phase
function myFood(ingredient, utensils) {

}

// Execution Phase
myFood('rice', 'pressurePot', 'soaop')
```