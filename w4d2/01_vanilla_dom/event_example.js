// Events
// [x] 1. Create a farts button element
// [x] 2. prepend to body
// [ ] 3. Write an handler function / console.log
// [ ] 4. Attach the handler to button's click listener
// [ ] 5. Improve the handler to manipulate DOM

// 1.
const buttonEl = document.createElement('button')
buttonEl.innerText = 'Farts'

// 2.
const body = document.getElementsByTagName('body')[0]
body.prepend(buttonEl)

// 3.
// event handler / event listener
const fartFn = (evt) => {
  console.log('evt.target :>> ', evt.target);
  console.log('THIS IS THIS?', this)
  // const span = document.createElement('span')
  // span.innerText = 'fart!'
  // buttonEl.after(span)
  // document.getElementsByTagName('button')[0]

  // evt.target.after(span)
}

// 4.
// - select the element
// - addEventListener
buttonEl.addEventListener('click', fartFn)

// 5.
