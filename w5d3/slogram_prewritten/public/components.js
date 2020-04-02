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