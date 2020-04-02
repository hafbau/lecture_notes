Component Based UI with React
===

Hey crew, thanks for sitting through today's lecture. Sorry for taking that extra 14mins to talk about useState!!

Videos for today are i two parts:
[Part I](https://youtu.be/xJjjX4QXjWY)
[Part II](https://youtu.be/swhSzQNk_mI)

[Here's the code on github](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1)

- [Live demo of react is in `demo_tweeter` folder](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1/demo_tweeter)
- [amyTweeter folder contains Amy's Tweeter project clone](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1/amyTweeter)
- [amyTweeterGUI folder](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1/amyTweeterGUI) is an experiment to build component based UI that is separated from its back end, using jQeury and no react. This is only to drive home the fact that React is not just about modularization / composition with components.

Here are some of the points we talked about:

[x] Review Reading - What is react and why ques3tions?

  - [Not just components](https://reactjs.org/docs/web-components.html)
  - [It's more about Performance](https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary) - recall how we _unperformantly_ (not sure that's a word), re-render tweets when a new tweet is created? React makes that re-render performant.
  - [Declarative vs Imperative](https://web.compass.lighthouselabs.ca/days/w06e/activities/984)
  - [JSX Rules](https://web.compass.lighthouselabs.ca/days/w06e/activities/988)
    - [x] All tags must be closed
    - [x] A child tag must close before its parent
    - [x] All JSX expressions must result in one root level element
    - [x] No HTML comments

[x] [React.pdf - tampered Karl's slides to show component hierarchy design and data model.](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w7d1/react.pdf)

[x] Design to Components - Design breakdown excercise.
  - [x] Tweeter
    - Nav
      + ComposerToggler
      + Logo??

    - ProfilePic
    - Composer
    - TweetsList
      + Tweet
  - [] Dribbble - We didn't do this in class. For practice, feel free to break this design down into components and it to me via slack: [Mobile home app design](https://dribbble.com/shots/8504649-Mobile-Digital-Home-03)

#### Demo

- [x] CRA
- [x] Storybook
- [x] Tweeter React
  
  Patterns to talk about

    - [x] Passing Props
    - [x] Looping Pattern
    - [x] Passing children with JSX
    - [x] Fragments
    - [x] ES6 review in tandem
        + [x] destructuring
        + [x] map
    - [x] Handling DOM events
    - [x] Managing state
    - [x] Conditional rendering
    - [] Controlled inputs - we did not get to this in class :( Compass will address this; and we could use a breakout to talk more about this.

#### Resources

VS code Snippets: https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets
Atomic Design concept: https://bradfrost.com/blog/post/atomic-web-design/
