class User < ApplicationRecord
  has_many :shoes
  has_many :reviews
end
