Rails.application.routes.draw do
  resources :comments, only: %i(index create)

  root 'static_pages#top'
end
