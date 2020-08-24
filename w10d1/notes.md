Rails review
===

## Today's Agenda

- [] Rails: Lessons learned [10m]
- [] Anatomy of a Rails App - a.k.a MVC [10m]
- [] Build something with Rails API ..er .. and react?

### Rails / Jungle Lessons learned

What lessons have we learned about Rails?

- ruby is cool
- the synchronous nature of ruby is more intuitive
- had less time to get familiar with it aka Jungle
- Active record is really cool. (ORM)
- there's good /bad to rails magic

Two options of using rails with react
- react-rails
- SPA (API + GUI)

## DEMO 
### Lets build a shoe store. [10m]

  - Setting expectations

  - So the goal is that we're going to build a Rails API
    + And a React frontend; if we have enough time
    + The focus though is more on the Rails API

Any Questions?? Let's do this??? Let's do this!


### Rails API [40m]

Name??: ShoeJungle

- user should be able to see all listings of shoes
- user should be able to list their worn out shoes
- user should be able to rent a shoe
- shoe listings can have review
  + reviews will have a smell ratings
  + reviews can have text content
- shoes listings must have at least one photo
-

#### Entities and attributes

- User
  + email, password, avatar, first_name, last_name, superUser

- Listings
  + size, price, age, condition (free text), location, description, title, photos, owner, spy_level (1-10)

- Reviews
  + smell_rating, content, comfort_level, author_id, shoe_id


### The GUI



### To rollback a scaffold

`rails destroy scaffold already-scafollded-entity`

### Learned something?

- scaffold generator with rails api
- looping through data in react to render jsx
- Using sample code from material ui (or any component library for that matter)



## References

[KV's notes / lecture](https://web.compass.lighthouselabs.ca/activities/433/lectures/3405) - Thanks KV!

[Travis' notes](https://web.compass.lighthouselabs.ca/activities/433/lectures/3263) - Thanks Travis!

[dbdiagram.io](dbdiagram.io) - visualizing your `schema.rb` file.

[Learn more about Action Cable and websocket](https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296)

[Authentication Rails / React JWT](https://levelup.gitconnected.com/jwt-auth-in-a-react-rails-app-8a7e6ba1ac0)