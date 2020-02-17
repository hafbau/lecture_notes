Custom Hooks and Immutable data pattern
===

## Agenda

- [] Immutable data patterns with Objects and Arrays
- [] Separate rendering from logic
- [] Create a custom Hook

## Recap - Rules of Hooks

- Only call Hooks from the top-level of a function component or a custom Hook.

  - Cannot be called in React class components, loops, if statement, regular function, in event handlers

- A custom Hook must start with the keyword "use"

  - a custom Hook can call other custom or built-in Hooks.

```js

// allowed?
const TweetList = () => {
  const [user, setUser] = useState(null);

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

    return(
      <div><h1>Tweets</h1>
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

## Custom Hooks

- React is usually coupling the UI to a component
- Sometimes we just want to use some code logic without tying it to a particular UI
- Custom Hooks allow us to do that

Example of custom hook

- [Custom Hook - Browser Dimensions](https://codesandbox.io/s/custom-hooks-exercise-browser-dimensions-j80xw)

In the example where we used `useEffect` to perform a request to Github and pull out the contributors to the Tweeter repo, the request is actually tied to the component itself. What about is we want to reuse the request?

[api request](https://codesandbox.io/s/api-request-customhook-exercise-pnje8)

## Immutable Data Patterns with Arrays and Objects

Immutability is an important concept of `Functional Programming`.

From Wikipedia

> In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

In other words...

- Don’t mutate data, and if you have to – create a clone and mutate it.
- Reuse unchanged parts. Only changed parts should be changed.

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

- Arrays mutable in JavaScript
- we need to use only the pure array methods and the spread operator
- The pure array methods are the ones that create a new array when something changes

  - pop(), push() and splice() are not pure
  - concat(), slice() are pure

[Immutable Arrays](https://codesandbox.io/s/strange-neumann-j5g5y)

### Objects

[Immutable Objects](https://codesandbox.io/s/modest-pare-28lgm)