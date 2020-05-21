## Responsive Design

- [] Responsive Design
- [] Flexbox
  + [] Classwork
- [] CSS Preprocessors and Sass

## What is resonsive design?

- Mobile accounts for over 50% of web traffic worldwide.
- [Ref.: statista](https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/)

- A multitude of different screen sizes exist across phones, "phablets," tablets, desktops, game consoles, TVs, and even wearables.
- Responsive design means that your Web app can adapt to any screen size and provide a good user-experience

## Mobile-First Design

- Create the layout for mobile first (more restrictions)
- Extend the layout for larger screen after

## View Port and Units

### View Port

- The viewport is the user's visible area of a web page.
- The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>What is View Port</title>
</head>
```

- A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.

- The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

- The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

- [What is The Viewport?](https://www.w3schools.com/css/css_rwd_viewport.asp)

### Units

- Absolute Length Units

| Unit | Name        |
| ---- | ----------- |
| cm   | centimeters |
| mm   | milimeters  |
| in   | inches      |
| pt   | point       |
| px   | pixels      |

- Relative Length Units

| Unit | Relative to                                              |
| ---- | -------------------------------------------------------- |
| em   | Font Size of the parent                                  |
| rem  | Font Size of the root element                            |
| vw   | 1% of the viewport's width.                              |
| vh   | 1% of the viewport's height.                             |
| vmin | 1% of the viewport's smaller dimension.                  |
| vmax | 1% of the viewport's larger dimension.                   |
| %    | Percentage of the parent size (width, height, font-size) |

## Classwork [15 + 5 + 5m]

[Image list here](https://gist.github.com/hafbau/fdcbfd45afdfb7e3f030931dbf3db585)

- create a Tiger King ImageGridList as seen on google.com
- make it responsive (reduce the picture shown at 500px)

## Sass

- CSS Preprocessor (thing to google on MDN)

## What we learned today

- We learned about the awesome .scss where we could create variables, extend and mixins (like a function)
- Flexbox especially about how to create proportions on chioldren elements with `flex` shorthand. To read up more on CSS tricks
- Learned about media queries and how to set views based the device (medium e.g screen, print etc)
- Always ... ALWAYS add the viewport meta tag for device-width and scaling.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```