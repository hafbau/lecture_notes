const BASE_URL = 'https://jsonplaceholder.typicode.com';
let startPage = 0;
$(() => {

  $('#new-post').on('submit', handleSubmit);
  $("#load-more").click(handleLoadMore)
  

  loadGrams(startPage)
});

const usernames = [
  'hafizDaFeik',
  'samFakeCEO',
  'christerlKlair'
];

const getName = () => usernames[Math.floor(Math.random() * usernames.length)];
const getAuthor = (avatarSize = 60) => {
  const randomName = getName();
  return {
    name: randomName,
    avatar: `https://picsum.photos/seed/${randomName}/${avatarSize}`
  };
}

function handleLoadMore() {
  loadGrams(startPage++);
}

function handleSubmit(event) {
  event.preventDefault();
  $.post(`${BASE_URL}/posts`, $('#new-post').serialize(), (post) => {
    post.author = getAuthor();
    post.comments = [];
    renderPost(post, $('#posts'));
  });
}
function showLoading() {
  $(".loading").show();
}
function hideLoading() {
  $(".loading").hide();
}

function renderPost(post, $container = $("#posts")) {
  hideLoading();
  $container.append(buildGramHTMLWithData(post));
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
          post.photo = `https://picsum.photos/seed/${post.title}/536/354`
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

function buildGramHTMLWithData(data) {
  return `
    <article class="post">
      <header>
        <img class="avatar" src="${data.author.avatar}" alt="${data.author.name}">
        <strong>${data.author.name}</strong>
      </header>
      <img class="photo" src="${data.photo || data.body}" alt="${data.title}">
      <div class="actions">
        <a href="#like">Like</a>
        <a href="#comment">Comment</a>
        <a href="#share">Share</a>
      </div>
      <div class="comment title">
        <strong>${data.author.name}</strong>
        <span>${data.title}</span>
      </div>
      <a class="comment-count" href="#count">View all ${data.comments.length} comments</a>
      <div class="comments">
        ${data.comments.map(comment => `
          <div class="comment title">
            <strong>${comment.email}</strong>
            <span>${comment.body}</span>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}