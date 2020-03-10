We started the lecture with a review of all things testing, and ended it by looking at feature testing with Rails. For our feature tests we used rspec + capybara + phantomJS

The notes below are courtesy of Karl!

Slides and notes are available at https://github.com/jensen/rspec-notes/. The old lecture from monday has slides and notes as well https://github.com/jensen/testing-notes.

### Some things to note

- ensure your `secrets.yml` has configuration for the `test` environment as well as the `development`. For example:

```yml
development:
  secret_token: "my_secret_token"
  secret_key_base: "abcdef0123456789"
test:
  secret_token: "my_secret_token"
  secret_key_base: "abcdef0123456789"
```

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

Also, do not forget [the cheat sheet!!](https://devhints.io/capybara)


Our `registers_spec.rb` [code is on github here;]() and also below:

```rb
require 'rails_helper'

RSpec.feature "Registers", type: :feature do
  scenario "should register a new user with all details" do
    visit root_path

    click_on 'register'
    sleep(1)

    within 'form' do
      fill_in id: 'user_first_name', with: 'Thiago'
      fill_in id: 'user_last_name', with: 'Thiago'
      fill_in id: 'user_email', with: 'Thiago@fake.fake'
      fill_in id: 'user_password', with: 'Thiago'
      fill_in id: 'user_password_confirmation', with: 'Thiago'

      click_on 'Register'
    end

    sleep(1)
    
    save_page
    expect(page).to have_text('logged in as Thiago')

  end

  scenario "should fail with inadequate details" do
    visit root_path

    click_on 'register'
    sleep(1)

    within 'form' do
      fill_in id: 'user_first_name', with: '<script>alert("HAcker!!")'
      fill_in id: 'user_last_name', with: '; DROP table products; --'
      fill_in id: 'user_email', with: ''
      fill_in id: 'user_password', with: 'Thiago'
      fill_in id: 'user_password_confirmation', with: 'Thiago'

      click_on 'Register'
    end

    sleep(1)
    
    save_page
    expect(page).to have_text('The following errors prevented saving')

  end
end

```