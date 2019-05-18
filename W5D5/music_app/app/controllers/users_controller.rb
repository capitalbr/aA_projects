class UsersController < ApplicationController

  

    def new
        @user = User.new
    end

    def create
        
        @user = User.new(user_params)#[:email_address], user_params[:password])
        
        if @user.save
        
            login(@user)
            # some redirect
            render :show
        else
            # flash.now[:errors] = user.errors.full_messages
            # render :new
            render :show
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end


    private
    def user_params
        params.require(:user).permit(:email_address, :password)
    end
end
