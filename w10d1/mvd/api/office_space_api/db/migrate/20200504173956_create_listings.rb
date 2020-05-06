class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :photos
      t.string :description
      t.string :location
      t.decimal :price
      t.string :capacity
      t.string :available_days
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
