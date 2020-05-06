require 'test_helper'

class ListingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @listing = listings(:one)
  end

  test "should get index" do
    get listings_url, as: :json
    assert_response :success
  end

  test "should create listing" do
    assert_difference('Listing.count') do
      post listings_url, params: { listing: { available_days,: @listing.available_days,, capacity,: @listing.capacity,, date: @listing.date, description,: @listing.description,, location,: @listing.location,, photos,: @listing.photos,, posted,: @listing.posted,, price: @listing.price, title,: @listing.title,, user_id: @listing.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show listing" do
    get listing_url(@listing), as: :json
    assert_response :success
  end

  test "should update listing" do
    patch listing_url(@listing), params: { listing: { available_days,: @listing.available_days,, capacity,: @listing.capacity,, date: @listing.date, description,: @listing.description,, location,: @listing.location,, photos,: @listing.photos,, posted,: @listing.posted,, price: @listing.price, title,: @listing.title,, user_id: @listing.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy listing" do
    assert_difference('Listing.count', -1) do
      delete listing_url(@listing), as: :json
    end

    assert_response 204
  end
end
