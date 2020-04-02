class CreateContributions < ActiveRecord::Migration[6.0]
  def change
    create_table :contributions do |t|
      t.text :content
      t.datetime :accepted_at
      t.references :user, null: false, foreign_key: true
      t.references :story, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
