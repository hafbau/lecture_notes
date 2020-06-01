Rails review
===

## Today's Agenda

- [] Rails: Lessons learned [10m]
- [] Anatomy of a Rails App - a.k.a MVC [10m]
- [] Build something with Rails API ..er .. and react?

### Rails Lessons learned

What lessons have we learned about Rails?

- Rails is too magic... incantations. Mixed feelings around likeness
  + Easy to pick up
- Ruby code is easy to read. `do stuff unless condition`
- ActiveRecord is awesome. Makes data layer a breeze to work with
- Generators makes scaffolding a lot faster.
- Migrations are interesting. Makes DB Management easy - ability to rollback is awesome.
  + it makes database structure easily scalable.
- Working with legacy code can be daunting but it also helps to boilerplate pre-existing code base

### Lets build airBnB but for home office sharing. [10m]

  - Setting expectations

  - So the goal is that we're going to build a Rails API
    + And a React frontend; if we have enough time
    + The focus though is more on the Rails API

Any Questions?? Let's begin!


### Rails API [40m]

Name: homoffBnB

- user should be able to see all listings
- user should be able to list their home office
- user should be able to book a listing
- listings can have review
  + reviews will have ratings
  + reviews can have text content

#### Entities

- User
  + first_name, last_name, email, password, avatar

- Listings
  + title, photos, description, address, price, post_date, pets_allowed, owner_id
  `rails generate scaffold listing title photos description address price:decimal pets_allowed:boolean user:references`

- Reviews
  + rating, content, author_id, property_id
  `rails g scaffold review content:text rating:integer user:references listing:references`

### The GUI


### Learned something?

- Learned about the `rails g scaffold` command that generates controllers, models, views(if not using the api flag), migrations and tests
- learned about scafolding a new rails app with the `--api` flag
- react / rails sample configuration, where we separate the frontend from the backend completely


### To rollback a scaffold

`rails destroy scaffold already-scafollded-entity`

## References

[KV's notes / lecture](https://web.compass.lighthouselabs.ca/activities/433/lectures/3405) - Thanks KV!

[Travis' notes](https://web.compass.lighthouselabs.ca/activities/433/lectures/3263) - Thanks Travis!

[dbdiagram.io](dbdiagram.io) - visualizing your `schema.rb` file.

[Learn more about Action Cable and websocket](https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296)

[Authentication Rails / React JWT](https://levelup.gitconnected.com/jwt-auth-in-a-react-rails-app-8a7e6ba1ac0)