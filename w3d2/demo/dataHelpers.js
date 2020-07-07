// DATA
const users = {
  'rnd-user-1': 'Terry Bull',
  'rnd-user-2': 'Al Kohorlich',
  'rnd-user-3': 'DJ Khaled'
}

const jokes = {
  'rnd-joke-1': {
      id: 'rnd-joke-1',
      text: 'If a child refuses to sleep during nap time, are they guilty of resisting a rest?',
      image: 'https://parade.com/wp-content/uploads/2019/12/Corny-Jokes-5.jpg',
      userID: 'rnd-user-1',
  },
  'rnd-joke-2': {
      id: 'rnd-joke-2',
      text: 'How do you make holy water? You boil the hell out of it.',
      image: 'https://i.pinimg.com/474x/bd/59/5b/bd595b70360350a143cfb76cd15f1e42--mom-jokes-puns-jokes.jpg',
      userID: 'rnd-user-2',
  },
  'rnd-joke-3': {
      id: 'rnd-joke-3',
      text: 'What do you call someone with no body and no nose? Nobody knows.',
      image: 'https://i.pinimg.com/474x/ed/d6/af/edd6af4f431488973afb2c780816dc00--best-of-kanye-west-kanye-memes.jpg',
      userID: 'rnd-user-3',
  },
  'rnd-joke-4': {
      id: 'rnd-joke-4',
      text: 'What concert costs just 45 cents? 50 Cent featuring Nickelback!',
      image: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/05/B_LRhwln2yV-png__700.jpg',
      userID: 'rnd-user-3',
  }
}

const comments = [
  {
      id: 'rnd-comment-1',
      text: 'rad',
      jokeID: 'rnd-joke-1',
      userID: 'rnd-user-2',
  },
  {
      id: 'rnd-comment-2',
      text: 'ha ha ha',
      jokeID: 'rnd-joke-1',
      userID: 'rnd-user-3',
  },
  {
      id: 'rnd-comment-3',
      text: 'not funny 🙄',
      jokeID: 'rnd-joke-2',
      userID: 'rnd-user-3',
  }
]

// HELPERS
const generateRandomID = () => Math.random().toString(16).slice(2, 8)

const getComments = (jokeID) => comments.filter(comment => comment.jokeID === jokeID)

module.exports = {
  users,
  jokes,
  comments,
  generateRandomID,
  getComments
}