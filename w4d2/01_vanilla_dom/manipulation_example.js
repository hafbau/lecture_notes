// DOM Manipulation
// [x] 1. Create an intro element
// [ ] 2. Insert before content
// [ ] 3. Insert html string

// 1.
const introEl = document.createElement('h2')
// introEl.innerHTML = '<span>Do it!</span>'
const introText = document.createTextNode('I am Vanilla Ice, common bounce!')
introEl.appendChild(introText)

//2.
const contentEl = document.getElementsByClassName('content')[0]

contentEl.before(introEl)

// 3.
const imgStr = '<img src="https://ichef.bbci.co.uk/images/ic/960x540/p01bqv8r.jpg" />'

introEl.insertAdjacentHTML('beforebegin', imgStr)