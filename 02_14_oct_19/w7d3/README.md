Custom Hooks and Immutable data pattern
===

Thanks for today! We went through some reviews of common errors I've seen:

[here]()
[and here]()

## Agenda

- [] Custom Hooks
- [] Immutable data patterns with Objects and Arrays

## Recap - Rules of Hooks

```js
// allowed?
const TweetList = () => {
  const [user, setUser] = useState(null);
  // if (somCond) {
  //   const [pet, setPet] = useState(null);
  // }
  // const [thing, setThing] = useState(null);

  if (user) {
    useEffect(() => {
      axios.get('/api/tweets/')
      .then(res => console.log(res.data))
    }, [])
  }

}

// allowed?
class Tweet extends React.component {

  render(){
    const [tweets, setTweets] = useState([])

    return (
      <h1>Tweets</h1>
    )
  }
}

// allowed?
const useData = () => {
  const [value, setValue] = useState(null)
}

// allowed?
const getTodo = (id) => {
  const [todo, setTodo] = useState([]);
}
```

- Only call Hooks from the top-level of a function component or a custom Hook.

  - Cannot be called in React class components, loops, if statement, regular function, in event handlers

- A custom Hook must start with the keyword "use"

  - a custom Hook can call other custom or built-in Hooks.


## Custom Hooks

- React is usually coupling the UI to a component
- Sometimes we just want to use some code logic without tying it to a particular UI
- Custom Hooks allow us to do that

Demos of custom hook
- [Use mouse position](https://codesandbox.io/s/use-mouse-position-dxgmv-dxgmv)
- [Custom Hook - Browser Dimensions](https://codesandbox.io/s/custom-hooks-exercise-browser-dimensions-d5tv7)

An example with data fetching
[api request](https://codesandbox.io/s/api-request-customhook-exercise-o7hbb)


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

Some libraries enforce immutability

- [immutable js](https://immutable-js.github.io/immutable-js/)
- [mori](https://swannodette.github.io/mori/)
- [Rambda js](https://ramdajs.com/)

### Arrays

- Arrays are mutable in JavaScript
- we need to use only the pure array methods and the spread operator
- The pure array methods are the ones that create a new array when something changes

  - pop(), push() and splice() are not pure
  - concat(), slice() are pure

[Immutable Arrays](https://codesandbox.io/s/mutable-bush-728of)

### Objects

[Immutable Objects](https://codesandbox.io/s/aged-water-0kt4p)


### Some Custom hooks reference

https://usehooks.com/
https://nikgraf.github.io/react-hooks/
https://github.com/rehooks/awesome-react-hooks

