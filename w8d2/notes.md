# W8D2 Real World React

### Agenda today

- [ ] Routing with React Router
- [ ] Advanced Routing
- [ ] Styled Components
- [ ] Component Libraries
- [ ] `useRef`
- [ ] `useContext`

### Routing

- Why routing in SPA?
  + conditional rendering

- How did we do it in Scheduler?
  + useVisualMode
  {mode === 'back' && <Empty />}

https://reacttraining.com/react-router/web/guides/quick-start

### Advanced Routing

- It is possible to nest `Router` components

### Styled Components

- Styled components allow us to embed our styles inside our JavaScript
  https://styled-components.com/docs/basics

### `useContext`

- `useContext` can be used to share state without having to pass props from parent to child

### `useRef`

- Allows us to programmatically make reference to an element or value
- `useRef` returns the same object on every render so we have a consistent reference

### Component Libraries

- Why build it yourself if someone else already has??
- consistent design
- recommend for finals

### Things we learned today

- use useRef when you have a stale state problem. It helps bind to the current value.
- using react-router for routing in react; especially using `useRouteMatch` to generate flexible nested routes.
- learned about component shopping with component ui libraries and customizing examples from their website.

