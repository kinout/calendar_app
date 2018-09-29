class CalendarController < ApplicationController
    def index
        @data = Schedule.all
        render json: @data
    end

    def create
      @data = Schedule.create({ymd: params[:ymd], comment: params[:comment]})
      render json: @data
    end
    
    def update
      @data = Schedule.find(params[:id])
      @data.update_attributes({ymd: params[:ymd], comment: params[:comment]})
      render json: @data
    end
    
    def destroy
      @data = Schedule.find(params[:id])
      if @data.destroy
        head :no_content, status: :ok
      else
        render json: @data.errors, status: :unprocessable_entity
      end
    end
end
