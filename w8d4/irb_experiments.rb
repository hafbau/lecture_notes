# IRB command history
puts 'adlai'
print 'adlai'
p 'adlai'
a = [2, 3,5]
a.first
a.first()
a.second
a[-3]
"string" * 3
3 * "string"
"string" - "ng"
"#{3 * 9}"
'#{3 * 9}'
"#{3 * '9'}"
'3' * '4'
a = 9999999_999_9999_888
a = a / 100000
a.to_r
'Comparison'
1 == 1
!!1
!!0
1 <=> 1
0 <=> 1
'adlai' <=> 'noah'
'adlai' <=> 'ahmed'
'adlai' <=> 'adlai daughter'
1 === 1
Integer === 1
[1] === 1
(1..9) === 3
[1, 2, 3] === [1]
[[1], 2, 3] === [1]
'mohammed is sleeping' === 'eep'
'sleeping' === 'eep'
a = nil
!!nil
!!a
a.nil?
a.zero?
a.class
a.kind_of?(Integer)
A_constant = 10
A_constant = 20 # warning
A_constant
THIS_IS_A_CONSTANT_CHANGE_NOT = 2000
names = ['Alice', 'Bob', 'Carol', 'David']
names.each { || puts "Goodbye #{3}!" }
a = "noah"
a.nil?
a.nil
def say_hello name # starts with a definition
  puts "hello #{name}, nice to meet you"
end
say_hello
say_hello 'Bob'
say_hello 'Bob', 'John'
puts 'Lucy', 'looking at me'
def say_hello name # starts with a definition
  puts "hello #{name}, nice to meet you"
end
clear
def say_hello_var *name # starts with a definition
  p name
  puts "hello #{name}, nice to meet you"
end
say_hello_var 'two', 'things'
say_hello_var 'two' 'things'
say_hello 'two' 'things'
say_hello_var
user = {
  username: "bobh",
  password: "password",
  logged_in: true
}
puts user[:username]
puts user['username']]
puts user['username']
user
user['username']
user['username'] = 'diff'
user

def change_it(val)
  val = 5
  puts :some_sym.object_id;
end
puts :some_sym.object_id
change_it(44)

user.username # Errors

say_something = -> { puts "I'm giving up on you" }
def my_method(&block)
  block.call # .call to invoke the block
end
my_method
my_method &say_something

def my_method_two
  yield
end

my_method_two
my_method_two &say_something

puts.call 'some' # Errors