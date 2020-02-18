Data Fetching and Other Side Effects
===

Hey folks, I manage to mess up the recordings for today, sorry :(

Topics

- Run multiple servers
- State, Side effects & React Hooks
  + Rules of Hooks
  + useState review
  + useEffect
    + Dependency array
    + Cleanup

- Data fetching with React


## Run multiple servers
- run api on a port
- client on another

## State, Side effects & React Hooks

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

*Example demo*

[Todo Demo](https://codesandbox.io/s/usestate-practice-todos-48v4l)

### Side effects
Any function that is not pure has side effects.

- Depends on external data(outside its local environment, state)
- Has an observable effect besides returning a value (often the main effect)
- Examples are:

  - Setting timers or intervals
  - Modifying DOM elements not controlled by React
  - A network request
  - Connection to a socket server
  - Adding and removing event listeners
  - Logging to the console

```js
// pure function; no side effects
const sumTwo = (x) => x + 2

const addTodo = todo => todos.push(todo);

const getTweets = () => fetch('/tweets/').then(res => res.json())

const reset = (element) => element.value = '';
```

- Side Effects are generally bugs prone and requires conscious management.

#### React Hooks - useEffect
React encapsulates side effects with `useEffect`

##### Add an effect

```js
import {useEffect} from 'react'
React.useEffect(() => {
  console.log(
    'The effects re-execute after every render => no second parameter'
  );
  setValue(somval)
});
```

##### Dependency array

```js
useEffect(() => {
  console.log('Because the second parameter is [], the effect runs only once');
}, []);

// The effect depends on an outside value (someValue)
// The effect gets re-executed only if someValue has changed
useEffect(() => {
  console.log('The effect depends on an outside value');
}, [someValue]);
```

##### Cleanup

In addition, useEffect can return a cleanup function. The cleanup function will execute right before the next effect execution or unmounting of the component. Examples of where we might need a clean up function are:

- removing eventListener
- removing a subscription (WebSocket)


##### useEffect Examples

- [useEffect - Tweeter Character Count](https://codesandbox.io/s/useeffect-tweeter-character-count-59n3i)

- [useEffect API Request](https://codesandbox.io/s/useeffect-api-request-4gh1m)

- [removing eventListener](https://codesandbox.io/s/upbeat-turing-7pzy6)


#### Rules of Hooks

**Rule #1**
Don't call Hooks inside loops, conditions, or nested functions.

**Rule #2**
Only call Hooks from the top-level of a function component or a custom Hook.

**Rule #3**
The effect method that we pass to useEffect must either return undefined or a function. The easiest way to avoid issues with this rule is always to declare your effect as a multiline function.

## Data fetching with React
Get Tweets
Post Tweets