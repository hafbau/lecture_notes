# W8D4 - Class-based Components

### To Do
- [x] Review ES6 Classes
- [x] Intro to Class-based Components
- [x] Passing Props
- [x] Handling Events and Changes to State
- [x] Lifecycle Methods

### What we learn

- Good recap on javascript classes and objects (instance of)
- Learned three ways to bind `this` AND why it's important to do so.
- Learned five life cycle methods and when they are called by React.
- Learned how arrow function binds to the global scope (in this case the defining class)

### Review ES6 Classes
* Classes are [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for functions that return objects
* You can make reference to the objects own properties and methods using the `this` keyword
* When a new object is created, any arguments used will be passed as parameters to the constructor method


### Class Components
* An alternative to creating functional components using ES6 classes
* Used for making stateful components prior to the release of hooks


### Passing Props
* Components can access props passed to them using `this.props`
* Props are passed from parent-to-child via attributes


### Handling Events and Changes to State
* Event handlers need to be bound to the component instance using the `bind` method
* Binding the method makes sure that any references to `this` inside the function will point to the component instance

* Just like with functional components, we never want to mutate state directly

* Instead, we use the `setState` method to update state
* The value passed to `setState` will be _merged_ into the components state


### Lifecycle Methods
* During a components _lifecycle_, it will go through several different events such as mounting, rendering, unmounting, and updating (not necessarily in that order)

* The React API exposes various methods that allow us to write code that will run during these events

```js
// the component has mounted successfully
// set up timers or create socket connections in this method
componentDidMount() {}

// runs every time the component updates
// run logic that depends on state or props
componentDidUpdate(prevProps, prevState) {}

// runs right before the component unmounts
// clear intervals and close connections; perform any cleanup necessary
componentWillUnmount() {}
```

![Lifecycle Methods](https://miro.medium.com/max/4560/1*EnuAy1kb9nOcFuIzM49Srw.png)

### Useful Links
- [ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [FCC: Why do we bind `this`?](https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/)
- [React Docs: `setState`](https://reactjs.org/docs/react-component.html#setstate)
- [`super(props)` vs `super()`](https://overreacted.io/why-do-we-write-super-props/)
- [Lifecycle Methods](https://programmingwithmosh.com/javascript/react-lifecycle-methods/)
