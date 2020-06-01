Rails.application.routes.draw do
  scope '/api/v1' do
    # resources :reviews
    resources :listings do 
      resources :reviews
    end
    resources :users
  end
  # scope '/api/v2' do
  #   resources :reviews
  #   resources :listings_exp
  #   resources :users
  # end
  # get '/status' => 'static#status'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
