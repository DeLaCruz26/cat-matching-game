class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :user_score
      t.integer :user_initials
      t.timestamps
    end
  end
end
