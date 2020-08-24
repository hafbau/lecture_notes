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
      avatar: Faker::Avatar.image(slug: "shoe-jungle-avatar", size: "50x50", format: "jpg")
    }
  end
)

sizes = ["1024x683", "714x480", "1280x720", "1920x1080"]

shoes = Shoe.create!(
  (1..100).map do |n|
    {
      title: Faker::Company.catch_phrase,
      user_id: users.sample.id,
      photos: (1..3).map { Faker::LoremFlickr.image(size: sizes.sample,search_terms: ['shoe', 'feet', 'footwear'], match_all: true) }.to_json,
      description: Faker::Hipster.paragraphs(number: 2).join("\n\n"),
      size: Faker::Number.decimal(l_digits: 2),
      price: Faker::Number.decimal(l_digits: 2),
      age: Faker::Number.decimal(l_digits: 2),
      location: Faker::Address.full_address,
      spy_level: Faker::Number.decimal(l_digits: 2)
    }
  end
)

reviews = Review.create!(
  (1..350).map do |n|
    {
      shoe_id: shoes.sample.id, #shoes[Math.floor(Math.random * shoes.length)]
      user_id: users.sample.id,
      smell_rating: Faker::Number.within(range: 1..5),
      content: Faker::Restaurant.review
    }
  end
)

puts 'Seeds all done!'