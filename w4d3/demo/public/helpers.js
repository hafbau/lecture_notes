// $.getJSON('https://jsonplaceholder.typicode.com/posts')
const loadBGram = () => {
  $.getJSON('/api/posts')
    .then(function (posts) {
      $('#container').empty()
      for (const post of posts) {
        $('#container').prepend(buildBGramHTML(post))
      }
    });
}

const buildBGramHTML = function (data) {
  return (
    `<article class='post'>
        <div className="content">
          <img src="${data.image}" alt="" className="post-photo"/>
          <p className="text">${sanitize(data.text)}</p>
          <footer>
            <img src="${data.owner.avatar}" alt="" className="avatar"/>
            <em>${data.owner.name}</em>
          </footer>
        </div>
      </article>`
  )
}

const handleFormSubmission = function (ev) {
  ev.preventDefault();
  const data = $(this).serialize();
  $.post('/api/posts', data)
    .then(function (response) {
      console.log('response AFTER POST:>> ', response);
      loadBGram()
    })
}

const sanitize = (str) => {
  const div = document.createElement('div');
  const textNode = document.createTextNode(str)
  div.appendChild(textNode)
  return div.innerHTML;
}