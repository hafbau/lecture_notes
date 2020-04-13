Component based UI with React
===

<!-- Hafiz -->

## About you [5m]

- Imposter syndrome
- Race to complete
- Mentorship approach
- Managing stress

## About me [5m]

- An alumni
- Accent is Nigerian
- I'm funny

## About Lecture [5m]

- Zoom interactions (e.g. Raise hands, yes/no) please
- Talk
- Chat for polling

## Agenda

- [ ] Review Reading - What is react and why? [10m]
- [ ] Design to Components - Design breakdown excercise. [10m]
  - [ ] Tweeter
      + Nav
        - Logo ??
        - NewTweetToggler
      + Profile

      + TweetsContainer
        - Tweet
      + TweetForm
        - Composer
        - ErrorComponent

- [ ] [React.pdf - component hierarchy design and data model.] [15m]

```js
function showCond(greeting) {
  return greeting
}

function greetVlad(condition) {
  const greeting = condition == 'gucci' ? 'Hey sunshine'
  showCond(greeting)
  return `${greeting} my buddy`
}
```

#### Demo

- [ ] CRA
`npx create-react-app empty_cra_storybook`
- [ ] Storybook
- [ ] Tweeter React
  
  Patterns to talk about

    - [ ] Passing Props
    - [ ] Looping Pattern
    - [ ] Passing children with JSX
    - [ ] Fragments
    - [ ] ES6 review in tandem
        + [ ] destructuring
        + [ ] map
    - [ ] Handling DOM events
    - [ ] Managing state
    - [ ] Conditional rendering


## References

- Atomic Design (google stuff)