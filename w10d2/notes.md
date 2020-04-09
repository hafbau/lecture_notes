
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

- Added test secrets in our `config/secrets.yml` file. So that file now looks like:

```rb
# config.secrets.yml
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

## Jungle Registration

Here's a the registration spec we wrote:

```rb
require 'rails_helper'

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