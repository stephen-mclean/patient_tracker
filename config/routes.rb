Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    namespace :v1 do
      resources :patients, only: %i[index create update destroy show] do
        collection do
          get :search
        end
      end
    end
  end

  get '*path', to: 'homepage#index'
end
