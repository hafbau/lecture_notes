# W8D2 Real World React

### Agenda today
- [x] Routing with React Router
- [x] Advanced Routing
- [x] Styled Components
- [x] `useContext`
- [x] `useRef`
- [ ] Component Libraries

### Routing

- Why routing in SPA?

- How did we do it in Scheduler?
  + routing === transitioning
  + useVisualMode

https://reacttraining.com/react-router/web/guides/quick-start

### Advanced Routing
* It is possible to nest `Router` components
  - we used useParams to fetch dynamic params from a nested `Product` component
  - we use useRouteMatch to make our nested routes dynamic and future proof.


### Styled Components
* Styled components allow us to embed our styles inside our JavaScript
https://styled-components.com/docs/basics


### `useContext`
* `useContext` can be used to share state without having to pass props from parent to child



### `useRef`
* Allows us to programmatically make reference to an element or value
* `useRef` returns the same object on every render so we have a consistent reference



### Component Libraries
* Why build it yourself if someone else already has??



### Things we learned today

- Styled Components looks pretty awesome. Dynamic styling is fun.
- How useRef actually works. The name `ref` for `reference` makes more sense, since it is a reference to an object that persists through rerenders.
- The process of creating routes seemed super easy (x2).
- The ability to easily pass state values across components without props drilling.