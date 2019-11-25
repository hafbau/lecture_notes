Component Based UI with React
===

Hey crew, thanks for sitting through today's lecture and I'm sorry to have forgotten your bathroom break for an additional 20mins!!

[Here's the code on github](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1)

- [Live demo of react is in `demo_tweeter` folder](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1/demo_tweeter)
- [amyTweeter folder contains Amy's Tweeter project clone](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1/amyTweeter)
- [amyTweeterGUI folder](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1/amyTweeterGUI) - is an experiment to build component based UI that is separated from its back end, using jQeury and no react. This is only to drive home the fact that React is not just about modularization / composition with components.

Here are some of the points we talked about:

[x] Review Reading - What is react and why questions?
  - [Not just components](https://reactjs.org/docs/web-components.html)
  - [It's more about Performance](https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary) - recall how we _unperformantly_ (not sure that's a word), re-render tweets when a new tweet is created? React makes that re-render performant.
  - [Declarative vs Imperative](https://web.compass.lighthouselabs.ca/days/w06e/activities/984)
  - [JSX Rules](https://web.compass.lighthouselabs.ca/days/w06e/activities/988)
    - [x] All tags must be closed
    - [x] A child tag must close before its parent
    - [x] All JSX expressions must result in one root level element
    - [x] No HTML comments

[x] React.pdf - tampered Karl's slides to show component hierarchy design and data model.

[x] Design to Components - Design breakdown excercise.
  - [x] Tweeter
    - Nav
      + ComposerToggler
      + Logo??

    - ProfilePic
    - MainContent
      + Composer
      + TweetsList
        - Tweet
  - [x] Dribbble - Group work; we broke this design down to components: [Mobile home app design](https://dribbble.com/shots/8504649-Mobile-Digital-Home-03)

#### Demo

- [x] CRA
- [x] Storybook
- [-] Tweeter React
  
  Patterns to talk about

    - [x] Passing Props
    - [x] Looping Pattern
    - [x] Passing children with JSX
    - [x] Fragments
    - [x] ES6 review in tandem
        + [x] destructuring
        + [x] map
    - [] Handling DOM events
    - [] Managing state
    - [] Controlled inputs
    - [] Conditional rendering