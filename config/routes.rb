Dashboard::Application.routes.draw do
  namespace :api do
    resource :users
  end
  root :to => 'home#index'
  match "/*path" => "home#index"
end
