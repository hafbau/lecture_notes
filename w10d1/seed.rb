# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

users = User.create!(
  (1..50).map do |n|
    fname = Faker::Name.first_name
    {
      first_name: fname,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.email(name: fname),
      password: 'password',
      avatar: Faker::Avatar.image(slug: "homepods-avatar", size: "50x50", format: "jpg")
    }
  end
)

sizes = ["1024x683", "714x480", "1280x720", "1920x1080"]

listings = Listing.create!(
  (1..100).map do |n|
    {
      title: Faker::Company.catch_phrase,
      user_id: users.sample.id,
      photos: (1..3).map { Faker::LoremFlickr.image(size: sizes.sample,search_terms: ['home', 'office'], match_all: true) }.to_json,
      description: Faker::Hipster.paragraphs(number: 2).join("\n\n"),
      price: Faker::Number.decimal(l_digits: 2),
      location: Faker::Address.full_address,
      available_days: 'Mon, Tue and Taco Thursday',
      capacity: '2 people'
    }
  end
)

reviews = Review.create!(
  (1..1000).map do |n|
    {
      listing_id: listings.sample.id,
      user_id: users.sample.id,
      rating: Faker::Number.within(range: 1..5),
      comment: Faker::Restaurant.review
    }
  end
)

puts 'Seeds all done!'