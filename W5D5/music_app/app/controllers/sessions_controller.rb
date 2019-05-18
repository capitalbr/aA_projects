class SessionsController < ApplicationController

    def new
      
        #renders :new template by default
    end

    def create
        @user = User.find_by_credentials(params[:user][:email_address], params[:user][:password])
        if @user
            login(@user)
            redirect_to user_url(@user.id)
        else
            flash[:errors] = "Sorry but email/password combo invalid"
            render :new
        end
            
    end

    def destroy
        logout
        redirect_to new_session_url
    end
end
