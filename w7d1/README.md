Component Based UI with React
===

Hey crew, thanks for sitting through today's lecture! Please check the `./react_tweeter` directory for a more complete version of our demo.

[Past videos for today is here:](https://zoom.us/rec/share/49AsMIDo_HhOT52Qq1GBS6R5IIfaaaa8hCUW-vUKzxwZGgkckKqW-FfHjvt2Chpv?startTime=1586795150000)

[Here's the code on github](https://github.com/hafbau/lecture_notes/tree/master/w7d1)

[codesandbox - props](https://codesandbox.io/s/props-ig1c6?file=/src/index.js)

The below is my past note for today's lecture.

- [Live demo of react is in `react_tweeter` folder](https://github.com/hafbau/lecture_notes/tree/master/w7d1/react_tweeter)
- [amyTweeter folder contains Amy's Tweeter project clone](https://github.com/hafbau/lecture_notes/tree/master/w7d1/amyTweeter)
- [amyTweeterGUI folder](https://github.com/hafbau/lecture_notes/tree/master/w7d1/amyTweeterGUI) is an experiment to build component based UI that is separated from its back end, using jQuery and no react. This is only to drive home the fact that React is not just about modularization / composition with components.

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

[x] [React.pdf - tampered Karl's slides to show component hierarchy design and data model.](https://github.com/hafbau/lecture_notes/tree/master/w7d1/react.pdf)

[x] Design to Components - Design breakdown excercise.
  - [x] Tweeter
    - Nav
      + ComposerToggler
      + Logo??

    - ProfilePic
    - Composer
    - TweetsList
      + Tweet
  - [] Dribbble - We didn't do this in class. For practice, feel free to break this design down into components and send it to me via slack: [Mobile home app design](https://dribbble.com/shots/8504649-Mobile-Digital-Home-03)

#### Demo

- [x] CRA
- [x] Storybook
- [x] Tweeter React

#### Resources

Atomic Design concept: https://bradfrost.com/blog/post/atomic-web-design/
VS code Snippets: https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets
