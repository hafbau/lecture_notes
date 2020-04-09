Feature tests using RSpec / Capybara / Poltergeist / Phantomjs
===

We started the lecture with a review of all things testing, and ended it by looking at feature testing with Rails. For our feature tests we used rspec + capybara + phantomJS

The notes below are courtesy of Karl!

Slides (Thank you Karl Jensen!) and notes are available at https://github.com/jensen/rspec-notes/. The old lecture from monday has slides and notes as well https://github.com/jensen/testing-notes.

[Video here](https://zoom.us/rec/play/v5F7de-hqD03TNbGtASDA6RxW9S8J_-s1yUd-aAJmh7gVHAHZlKnYOMUNObxD-NQsMTd-X05E8C1K5n5?continueMode=true&_x_zm_rtaid=qyRGVD2FQNuSZjrRTJgSPg.1586288616564.7504d4b6b8b5b92088b06dd3a58a8a71&_x_zm_rhtaid=261)

Also, do not forget [the cheat sheet!!](https://devhints.io/capybara)

## Agenda Today:

- [x] Review Testing concepts (slides)
- [x] Feature Testing - more concepts (slides)
- [x] Rspec Set up walkthrough
- [x] Jungle Registration
- [] Classwork?
  + Groups of three
  + One typist
  + One feature test
    - Login
    - Product Details
    - Add to cart
  

## RSpec Set up walkthrough

In addition to Compass walkthrough, we did these steps:

- Added test configuration in our `config/secrets.yml` file. So that file now looks like:

```rb
# in ./config.secrets.yml
development:
  secret_token: "my_secret_token"
  secret_key_base: "abcdef0123456789"
test:
  secret_token: "my_secret_token"
  secret_key_base: "abcdef0123456789"
```

- Included **Simplecov** for insights into test coverage

  1. Add this to `Gemfile` under group test. Test group in our `Gemfile` looks like:

  ```rb
  group :test do
    gem 'capybara'
    gem 'poltergeist'
    gem 'database_cleaner'
    gem 'simplecov', '0.13.0'# Added line, this version works for my ruby version 2.3.0
  end
  ```

  2. Run `bundle install` to install the new dependencies.

  3. Add the below to the top of `rails_helper` as per documention from _simplecov_. Ensure this block of code is before any other `require`s in this file.

  ```rb
  if ENV['RAILS_ENV'] == 'test'
    require 'simplecov'
    SimpleCov.start 'rails'
    puts "required simplecov"
  end
  ```

## About waiting...

- Even though Capybara is decent in _waiting_ for asynchronous logics like page load etc; we found that sometimes you still needed to manually enforce waiting.

  + What we did in class was `sleep(1)` and that worked for our use case.
  + You could also set an increased wait time for Capybara in your `rails_helper.rb` file:
    `Capybara.default_max_wait_time = 10`
  + Custom wait times could also be specified in a `using_wait_time` block like so:

    ```rb
    using_wait_time 20 do
      # async logic that needed to waited for
    end
    ```

## Jungle Registration

Our `registers_spec.rb` [code is on github here;](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w10d2) and also below:

```rb
require 'rails_helper'

# Helper function to DRY our tests
def fill_and_submit_registration_form(user_data)
  within 'form' do
    fill_in id: 'user_first_name', with: user_data[:first_name]
    fill_in id: 'user_last_name', with: user_data[:last_name]
    fill_in id: 'user_email', with: user_data[:email]
    fill_in id: 'user_password', with: user_data[:password]
    fill_in id: 'user_password_confirmation', with: user_data[:password_confirmation]

    click_on 'Register'
  end
end

user_deets = {
  first_name: 'Jamz',
  last_name: 'Buble',
  email: 'jamz@buble.io',
  password: 'password',
  password_confirmation: 'password'
}

RSpec.feature "Registers", type: :feature, js: true do
  scenario "should register a new user with all details" do
  # Action
    visit root_path
    click_on 'register'
    fill_and_submit_registration_form user_deets

  # Verify
    expect(page).to have_text("logged in as #{user_deets[:first_name]}")

  # Debug
    save_screenshot
  end

  scenario "should fail with inadequate details" do
    visit root_path
    click_on 'register'
    missing_deets = user_deets
    missing_deets[:email] = ''
    fill_and_submit_registration_form missing_deets
    
    expect(page).to have_text('The following errors prevented saving')

    save_screenshot
  end
end
```


## Classwork
We did not get to this :(, I'm trusting Compass will give you more practice.

Thank you, till next time.