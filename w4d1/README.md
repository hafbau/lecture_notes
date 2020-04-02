# Intro to CSS

Today's notes is courtesy of Dominic from Montreal and Karl from Vancouver. Check out some of the resources below and enjoy styling!

[notes and code are here](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w4d1)

## Agenda

- Writing semantic HTML
- Intro to CSS
  - Box model
  - block level elements vs inline elements
  - Box sizing: border-box (non-default)
  - CSS Specificity

## Tweeter Project

- [Tweeter Project](https://web.compass.lighthouselabs.ca/projects/w3-tweeter?day_number=w04d1)

## Approach

- As the weeks progress there is lesser emphasis on giving you all the resources, functions, tips that you need to complete an activity
- You're expected to research some topics on your own
- Focus is on plain vanilla CSS for now
- CSS is ~~frustrating~~ awesome; visual feedback and declarative!

## Writing semantic HTML

- Tags give meaning to the content
  + For accessibility e.g. screen readers can find navigation in `nav`
  + For developer?
  + For bots like search engines, scraper?

- List of semantic tags introduced in HTML 5

```html
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```


## CSS
It Cascades!

### Default styles / Dev tools

- HTML elements come prestyled. Not neccessarily the styles we want, so our job is restyling.

- [**reset.css**](https://meyerweb.com/eric/tools/css/reset/index.html) / **normalize.css** helps reset browser (user-agent) styles, so we can style elements with more reliable expectations.

### Add Styles

3 ways to add styles

- Inline: using the `style=""` attribute on html elements.
- Internal: putting styles within the `<style>` tag; usually in the `<head>` of the html document.
- External: writing styles in `.css` files and linking to the html document.

### CSS Syntax

- style attribute for inline styles

```html
<main style="property: value; another-property: another-value;">
  some main content
</main>
```

- selector + style block

```css

selector, selector1 {
  property: value;
  property: value;
  ...
}
```

### Types of Selectors

- Basic / tag Selector
- Class Selector
- ID Selector
- Attribute Selector
- Relational Selectors
  - Descendant Selector
  - Adjacent Sibling
  - more ...

### Selector Specificity

- The more specific selector gets applied
- A score is attributed to a selector

  - num of ids x 100 pts
  - num of classes x 10 pts
  - num of elements x 1pt

### What can we style?

- Texts e.g. text color, font-family, font-size, line-height etc
- Boxes, BOXES?? Yes, the Box Model!

## The Box Model
This model describes the category of spaces occupied by HTML elements. We used a metaphor of a rectangular building.

![Box model](https://cdn-images-1.medium.com/max/800/1*T9PFj7v8hFovBOR2qW0JYg.png)

- Content - Space occupied by the content.
  + Metaphorically, the space occupied by the building structure.
  + By default the width and height properties of the element marks the dimension of this space.


- Padding - This space immediately surrounds the content.
  + Think of it as the yard space with grasses surrounding the building.
  + There are four padding spaces; at the top, the right, the bottom and the left.
  + Hence `padding-top`, `padding-right`, `padding-bottom` and `padding-left` are valid CSS properties the could typically be set on HTML elements.
  + The shorthand property `padding` allows us to assign all the four padding spaces at once.

    For example:

    ```css
    /** Example 1: Can assign padding spaces individually */
    main {
      padding-top: 10px;
      padding-left: 20px;
      padding-right: 15px;
      padding-bottom: 25px;
    }

    /** Example 2: Can use shorthand to apply values to all sides
    *** It follows  the clockwise direction starting from the top
    *** i.e. padding-top padding-right padding-bottom padding-left
    **/
    main {
      padding: 10px 15px 25px 20px;
    }

    /** Example 3: Can use shorthand to apply
    *** the same value to all sides
    **/
    main {
      padding: 10px;
    }

    /** Example 4: Can use shorthand to apply same values to opposite sides
    *** It follows top/bottom then right/left
    *** i.e. padding-top/padding-bottom padding-right/padding-left
    *** the below will assign 10px as padding-top and padding-bottom, and then
    *** assign 15px as padding-left and padding-right
    **/
    main {
      padding: 10px 15px;
    }

    /** Example 5: Can use shorthand to apply same values to right & left and
    *** different values to top and bottom
    *** It follows top right/left bottom
    *** i.e. padding-top padding-right/padding-left padding-bottom
    *** the below will assign 10px as padding-top, 15px as padding-left and padding-right,
    *** and finally 20px as padding-bottom
    **/
    main {
      padding: 10px 15px 20px;
    }
    ```


- Border - The space acting as boundary to the padding is the border.
  + This will be the space occupied by the perimeter fence of the building, enclosing the yard
  + There are three important properties we could set of a border; `border-width`, `border-style` which could be one of `none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`, and `border-color`.
  + There are four border spaces; at the top, the right, the bottom and the left.
  + Hence `border-top`, `border-right`, `border-bottom` and `border-left` are valid CSS properties the could typically be set on HTML elements.
  + The shorthand property `border` allows us to assign the three properties for all the four border spaces at once.

    For example:

    ```css
    /** Example 1: Can assign border spaces individually */
    main {
      border-top: 1px solid blue;
      border-left: 2px dashed red;
      border-right: 3px dotted green;
      border-bottom: 4px double black;
    }

    /** Example 2: Can use shorthand to apply values to all sides */
    main {
      border: 10px groove tomato;
    }

    /** Example 3: Can use shorthand to apply same values for the individual
    *** properties to all sides
    **/
    main {
      border-width: 10px;
      border-style: groove;
      border-color: tomato;
    }

    /** Example 4: Removes borders on all sides*/
    main {
      border: none;
    }
    ```


  - Margin - This space immediately surrounds the content.
    + Think of it as the space beyond the perimeter fence that envelopes the property from the neighboring properties.
    + There are four margin spaces; at the top, the right, the bottom and the left.
    + Hence `margin-top`, `margin-right`, `margin-bottom` and `margin-left` are valid CSS properties the could typically be set on HTML elements.
    + The shorthand property `margin` allows us to assign all the four margin spaces at once.

      For examples see padding examples above.

- What about box-sizing?

- [Interactive box-model demo](http://guyroutledge.github.io/box-model/)

## Displaying the boxes

### Block-Level Elements

- Block-level elements are taking 100% of the container
- Breaks the flow of the content
- `div, h1, p, li` are block-level elements

### Inline Elements

- Inline elements are taking only the space bounded by the tag
- Does not disrupt the flow of the content
- The top and bottom margins/paddings are NOT respected
- `span, em, strong` are inline elements

### Inline-block elements

- Behave like inline elements
- The top and bottom margins/paddings are respected
- Does not break the line

The CSS display property can change the type of element

```css
span {
  display: inline-block;
  color: green;
  padding: 1em;
  margin: 0.5em;
  border: 1px solid mediumblue;
}
```

## Layout
### with Floats

- Float is a CSS positioning property.
- Initially used to wrap text around images
- Floats is used for web layouts
- Element can be floated left or right
- Since the flow is changed, elements are not part of the normal flow
- The parent element contained floated elements will collapse


### with Flexbox

- Better way to layout elements

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [Practice with Flexbox froggy](https://flexboxfroggy.com/)


## Resources

There are a lot of resources for CSS. It is very easy to fall into the habit of finding someone elses example. Copying it and pushing it around until it works for you. It may seem like this is an easier solution than actually learning CSS. CSS is one area that you can get yourself into trouble with bad early decisions.

Just like anything it will take time, and just like anything it feels more complicated than it actually is.

- [Karl Jensen's CSS PDF](https://github.com/hafbau/lecture_notes/blob/master/02_14_oct_19/w4d1/karl_jensen_css.pdf)
- https://css-tricks.com/
  + https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- http://guyroutledge.github.io/box-model/
- http://www.codeanalogies.com
- https://www.dagusa.com/ [Every F Bootstrap Website Ever]
- http://learnlayout.com/
- http://alistapart.com/topic/css
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- http://getbem.com/

We aren't worrying about the latest CSS frameworks at this point. There are also a lot of popular tools like Sass that we can work with later.

## Bonus

You are going to notice that when you search for HTML, CSS and JavaScript keywords the primary results will be from W3Schools. Avoid these results. Anytime you search for something add the term 'MDN' for Mozilla Developer Network documentation. Even better would be to use the search at [developer.mozilla.org](https://developer.mozilla.org/).

Good search engine optimization doesn't mean good documentation. The W3Schools material is likely to include the information you need. In my opinion it doesn't provide the same quality of information and provides a dated user experience.

Google helps us find a lot of good information. It is important to start recognizing the difference between good and bad documentation. Clicking on the first returned result without considering the source is a good habit to __break__.