// DOM Manipulation
// [x] 1. Create an intro element
// [ ] 2. Insert before content
// [ ] 3. Insert html string

// 1.
const introEl = document.createElement('h2')
const introText = document.createTextNode('I am Vanilla Ice, common bounce!')
introEl.appendChild(introText)

