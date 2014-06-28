Rails.application.routes.draw do
  get '*path', to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :leads
    end
  end
end
