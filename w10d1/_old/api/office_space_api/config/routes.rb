Rails.application.routes.draw do
  scope '/api/v1' do
    resources :reviews
    resources :listings
    # resources 'admin' do
      resources :users
    # end
  end
  # scope '/api/v2' do
  #   resources :reviews
  #   resources :listings
  #   # resources 'admin' do
  #     resources :users
  #   # end
  # end

  # get '/status': page#status
  # get '/doc': page#doc
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
