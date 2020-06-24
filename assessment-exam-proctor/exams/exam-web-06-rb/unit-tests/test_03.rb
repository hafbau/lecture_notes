require_relative '../answers/03.rb'

describe "PokerHand" do

  describe "to_s" do 
    it "returns the cards in hand (- 6♠ - 3♦ - A♣ - J♦ - J♥ -)" do
      hand = PokerHand.new

      expect(hand.to_s).to eq("- 6♠ - 3♦ - A♣ - J♦ - J♥ -")
    end

    it "calls upon #cards for the data, instead of hardcoding the actual cards again" do
      hand = PokerHand.new
      new_cards = %w(1♠ 2♣ K♣ 5♦ K♥)
      expect(hand).to receive(:cards).once.and_return(new_cards)
      hand.to_s
    end

    it "works if the set of cards were to change (1♠ 2♣ K♣ 5♦ K♥)" do
      hand = PokerHand.new
      new_cards = %w(1♠ 2♣ K♣ 5♦ K♥)
      allow(hand).to receive(:cards).and_return(new_cards)
      expect(hand.to_s).to eq("- 1♠ - 2♣ - K♣ - 5♦ - K♥ -")
    end
  end

  describe "#cards" do
    it "exists only as a private method (NoMethodError expected when calling it)" do 
      hand = PokerHand.new

      expect { hand.cards }.to raise_error(NoMethodError)
    end

    it "exists only as a private method" do 
      hand = PokerHand.new

      expect(hand.private_methods).to include(:cards)
    end
  end

  # describe '.new' do
  #   it "takes in one argument" do
  #     expect { Superhero.new("The Whizzer") }.to_not raise_error
  #     expect { Superhero.new }.to raise_error(ArgumentError)
  #     expect { Superhero.new(1, "The Whizzer") }.to raise_error(ArgumentError)
  #     expect { Superhero.new("The Whizzer", 2, 3) }.to raise_error(ArgumentError)
  #   end
  # end

  # describe "#name=" do
  #   it "exists as an instance method" do 
  #     expect(Superhero.instance_methods).to include(:name=)
  #   end
    
  #   it "can change the name after the fact" do
  #     s = Superhero.new("Matter-Eater Lad")
  #     s.name = "Fruit Boy"
  #     expect(s.name).to eq("Fruit Boy")
  #   end

  #   it "can change the name after the fact (more than once)" do
  #     s = Superhero.new("Matter-Eater Lad")
  #     s.name = "Fruit Boy"
  #     s.name = "Fruit Boyyy"
  #     expect(s.name).to eq("Fruit Boyyy")
  #   end

  # end
end
