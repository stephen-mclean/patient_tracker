Rails.application.routes.draw do
  root 'homepage#index'
  

  namespace :api do
    namespace :v1 do
      resources :patients, only: [:index]
    end
  end

  get '*path', to: 'homepage#index'

end




