class CalendarController < ApplicationController
    def index
        @data = Schedule.all
        render json: @data
    end

    def create
      @data = Schedule.create({title: params[:title], start: params[:start], end: params[:end]})
      render json: @data
    end
    
    def update
      @data = Schedule.find(params[:id])
      @data.update_attributes({title: params[:title], start: params[:start], end: params[:end]})
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
