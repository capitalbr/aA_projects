class BandsController < ApplicationController

    def new
        # render :new (if I want to but don't have to rails knows to do this)
    end

    def index
        @bands = Band.all
    end
    
    def show
        @band = Band.find_by(name: params[:id])
        render :show
    end

    def create
        @band = Band.new(band_params) #models take in a hash

        if @band.save
            flash[:success] = "band was saved!"
            redirect_to bands_url
        else
            flash[:error] = "that band name did not work perhaps it was empty"
            render :new
        end
    end

    private
    def band_params
        params.require(:band).permit(:name)
    end
end
