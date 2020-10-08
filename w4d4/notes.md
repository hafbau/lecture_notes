## Responsive Design

- [] Responsive Design
- [] Flexbox
  + [] Classwork
- [] CSS Preprocessors and Sass

## What is responsive design?

- Mobile accounts for over 50% of web traffic worldwide.
- [Ref.: google](https://www.google.com/search?q=share+of+website+traffic+coming+from+mobile+2020)

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
- make it responsive (reduce the picture shown at 800px)

https://www.gstatic.com/tv/thumb/tvbanners/18008931/p18008931_b_v8_aa.jpg
https://i.ytimg.com/vi/acTdxsoa428/maxresdefault.jpg
https://cnet4.cbsistatic.com/img/SHf-mha0zOZYHE1hab7dKpUKQ9Y=/940x0/2020/03/31/7cdc930c-12f2-4360-9a6f-0c2cbf7a987f/screen-shot-2020-03-31-at-12-37-47-pm.png
https://media.newyorker.com/photos/5e87b6bd391eb000086a4536/master/w_2560%2Cc_limit/200413_r36193web.jpg
https://cdn.vox-cdn.com/uploads/chorus_image/image/66564865/TigerKingExitSurvey_Getty_Netflix_Ringer.0.jpg
https://i.ytimg.com/vi/T3vQM5jNQ_I/maxresdefault.jpg
https://static01.nyt.com/images/2020/04/07/us/07xp-newtigerking/merlin_171122598_a64a8924-51f2-4010-a7a3-892b3e94513d-superJumbo.jpg

## Sass

- CSS Preprocessor (thing to google on MDN)

### Features

- [] Variables
- [] Nesting / Namespacing
- [] @extend

> Time permitting, will do

- [] @mixin
- [] modularization with partials / @import

## What we learned today


```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```