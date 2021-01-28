class ScoresController < ApplicationController
    
    def index 
        @scores = Score.all 
        render json: @scores 
    end 

    def create 
        @score = Score.new(score_params)
        if @score.save 
            render json: @score 
        else 
            render json: {error: "Ooops!"}
        end
    end 



private 
def score_params
    params.require(:score).permit(:user_score,:user_initials)
end 
end

# "user_score" "user_initials"