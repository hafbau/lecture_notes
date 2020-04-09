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