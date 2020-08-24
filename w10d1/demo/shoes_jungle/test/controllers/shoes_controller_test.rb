require 'test_helper'

class ShoesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shoe = shoes(:one)
  end

  test "should get index" do
    get shoes_url, as: :json
    assert_response :success
  end

  test "should create shoe" do
    assert_difference('Shoe.count') do
      post shoes_url, params: { shoe: { age: @shoe.age, condition: @shoe.condition, description: @shoe.description, location: @shoe.location, photos: @shoe.photos, price: @shoe.price, size: @shoe.size, spy_level: @shoe.spy_level, title: @shoe.title, user_id: @shoe.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show shoe" do
    get shoe_url(@shoe), as: :json
    assert_response :success
  end

  test "should update shoe" do
    patch shoe_url(@shoe), params: { shoe: { age: @shoe.age, condition: @shoe.condition, description: @shoe.description, location: @shoe.location, photos: @shoe.photos, price: @shoe.price, size: @shoe.size, spy_level: @shoe.spy_level, title: @shoe.title, user_id: @shoe.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy shoe" do
    assert_difference('Shoe.count', -1) do
      delete shoe_url(@shoe), as: :json
    end

    assert_response 204
  end
end
