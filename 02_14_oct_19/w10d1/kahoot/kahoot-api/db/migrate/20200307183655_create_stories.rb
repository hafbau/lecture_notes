class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :status
      t.references :user, null: false, foreign_key: true
      t.string :media_url
      t.text :content

      t.timestamps
    end
  end
end
