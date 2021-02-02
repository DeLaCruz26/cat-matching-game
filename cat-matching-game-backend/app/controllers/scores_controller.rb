class ScoresController < ApplicationController
    
    def index 
        scores = Score.all 
        render json: scores 
    end 

   

    def create 
        user = User.find_or_create_by(user_params)
       score = user.scores.build(scores_params)
       if user.valid? && score.save
      render json: score
        else 
            render json: {error: "Ooops! It didn't work, try again!"}
        end
    end 



private 
def scores_params
    params.require(:score).permit(:user_score,:user_initials)
end 
def user_params
    params.require(:user).permit(:username)
end 

end

# "user_score" "user_initials"