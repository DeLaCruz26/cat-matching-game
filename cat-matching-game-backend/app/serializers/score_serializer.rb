class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user_score, :user_initials
   belongs_to :user
end
