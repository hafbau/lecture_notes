class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.decimal :size
      t.decimal :price
      t.decimal :age
      t.string :condition
      t.string :location
      t.text :description
      t.string :title
      t.string :photos
      t.references :user, null: false, foreign_key: true
      t.decimal :spy_level

      t.timestamps
    end
  end
end
