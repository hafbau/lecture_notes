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
