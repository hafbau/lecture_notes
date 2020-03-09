# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create!([
  {
    email: 'user1@fake.com',
    password: 'password'
  },
  {
    email: 'user2@fake.com',
    password: 'password'
  },
])

stories = Story.create!([
  {
    status: 'completed',
    user_id: users.first.id,
    media_url: 'https://picsum.photos/seed/s/240/420',
    content: 'This is a storiful content. It all started with the storiful hero defeating the contemptful wicked villain.'
  },
  {
    status: 'ongoing',
    user_id: users.first.id,
    media_url: 'https://picsum.photos/seed/s/240/420',
    content: 'No stories yet... add to it now!'
  }
])

contributions = Contribution.create!([
  {
    story_id: stories.first.id,
    user_id: users.last.id,
    status: 'merged',
    content: 'It all started with the storiful hero defeating the contemptful wicked villain.',
    accepted_at: Time.now
  },
  {
    story_id: stories.last.id,
    user_id: users.last.id,
    status: 'pending',
    content: 'This is a new contribution Im adding to that good no-story story.',
    accepted_at: Time.now
  },
])

upvotes = Upvote.create!([
  {
    contribution_id: contributions.first.id,
    user_id: users.last.id
  }
])