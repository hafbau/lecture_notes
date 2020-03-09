Rails.application.routes.draw do
  scope "/api/v1/" do
    resources :upvotes
    resources :stories do
      resources :contributions
    end
    resources :stories
    resources :users
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

# Nested Resource
# /stories/:story_id/contributions

# Name space
# /stories/contributions