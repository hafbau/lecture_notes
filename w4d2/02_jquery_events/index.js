// TODOs:
// - [ ] 0. not going to work; ready or not?
// - [ ] 1. Syntax diff with DOM / Alternatives
// - [x] 2. demo evt
// - [ ] 3. demo add farts to the sibling
// - [ ] 4. demo `this` with two sections (update html code)

// 0.
// $(document).ready(function(ev) {
  // 1. Syntax
  $('.fart-btn').click(function(evt) {
  // $('.fart-btn').on('click', function(evt) {
    // 2.
    console.log(evt.offsetX, evt.offsetY);
  
    // 3.
    // const $fartsContainer = $('.farts')
    const $fartsContainer = $(this).next('.farts')
    console.log('fartsContainer', $fartsContainer)
    // const domEl = document.getElementByClassName('farts');

    // console.log('domEl :>> ', domEl);
    $fartsContainer.append('fart')
  
    // 4.
    console.log('THIS', this)
    console.log('THIS jQuery', $(this))
  });
// })
