class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :photos
      t.string :description
      t.string :address
      t.decimal :price
      t.boolean :pets_allowed
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
