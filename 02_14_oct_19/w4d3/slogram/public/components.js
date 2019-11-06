const makePost = (post) => `
  <article class="post">
    <header>
      <img src="https://picsum.photos/seed/${post.userId}/60" alt="" class="avatar">
      <strong>samIsCool??</strong>
    </header>
    <img src="${post.body}" alt="" class="photo">
    <div class="actions">
      <a href="#like">Like</a>
      <a href="#like">Share</a>
      <a href="#comment">Comment</a>
    </div>
    <a href="##" class="comment-count">View all 0 comments</a>

    <div class="comments"></div>
  </article>
`;