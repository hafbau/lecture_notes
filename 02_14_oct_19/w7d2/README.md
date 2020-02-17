Data Fetching and Other Side Effects
===

Topics

- Run multiple servers
- Handle component side effects
  + Rules of Hooks
  + Dependency array
  + Cleanup

- Data fetching with React
- Compute values from existing state



## Run multiple servers
- run api on a port
- client on another

## Handle component side effects

### Rules of Hooks

**Rule #1**
Don't call Hooks inside loops, conditions, or nested functions.

**Rule #2**
Only call Hooks from the top-level of a function component or a custom Hook.

**Rule #3**
The effect method that we pass to useEffect must either return undefined or a function. The easiest way to avoid issues with this rule is always to declare your effect as a multiline function.

### useEffect

#### Add an effect

#### Dependency array

#### Cleanup

## Data fetching with React

## Compute values from existing state

  - selector?