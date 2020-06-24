require_relative '../answers/02.rb'

describe "Superhero" do
  it "is defined" do
    expect { Superhero }.to_not raise_error
  end

  describe '.new' do
    it "takes in one argument" do
      expect { Superhero.new("The Whizzer") }.to_not raise_error
      expect { Superhero.new }.to raise_error(ArgumentError)
      expect { Superhero.new(1, "The Whizzer") }.to raise_error(ArgumentError)
      expect { Superhero.new("The Whizzer", 2, 3) }.to raise_error(ArgumentError)
    end
  end

  describe "#name=" do
    it "exists as an instance method" do
      expect(Superhero.instance_methods(false)).to include(:name=)
    end

    it "can change the name after the fact" do
      s = Superhero.new("Matter-Eater Lad")
      s.name = "Fruit Boy"
      expect(s.name).to eq("Fruit Boy")
    end

    it "can change the name after the fact (more than once)" do
      s = Superhero.new("Matter-Eater Lad")
      s.name = "Fruit Boy"
      s.name = "Fruit Boyyy"
      expect(s.name).to eq("Fruit Boyyy")
    end

  end
end
