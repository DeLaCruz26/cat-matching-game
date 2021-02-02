Rails.application.routes.draw do
resources :users, only: [:index, :show, :create, :destroy]
resources :scores, only: [:index, :show, :create, :destroy]
end
