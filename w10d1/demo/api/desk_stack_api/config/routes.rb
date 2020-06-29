Rails.application.routes.draw do
  scope '/api/v1' do
    resources :listings do
      resources :reviews
    end

    # These routes are going to break since we do not have controllers with Admin::User
    namespace 'admin' do
      resources :users
    end
  end

  scope '/api/v2' do
    resources :reviews
    resources :listings
  end

  # get '/status': page#status
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
