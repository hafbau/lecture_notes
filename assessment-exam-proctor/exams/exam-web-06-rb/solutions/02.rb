<<-CHALLENGE02

Copy the same Superhero class from the previous question. 

For this challenge, make a Superhero's name updatable after it is created:

  s.name = "Arm-Fall-Off Boy"

CHALLENGE02

class Superhero
  
  def initialize(name)
    @name = name
  end

  def name
    @name
  end

  def name=(new_name)
    @name = new_name
  end

end
