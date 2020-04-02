# A. Methods
# - returns the last expression implicitly
def method_name (var1, var2)
  return var1 if var2.zero?
  var1 + var2
end

p method_name 45, 0
# brackets below for order of operations to avoid interpreter confusion!
p method_name 45, method_name(68, 98)

def method_name (var1)
  # return 20 if var2.zero?
  var1
end

p method_name 45
p method_name method_name 68


# B. Blocks
# - kinda like arrow functions, they are anonymous
# - can be used as callbacks by passing them into a function

# B.1 Two flavo(u)rs
# 1. Single line blocks look like: {|n| n % 2 == 0}
numbers.count {|n| n % 2 == 0}

# 2. Multi-line blocks look like:
# do |n|
#   n % 2 == 0
#   n % 2 == 0
#   n % 2 == 0
# end
numbers.count do |n|
  n % 2 == 0
  n % 2 == 0
  n % 2 == 0
end

# B.2 A method that takes block explicitly
# - '&' before the parameter name is how we say it's expecting a block
# - '.call(with_or_without_arguments)' is how we call the block being passed in
def our_count(&block)
  block.call(300)
end

# B.3 All methods can take block implicitly
# 'yield' with or without arguments is how you take advantage of a block being passed in.
def our_count2
  yield 400
end

our_count { |num| puts num }
our_count2 { |num| puts num }