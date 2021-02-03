class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :user_score
      t.string :user_initials
      t.integer :user_id
      t.timestamps
    end
  end
end
