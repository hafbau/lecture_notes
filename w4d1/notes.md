## Intro to CSS

## Agenda today

- [] Tips / Housekeeping
- [] Demo final App
- [] HTML review
- [] CSS review (slides)
- [] Specificity
- [] Flexbox Intro - CSS Tricks
- [] Flexbox layout - Every


## Tips / Housekeeping

- As the weeks progress there is lesser emphasis on giving you all the resources, functions, tips that you need to complete an activity
- You're expected to research some topics on your own
- Focus is on plain vanilla CSS for now
- CSS is ~~frustrating~~ awesome; visual feedback and declarative!


## Demo final app [5m]
https://web.compass.lighthouselabs.ca/projects/w3-tweeter?day_number=w04d1


## HTML - review? [5m]

- **Why do HTML?**
  + Context to content
- **Why semantic tags?**
  + accessibility e.g. screen readers
  + developer readability
  + SEO e.g. google page summary; what's the most important text on the page - content hierarchy
- **Examples of semantic tags:**
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
  <output>
  <section>
  <summary>
  <time>
  ```


## CSS - review [15m]

### Slide review

- **What does Cascade mean?**
  + top down
  + inheritance

- **The Box Model - what?**
  + Interactive Boxmodel: http://guyroutledge.github.io/box-model/

- **reset.css** why?
  + [**reset.css**](https://meyerweb.com/eric/tools/css/reset/index.html) / **normalize.css** helps reset browser (user-agent) styles, so we can style elements with more reliable expectations e.g. 8px margin on body


### Types of Selectors and their specificity

**Use `specificity.html`**

- Basic / tag Selector
- Class Selector
- ID Selector
- Attribute Selector
- Relational Selectors
  - Descendant Selector
  - Adjacent Sibling
  - more ...

> Remark about selection consistency. I use classes for the most part


# B R E A K [10m]

**RESUME RECORDING**

## Intro to Flexbox [30m]

- Open CSS Tricks flexbox
- open flexbox.html
- walkthrough parent properties


## Flexbox layout - Every fucking website [20m]

- Show them the goal - dagusa.com
- create layout.html emmet
  + nav emmet: `nav.nav>div.nav-logo{The Logo}+ul.menu>li.menu-item*4{menu $}`
  + header emmet: `header#header.one-column>h1.one-column_title{Hey Look!}+div.divider{___}+p.one-column_text+a[href='#first'].button{Button that makes the page scroll}`
  + first section emmet: `section#first.one-column>h2.one-column_title+div.divider{___}+p.one-column_text+a[href='#second'].button{Google that shit}`
  + second section emmet: `section#second.one-column>h2.one-column_title+div.divider{___}+ul.four-columns>(li.one-fourth>i.icon+h3+p)*4`

- style layout first, then background then colour

## Closing remarks [5m]

  - IRL we always use a reset or normalize css (and therefore border-box)
  - MDN > W3Schools ... CSS-Tricks is also great
  Add MDN to all of your search queries in Google to get MDN-focused results

## What we learned [5m]