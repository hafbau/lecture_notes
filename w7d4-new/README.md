Custom Hooks
===

Hey Labbers, thanks for sitting in today's lecture where we talked about DIY react hooks. We created 5 custom hooks in total; we also saw how to test 'em hooks! Please feel free to find me with your questions, thanks.

[Code we wrote](https://github.com/hafbau/lecture_notes/tree/master/w7d4-new)

[video recording will be here](#)

Here's some things we learned:

## What we learned [5m]

- Making custom hooks in not scary at all
- Learned about renderHook for hook testing
- the `act` function to wrap asynchrounous logic / code during testing
- naming of hooks has to start with `use`


## Agenda Today

- [x] Review of Hooks
- [x] Why Custom Hooks
  + [x] useDocumentTitle
- [x] Custom Hooks Examples
  + [x] useMousePosition
  + [x] useRequest
- [x] Testing
  + [x] test useMousePosition
  + [x] useInput (TDD)
- [x] Stretch (time permitting)
  + [x] useForm


## Review of Hooks [10m]

- **What are the most important things we know about hooks?**

- Rule 1: only use inside of components
- Can’t be embedded a any statement e.g conditional or a loop
- They allow functional components to not be dumb anymore i.e to include state
- No more class components :)
- We've seen `useEffect` and `useState`


## Why Custom Hooks [15m]

From React Docs (https://reactjs.org/docs/hooks-custom.html):

> Building your own Hooks lets you extract component logic into reusable functions.

We can pull repetitive or complex code out of our components and move it into custom hooks

### Demo - 1 to explore why custom hooks (useTitle)

*But what are they*

- Custom hooks are just JavaScript functions that uses React hooks
- They must start with the prefix `use`  so that React knows they are hooks
- Multiple components using the same custom hook **do not share state**


## Custom Hooks Examples

### useMousePosition [20m]


### useRequest [20m]


## Testing Hooks

### Test useMousePosition [25m]

### TDD

#### useInput [25m]

+ takes a default value
+ returns current value and an onChange function
+ can change based on event


## useForm (STRETCH)

- Instead of tracking multiple inputs with `useInput`, can we create a `useForm` that tracks all the inputs we want? That's exactly what we did.

Here's the snippet:

```js
const useForm = (defaultVal) => {
  const [formValues, setFormVals] = React.useState(defaultVal);

  const onChange = (event) => {
    const { target: { value, name } } = event;
    // const newState = { ...formValues };
    // newState[name] = value;
    setFormVals({
      ...formValues,
      [name]: value
    })
  }

  return [formValues, onChange];
}
```


## What we learned [5m]

- Making custom hooks in not scary at all
- Learned about renderHook for hook testing
- the `act` function to wrap asynchrounous logic / code during testing
- naming of hooks has to start with `use`



## Interesting links:

https://github.com/vadimdemedes/ink
https://reactjs.org/docs/hooks-effect.html
https://reactjs.org/docs/hooks-reference.html
https://github.com/streamich/react-use
https://usehooks.com/