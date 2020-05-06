Rails review
===

Thanks crew! Here are some notes of things we covered today. As talked about, paying attention to the process pays *(see what I did there? 😉👉👉)*

[code here](https://github.com/hafbau/lecture_notes/w10d1/mvd)

[video link](https://us02web.zoom.us/rec/share/ucZHFYjK7nhOW6PryGX6U6kFWam5eaa82nIc-vcLykmJLHuLQtfKgMh7p_p5TMjs) *Only the first half here :(; hopefully will update the second part soon*

## Today's Agenda

- Lessons learned Ruby / Rails / Jungle
- MVC rails
- Scaffold a Rails API
  + with a React frontend


### Some new things we learned

- we can use jsx with rails
- using the scaffold command
- css library / component libraries save time in the frontend


## Creating a Rails / React stack for finals

### Lets build airBnB but for home office sharing. [10m]

Name of our patent pending app: **officeSpace / fishSpace**

#### User stories

- user must be able to see summary of all listings
- book a space
- list your space
- remove your space
- listing must have a title, photos, description, location, price, date posted, capacity, available_days
- listings should have reviews
- reviews have rating and comment
- user will email, first name , last, password, avatar

- We didn't get to build all the above, but the goal is that we're going to build a Rails API
    + And a React frontend; if we have enough time
    + The focus though is more on the Rails API


### Rails API

1. **Install rails:** 

2. **Scaffold:**

3. **Allow Cross Origin requests:** Put `gem 'rack-cors', :require => 'rack/cors'` in your `Gemfile`

4. **Scaffold Entities:**

In our app we had three entities:
- Users
- Listings
- Reviews

Altogether our API scaffold code looks like so:

```sh
rails generate scaffold user first_name last_name email password avatar
rails generate scaffold listing title photos description:text location price:decimal user:references
rails generate scaffold review rating:integer content:text user:references listing:references

```

5. **Run the migration:** This will create the database and the tables. `rails db:migrate`

####> Note about the db
> sqlite3 is the default installed database. We could change this to postgres.

7. Inspect the files starting from the `./config/routes.db` to the `./app/controllers` directory

8. **Scoping the API and nested resource:** Update the routes file (in [./config/routes.rb](https://github.com/hafbau/lecture_notes/blob/master/02_14_oct_19/w10d1/kahoot/kahoot-api/config/routes.rb)) to:

```rb
Rails.application.routes.draw do
  scope '/api/v1' do # newly added line
    resources :reviews
    resources :listings
    # resources 'admin' do
      resources :users
    # end
  end # newly added line
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
```

9: **Start the server:** `rails server -b localhost` The default port is `3000`

10: Seed some data. *See our seed in `db/seed.rb` of this code repo*. To run the seed, do `rake db:seed`

API altogether (without the seeding):

```sh
gem install rails
rails new fishSpace --api
cd fishSpace
rails generate scaffold user first_name last_name email password avatar
rails generate scaffold listing title photos description:text location price:decimal user:references
rails generate scaffold review rating:integer content:text user:references listing:references
rake db:migrate
rails s -b 0.0.0.0

```

### Errors you might encounter:

We did not experience any of these errors but I want to put it here anyways

**- a.**

At the `bundle install` step:

```
You must use Bundler 2 or greater with this lockfile. (Bundler::LockfileError)
```

**Fix**

  - delete your `Gemfile.lock`
  - `gem install bundler` - ensure it installs version greater than or equal to `2`. Mine installed version `2.1.4`
  - `bundle install`
  Together, the fix looks like: 
  
  ```sh
  rm Gemfile.lock
  gem install bundler -v 2.1.4
  bundle install
  ```

**- b.**

  When you run `gem install rails`

  ```
  ERROR: Error installing rails:
  zeitwerk requires Ruby version >= 2.4.4.
  ```

  **Fix**

  - change your ruby version to greater than 2.4.4 using `rvm`
    + `rvm use 2.6.0` (I have ruby version 2.6.0 installed)

  - if you do not have that ruby version installed; use rvm to install it first:
    + `rvm install 2.6.0` then
    + `rvm use 2.6.0`

**- c.**

  Some `nokogiri` error. I'm guessing this is a peculiar to using your instance of vagrant 🤷‍♂️

  **Fix**

  - run `bundle config build.nokogiri --use-system-libraries`

### The GUI

1. **Scaffold new app:** In the folder `kahoot`, do `npx create-react-app kahoot-gui`

2. **Set up proxy:**

3. **Install other dependencies:**

*google these libraries*

[React Masonry CSS](https://github.com/paulcollett/react-masonry-css)
- [react-router](https://lmgtfy.com/?q=react-router)
- [material-ui](https://lmgtfy.com/?q=material-ui)

4. **Restructure folder structure:**

What we did is create a `components` directory and a `screens` directory to keep things tidy.

Don't overthink this, find a boilerplate you're familiar with .. er.. Scheduler?

Thanks folks!

## References

[KV's notes / lecture](https://web.compass.lighthouselabs.ca/activities/433/lectures/3405) - Thanks KV!

[Travis' notes](https://web.compass.lighthouselabs.ca/activities/433/lectures/3263) - Thanks Travis!

[dbdiagram.io](dbdiagram.io) - visualizing your `schema.rb` file.

[Learn more about Action Cable and websocket](https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296)

[Authentication Rails / React JWT](https://levelup.gitconnected.com/jwt-auth-in-a-react-rails-app-8a7e6ba1ac0)