# Hash

# - Hash is the equivalent of objects in JavaScript
# - Use symbols as the keys
# - Cannot use dot notation like in JavaScript

### iterating with hashes
# :symbol

famous_painter = {
	first_name: "Pablo",
	last_name: "Picasso",
	date_of_birth: 1881,
	date_of_death: 1973
}
famous_painter.each do |key, value|
	puts "#{key}: #{value}"
end

# inst = new WatClass()

p famous_painter[:first_name]

# different from famous_painter[:first_name] above
p famous_painter['first_name']
famous_painter['first_name'] = "kalkhdskfjhdj"

p famous_painter
### iterating over an array of hashes


# famous_painters = [
# 	{
# 		first_name: "Pablo",
# 		last_name: "Picasso",
# 		date_of_birth: 1881,
# 		date_of_death: 1973,
# 	},
# 	{
# 		first_name: "Pierre Auguste",
# 		last_name: "Renoir",
# 		date_of_birth: 1841,
# 		date_of_death: 1919,
# 	}
# ]
# famous_painters.each do  |painter|
# 	painter.each do |key, value|
# 	    puts "#{key}: #{value}"
# 	end
# 	puts
# end
