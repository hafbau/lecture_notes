Rails review
===

## Today's Agenda

- [] Rails: Lessons learned [10m]
- [] Anatomy of a Rails App - a.k.a MVC [10m]
- [] Build something with Rails API ..er .. and react?

### Rails / Jungle Lessons learned

What lessons have we learned about Rails?
- learned about MVC and how to interact with it ... not sure how feels about it.
- Like the fact that rails makes scaffolding easy
- taking over a legacy code base without totally losing our minds
  + pattern recognition
- not conflating ruby with rails. Rails has the magic, ruby has the gem.

### Lets build airBnB but for home office sharing. [10m]

  - Setting expectations

  - So the goal is that we're going to build a Rails API
    + And a React frontend; if we have enough time
    + The focus though is more on the Rails API

Any Questions?? Let's begin!


### Rails API [40m]

Name??: officeBnB // deskStack //

- user should be able to see all listings
- user should be able to list their home office
- user should be able to book a listing
- listings can have review
  + reviews will have ratings
  + reviews can have text content
- listings must have at least on photo

#### Entities

- User
  + first_name, last_name, email, password, avatar

  ```bash
  rails generate scaffold user first_name last_name email password avatar
  ```

- Listings
  + title, photos, description, location, price, post_date, is_pets-allowed?, owner_id
    
  ```bash
  rails generate scaffold listing title photos location:text description:text price:decimal is_pets_allowed?:boolean user:references
  ```

- Reviews
  + rating, content, listing_id, author_id
    
  ```bash
  rails generate scaffold review rating:integer content:text listing:references user:references
  ```

### The GUI


### Learned something?

- How to repurpose material ui (component library in general) in our app
- Learned about routes scoping in rails. In particular we scoped all api endpoints with '/api/v1' including versioning
- We also learned the difference between scoping and nested resources.
- Using faker to create dynamic (random) seed data.
- Learned about `--api` flag to `rails new` which scaffolds json endpoints rather than rendering views




### To rollback a scaffold

`rails destroy scaffold already-scafollded-entity`

## References

[KV's notes / lecture](https://web.compass.lighthouselabs.ca/activities/433/lectures/3405) - Thanks KV!

[Travis' notes](https://web.compass.lighthouselabs.ca/activities/433/lectures/3263) - Thanks Travis!

[dbdiagram.io](dbdiagram.io) - visualizing your `schema.rb` file.

[Learn more about Action Cable and websocket](https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296)

[Authentication Rails / React JWT](https://levelup.gitconnected.com/jwt-auth-in-a-react-rails-app-8a7e6ba1ac0)