Rails.application.routes.draw do
  resources :comments, only: %i(index)

  root 'static_pages#top'
end
