Rails.application.routes.draw do

  scope '/api/v1' do
    resources :shoes
    resources :reviews
    resources :users
  end

  # get '/status': pages#status

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
