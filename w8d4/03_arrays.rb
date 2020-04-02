# Arrays

numbers = [1,2,3,4,5,6]

## Math operators on arrays

[1,2,3] + [4,5,6]

['hello','world'] * 3

[1,2,3,4,5] - [4,5,6]

## Some Useful Methods

[1,2,3].first
[1,2,3].last
[1,2,3][-1]

[1,2,3,4,5].sample
[1,2,3,4,5].shuffle
[1,2,3,4,5].rotate
[1,2,3,4,5].length
[1,2,3,4,5].index(2)

# Iterators


# Arrays are collections.
# We can use iterators

# .each

names = ['John', 'Zach', 'Shawn', 'Tiffany']

names.each_with_index do |name, index|
  puts "#{index}- #{name}"
end

## Map (collect)

numbers = [1,2,3,4,5,6]

mult_numbers = numbers.map.with_index do |n, index|
  n * index
end

## select (filter)

numbers = [1,2,3,4,5,6]

numbers.select {|n| n % 2 == 0}
# numbers.filter(n => n % 2 === 0)

## reject

numbers = [1,2,3,4,5,6]

numbers.reject {|n| n % 2 == 0}

## map/collect

numbers = [1,2,3,4,5,6]

numbers.map {|n| n % 2}


## find/detect

numbers = [1,2,3,4,5,6]

numbers.find {|n| n % 2 == 0}

## reduce/inject

numbers = [1,2,3,4,5,6]

numbers.reduce(0) {|sum, num| sum + num}

## count

numbers = [1,2,3,4,5,6]

numbers.count {|n| n % 2 == 0}
numbers.count do |n|
  n % 2 == 0
  n % 2 == 0
  n % 2 == 0
end