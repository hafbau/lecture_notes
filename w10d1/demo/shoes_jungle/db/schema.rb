# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_24_171656) do

  create_table "reviews", force: :cascade do |t|
    t.integer "smell_rating"
    t.text "content"
    t.integer "comfort_level"
    t.integer "user_id", null: false
    t.integer "shoe_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shoe_id"], name: "index_reviews_on_shoe_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "shoes", force: :cascade do |t|
    t.decimal "size"
    t.decimal "price"
    t.decimal "age"
    t.string "condition"
    t.string "location"
    t.text "description"
    t.string "title"
    t.string "photos"
    t.integer "user_id", null: false
    t.decimal "spy_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_shoes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.string "avatar"
    t.string "last_name"
    t.string "first_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "reviews", "shoes"
  add_foreign_key "reviews", "users"
  add_foreign_key "shoes", "users"
end
