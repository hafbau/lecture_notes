require_relative '../answers/05.rb'

describe "School" do
  it "is defined" do
    expect { School }.to_not raise_error
  end

  describe "#train" do 
    it "exists as an instance method" do
      expect(School.instance_methods).to include(:train)
    end

    it "takes in only one argument" do
      school = School.new
      employee = Employee.new

      expect { school.train(employee) }.to_not raise_error
      expect { school.train() }.to raise_error(ArgumentError)
      expect { school.train(employee, employee) }.to raise_error(ArgumentError)
    end

    it "upskills a given employee (to skill level 2)" do
      school = School.new
      employee = Employee.new

      before = employee.instance_variable_get('@skill_level')
      expect(before).to eq(1)

      school.train(employee)

      after = employee.instance_variable_get('@skill_level')
      expect(after).to eq(2)
    end

    it "calls #upskill on employee" do 
      school = School.new
      employee = Employee.new

      expect(employee).to receive(:upskill).once

      school.train(employee)
    end
  end

end
