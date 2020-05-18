## Intro to CSS

## Agenda today

- [] Tips / Housekeeping [5m]
- [] Demo final App [5m]
- [] HTML review [10m]
- [] CSS review [15m]
- [] The Box Model [10m]
- [] Flexbox Intro - CSS Tricks [10m]
- [] Flexbox layout - Every Funny Website Ever [30m]


## Tips / Housekeeping

- As the weeks progress there is lesser emphasis on giving you all the resources, functions, tips that you need to complete an activity
- You're expected to research some topics on your own
- Focus is on plain vanilla CSS for now
- CSS is ~~frustrating~~ awesome; visual feedback and declarative!

## Demo final app

- [Tweeter Project](https://web.compass.lighthouselabs.ca/projects/w3-tweeter?day_number=w04d1)


## HTML - review

**Why do HTML?**
  + context over content

**Why semantic tags?**
  - accessibility
  - developer readability
  - SEO e.g. google page summary; what's the most vital part of a website

**Examples of semantic tags:**
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


## CSS - review

**What does Cascade mean?**
  - top down
  - inheritance


**What are default styles? And how do we inspect them?**

- aka user agent stylesheet

**reset.css** why?
  + [**reset.css**](https://meyerweb.com/eric/tools/css/reset/index.html) / **normalize.css** helps reset browser (user-agent) styles, so we can style elements with more reliable expectations

**What are the 3 ways to add styling to an HTML document?**
  + which one is most specific?
    - inline with style attribute `style=""`
    - link from external css file
    - internal with style tags usually in the `head`

### CSS Syntax

- style attribute for inline styles
  ```html
  <main style="property: value; another-property: another-value;">
    some main content
  </main>
  ```
  + hard to reuse and maintain

- selector + style block
  
  ```css
  selector, selector2 {
    prop: val,
    property2: value2,
    ..
  }
  ```

### Types of Selectors and their specificity

- Basic / tag Selector
- Class Selector
- ID Selector
- Attribute Selector
- Relational Selectors
  - Descendant Selector
  - Adjacent Sibling
  - more ...

#### Demo 1 - Selectors and specificity review

## Box Model

- Karl's slide


# B R E A K [5-10m]


## Demo 2 - Intro to Flexbox [10m]

## Demo 3 - Flexbox layout - Every fucking website [40m]


## Closing remarks [5m]

  - IRL we always use a reset or normalize css (and therefore border-box)
  - MDN > W3Schools ... CSS-Tricks is also great
  Add MDN to all of your search queries in Google to get MDN-focused results

## What we learned [5m]

- Learned about the Cascading nature of CSS - i.e. it inherits and file is read top down

- Specificity and how different selectors fair on the spectrum

- We learned about CSS Box model and how we might style them using the TRBL shorthand

- Learned about flexbox and the properties we could set on a parent element
