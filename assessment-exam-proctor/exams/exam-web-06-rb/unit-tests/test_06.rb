require_relative '../answers/06.rb'

describe "ArrayFormatter" do
  
  describe "#wrap_array_items" do 
    
    it "returns an array" do
      items = [35, 16, 1]
      formatter = ArrayFormatter.new

      result = formatter.wrap_array_items(items, ":", ":")
      expect(result).to be_a(Array)
    end

    it "returns an array of the same size" do
      items = [35, 16, 1]
      formatter = ArrayFormatter.new

      result = formatter.wrap_array_items(items, ":", ":")
      expect(result.size).to eq(3)
    end

    it "returns an array of size 2 wrapped within parenthsis properly" do
      items = [5, 6]
      formatter = ArrayFormatter.new

      result = formatter.wrap_array_items(items, "(", ")")

      expect(result).to match_array(["(5)", "(6)"])
    end

    it "uses #map on the given array" do
      items = [5, 6]
      formatter = ArrayFormatter.new

      expect(items).to receive(:map).once

      result = formatter.wrap_array_items(items, "(", ")")
    end
  end

end
