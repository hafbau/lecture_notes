const BASE_URL = ''//'https://jsonplaceholder.typicode.com';
function handleSubmit(event) {
  event.preventDefault();
  $.post(`${BASE_URL}/posts`, $('#new-post').serialize(), (post) => {
    post.author = getAuthor();
    post.comments = [];
    renderPost(post, $('#posts'));
  });
}

function renderPost(post, $container = $("#posts")) {
  hideLoading();
  $container.prepend(buildGramHTMLWithData(post));
  return post;
}

function loadGrams(page = 0, limit = 5) {
  showLoading();
  // crude pagination. Should ideally be done on server
  const start = page * limit;
  const end = start + limit;
  $.getJSON(`${BASE_URL}/posts`)
    .then((posts) => {
      return Promise.all(
        posts.slice(start, end).map((post) => {
          post.author = getAuthor();
          // post.photo = `https://picsum.photos/seed/${post.title}/536/354`
          return $.getJSON(`${BASE_URL}/comments?postId=${post.id}`)
            .then((comments = []) => {
              post.comments = comments;
              return post;
            })
            .then(renderPost);
        })
      );
    })
    .then(embelishedPosts => {
      console.log('embelishedPosts :', embelishedPosts);
    })
    .fail((error) => {
      console.error(error);
    });
}