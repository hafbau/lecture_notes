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
};

function showLoading() {
  $(".loading").show();
};

function hideLoading() {
  $(".loading").hide();
};