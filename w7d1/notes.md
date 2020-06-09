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

**takeaways?**

- data can be created internally or passed in as an argument
- internally generated data can be called STATE
- external data are called PROPS
- state from parent can be props to a child
- to allow a child component to modify a parent's state; the parent can pass the child a function props that the child can call.

#### Why React?

- it more about performance
- gives component based architecture

#### Rules of JSX / React

- Gotta close those tags
- No HTML comments
- camelCase for most DOM attributes
- Child must close before Parent component
- JS logic has to be wrapped in curly braces `{}`
- className instead of class attribute on DOM elements
- JSX expression limits us to returning a single node.
- Use PascalCase for React components, or lowercase for HTML elements.
- React components have to return something or `null`. `undefined` is NOT a valid return type

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

  Tweeter Components
  - Nav
    + Logo
    + ToggleButton

  - Header / ProfilePx

  - Composer

  - TweetsList
    + Tweet