Component based UI with React
===


## Agenda Today
- [ ] Review
- [ ] Passing Props
- [ ] Passing children with JSX
- [ ] Fragments
- [ ] ES6 review in tandem
    + [ ] destructuring
- [ ] Handling DOM events
- [ ] Managing state
- [ ] Looping Pattern
    + [ ] map
- [ ] Conditional rendering

### Review

> What would this log to console??

**takeaways**
- data can be created internally and / or passed in as arguments
- internal data are called STATE
- external data are PROPS
- state for a parent can be the props to a child
- to allow a child function (Component) to modify parent's state, the parent will need to pass in a function with which the child will change the state


#### Why React?

- its more about performance (https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary)
- uses component based architecture

#### Rules of JSX / React
- No HTML comments allowed
- JS expression has to be wrpped in `{}`
- No chaining elements must return one root
- Gotta close those tags
- Parent can't close before a child
- use className instead of class attribute
- Most html attributes are cameCased

**what do we remember?**

## Demos

### 1. Props and state - intro

[codesandbox - props](https://codesandbox.io/s/props-ig1c6?file=/src/index.js)

- component 'always' get passed an argument which is an object. By conventions its called `props`


### 2. Props and state - more


Questions??

### 3. More children - the input child

**Fork current codesandbox**

- Goal is to:
  + have internal state (onChange - controlled input)
  + pass update to parent on button pressed



### 4. Tweeter Demo

- Goal rebuild Tweeter in React
  + Starting with create-react-app
  + Using Storybook
  + and then coupling

- what is CRA and what command will be run
  + it makes starting react project easy and preconfigured
    `npx create-react-app yourappname` then `cd yourappname`

- what is storybook and what command
  + it allows us to develop component in isolation
  + independently reusable components; think of it as some form of test:
    - guarantee that component does what it needs to do.
  + run `npx -p @storybook/cli sb init`

  Tweeter Components??

  - Nav
    + Logo
    + ToggleComposerButton
  - ProfilePx
  - Composer
  - TweetsList
    - Tweet
  