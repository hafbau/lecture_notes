<<-CHALLENGE03

Here's an existing class representing a poker hand.

It has a method `cards` which returns an array of the cards in hand.

It's always the same hand, we know. That's not practical, but hey this is a test, not a real game.

Your mission:
Create another method in this class called `to_s` which will return a string of the cards.

The string should look like this:
  "- 6♠ - 3♦ - A♣ - J♦ - J♥ -"
  (the double quotes should not be included; they're included here to that it's a string)

While you're at it, make the cards method private.

CHALLENGE03

class PokerHand

  # Returns an array of 5 cards in player's hand:
  # =>  Eg: ['6♠', '3♦', 'A♣', 'J♦', 'J♥']
  def cards
    %w(6♠ 3♦ A♣ J♦ J♥)
  end

end
