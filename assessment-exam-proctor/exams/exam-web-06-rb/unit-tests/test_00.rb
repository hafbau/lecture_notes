require_relative '../answers/00.rb'

describe "Calculator" do
  it "is defined" do
    expect { Calculator }.to_not raise_error
  end

  describe '#sum' do
    it "exists as an instance method" do
      expect(Calculator.instance_methods).to include(:sum)
    end

    it "takes in two arguments" do
      calc = Calculator.new

      expect { calc.sum(1, 2) }.to_not raise_error
      expect { calc.sum(1) }.to raise_error(ArgumentError)
      expect { calc.sum(1, 2, 3) }.to raise_error(ArgumentError)
    end

    it "adds 6 + 2 to return 8" do
      calc = Calculator.new

      expect(calc.sum(6, 2)).to eq(8)
    end

    it "adds -1 + -4 to return -5" do
      calc = Calculator.new

      expect(calc.sum(-1, -4)).to eq(-5)
    end
  end
end
