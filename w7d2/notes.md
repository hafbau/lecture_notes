Immutable Data Patterns
===

## Agenda Today

- [ ] Review Components [5m]
- [ ] Review Export / Imports [5m]
- [ ] Review useState [20m]
- [ ] Immutability as a concept [5m]
- [ ] Why immutable data in React [10m]
- [ ] Immutable Data Patterns
      + Arrays (https://codesandbox.io/s/mutable-bush-728of) [20m]
      + Objects (https://codesandbox.io/s/aged-water-0kt4p) [20m]
- [ ] More Demo

### State
State as a concept: the remembered information about a system.

State in React: the remembered information about a system + useState & Reacts conventions for tracking state.

A new value of state is created every time the component runs and renders. Each prop and state is for a particular functional component execution, and they remain the same throughout that render.

#### React Hooks - useState Review
- Allows to

  - Use state in functional components
  - Values are stored in the state between renders (function calls)
  - Optionally, it can trigger a re-render when the state changes

- useState takes in a single argument: the initial value for the state
- Returns an array with the first element being the state and the second element being a function to update that state

`[value, updateFunction] = useState(initialValue);`

*Example demo walkthrough*

[Todo Demo Walkthrough](https://codesandbox.io/s/usestate-practice-todos-48v4l)

## Immutable Data Patterns with Arrays and Objects

Immutability is an important concept of `Functional Programming`.

From Wikipedia

> In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

In other words...

- Don’t mutate data, and if you have to – create a clone and mutate it.
- Reuse unchanged parts. Only changed parts should be changed.

### Why might immutable state make sense in React?

```js
// Ex.1 How might React know the difference
const state = {};
const diffState = (newState) => {
  const oldState = state;
  if (oldState === newState) {
    console.log('state is the same, no re-render')
  } else console.log('different state, re-renders')
}

state.a = 4;
diffState(state);

// Ex. 2
const TheComponent = () => {
  const [state, setState] = useState({ a: 2 });
  const [arrState, setArrState] = useState([3, 2 ]);

  const handleObjClick = () => {
    state.b = 5;
    // setState(state)
  }
  const handleArrClick = () => {
    arrState.push(5);
    // setArrarrState(arrState)
  }

  return ([
    <a href='#' onClick={handleObjClick}>{JSON.stringify(state)}</a>,
    <br />,
    <a href='#' onClick={handleArrClick}>{JSON.stringify(arrState)}</a>
  ])
}
```

### Benefits of immutability

- Immutable data structure are simpler to construct, test, and use
- Truly immutable values are always thread-safe
- Immutable data is side-effect free (avoids unexpected bugs hard to detect)
- You can quicky compare the previous and the new version

### Arrays

- Arrays are mutable in JavaScript
- we need to use only the pure array methods and the spread operator
- The pure array methods are the ones that create a new array when something changes

  - pop(), push() and splice() are not pure
  - concat(), slice(), filter, map are pure

[Immutable Arrays](https://codesandbox.io/s/mutable-bush-728of)

### Objects

[Immutable Objects](https://codesandbox.io/s/aged-water-0kt4p)

### More Demo

[Practice](https://codesandbox.io/s/funny-firefly-yympk)

### Some libraries enforce immutability

- [immutable js](https://immutable-js.github.io/immutable-js/)
- [mori](https://swannodette.github.io/mori/)
- [Rambda js](https://ramdajs.com/)
