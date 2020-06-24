require_relative '../answers/04.rb'

describe "Doctor" do
  it "is defined" do
    expect { Doctor }.to_not raise_error
  end

  it "inherits from Person class" do
    expect(Doctor.superclass).to eq(Person)
  end

  describe "#full_name" do 
    it "prepends Dr. in front" do 
      dr = Doctor.new("Kerpal", "Swami")

      expect(dr.full_name).to eq("Dr. Kerpal Swami")
    end

    it "prepends Dr. in front of Person#full_name" do 
      dr = Doctor.new("Xi", "Ying")
      person = Person.new("Xi", "Ying")

      expect(dr.full_name).to eq("Dr. " + person.full_name)
    end

    it "leverages the existing User#full_name instead of reimplementing the full logic" do 
      dr = Doctor.new("Jane", "O'Dear")

      Person.send(:define_method, :full_name, Proc.new { "A B" })

      expect(dr.full_name).to eq("Dr. A B")
    end
  end

end
