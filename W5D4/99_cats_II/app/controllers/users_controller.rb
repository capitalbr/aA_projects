class UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            # flash[:success] = ""
            render json: @user
        else
            render json: @user.errors.full_messages
        end
    end


    def user_params
        params.require(:user).permit(:username, :password)
    end
end