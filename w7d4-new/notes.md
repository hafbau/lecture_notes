Custom Hooks
============

## Agenda Today

- [ ] Review of Hooks
- [ ] Why Custom Hooks
  + [ ] useDocumentTitle
- [ ] Custom Hooks Examples
  + [ ] useMousePosition
  + [ ] useRequest
- [ ] Testing
  + [ ] test useMousePosition
  + [ ] useInput (TDD)
- [ ] Stretch (time permitting)
  + [ ] useForm


## Review of Hooks [10m]

**What are the most important things we know about hooks?**

- don't use them in statements e.g. loops, if
- only call hooks inside a component
- they are functions
- they all start with `use`

## Why Custom Hooks [15m]

From React Docs (https://reactjs.org/docs/hooks-custom.html):

> Building your own Hooks lets you extract component logic into reusable functions.

 We can pull repetitive code out of a component and reuse in other components

### Demo - 1 to explore why custom hooks (useTitle)

*But what are they?*

- just another function that uses react hook
- they must start with the use keyword
- while multiple component could depend on them, they **do not share state**


## More Custom Hooks Examples

### useMousePosition [20m]


### useRequest [20m]


## Testing Hooks

### Test useMousePosition [25m]

### TDD

#### useInput [25m]


## useForm (STRETCH)

- Instead of tracking multiple inputs with `useInput`, can we create a `useForm` that tracks all the inputs we want?



## What we learned [5m]



## Interesting links:

https://github.com/vadimdemedes/ink
https://reactjs.org/docs/hooks-effect.html
https://reactjs.org/docs/hooks-reference.html
https://github.com/streamich/react-use
https://usehooks.com/