class SessionsController < ApplicationController
    
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(:username, :password)
        if @user
            @user.reset_session_token!
            session[:session_token] = @user.session_token
            redirect_to cats_url
        else
            redirect_to new_user_url
        end
    end

    def destroy

    end

end