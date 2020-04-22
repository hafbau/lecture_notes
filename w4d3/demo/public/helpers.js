const escape = function (str) {
  let div = document.createElement('div');
  // < => &lt; > => &gt;
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function loadPosts() {
  $.getJSON('/api/posts')
    .then((posts) => {
      console.log('posts :>> ', posts);
      const $postContainer = $('#container');
      for (const post of posts) {
        const postHtml = `
          <article>
            <img src="${escape(post.photo)}" alt="">
            <h3 class="title">${escape(post.title)}</h3>
            <p class="body">${escape(post.body)}</p>
            <footer>
              <strong class="username">${escape(post.user.name)}</strong>
              <img class="avatar" src="${escape(post.user.avatar)}" alt="">
            </footer>
          </article>
          `
        $postContainer.append(postHtml);
      }
    })
}