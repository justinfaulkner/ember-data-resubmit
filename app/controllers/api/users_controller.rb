class Api::UsersController < ApplicationController
  def create
    user_params = params["user"]
    username = user_params["username"]

    if username.include? 'example.com'
      render :json => "{\"errors\": {\"username\": \"This email is already taken\"}}", :status => 422 and return
    end
    plaintext = user_params["password"]
    user_json = "{\"id\": 1, \"username\": \"#{username}\"}"
    render :json => "{\"user\": #{user_json}}"
  end
end