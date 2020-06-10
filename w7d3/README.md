# W7D3 - Data Fetching & Other Side Effects

Hey crew, thanks again for today! I'm grateful for the engagement.

Here are the notes I took in class:

### What we learned today?
- Learned about pure functions and the fact that they return the same output given the same inputs
- using useEffect without dependency array could lead to interesting outcomes e.g. infinite loop; especially when you're setting state within the useEffect
- learned some rules of hooks: two main ones 1. Dont call them within any JS statements 2. Only use them within React components and other hooks (custom)
- Got introduced to using axios for get request

- Oh and the side effect of vaccines?? Getting to grow old ;P cheesy I know!


Please look in the github repo for the code we wrote today.

I've also added another Instructor's (Dominic from Montreal) notes here for perspective.

---

### Agenda today
- [x] Review
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] [`useEffect`](https://codesandbox.io/s/use-effect-2mzi8?file=/src/index.js)
- [x] Dependencies
- [x] Cleanup
- [-] _useEffect_ Flow

#### Lesson for another day but good lesson!
> Do not mutate state e.g. state = 'new valu' => setState('new valu)

### Rules of Hooks

- Don't call hooks in any JS statements - conditionals, loops

```js
const Comp = () =>{
  if (true) {
    const [state, setState] = useState()
  }
}
```

- Can only call hooks in React component and other hooks

```js
const myFunk = () =>{
  const [state, setState] = useState()
}
```

- Hooks' name start with `use`

### Pure functions

- produces the output given the same input

```js
const add = (a, b) => a + b;
```


```js
let y = 0;
const addWithSideEffect = (a, b) => {
  y = y + a + b;
  return y;
}

addWithSideEffect(2, 5)// 7
addWithSideEffect(2, 5)// 14
addWithSideEffect(2, 5)// 21
addWithSideEffect(2, 5)
addWithSideEffect(2, 5)
```


```js
function printName(name) {
  return name
}

console = { log: () => 'blllllllleeeee' }

function printName2(name) {
  console.log(name)
}
```

```js
const helper = () => 'help'

// not pure === has side effect
const user2 = () => helper()

// pure
const user2 = (helper) => helper()

// pure
const user = () => {
  const helper = () => 'can only help here'
  helper()
}
```


### Common side effects

- console.log
- Math.random()
- setTimeout
- making an api request
- trying directly access DOM
- websockets

### Handling side effects in REACT

- useEffect

#### Configs for useEffect

- useEffect(() => {}); without any deps array - this effect runs every time the component refreshes

- useEffect(() => {}, [deps]); with any deps array - this effect runs every time the deps variable changes value e.g. by calling setState on it

- useEffect(() => {}, []); with empty deps array - this effect runs onnly once

- Clean up

```js
useEffect(
  () => {
// effect stuff

// this is particulary useful to undo an effect that might cause memory leak e.g. setInterval
  return function cleanup() {

  }
})
```
