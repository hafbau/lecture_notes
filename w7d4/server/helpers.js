const generateRandomId = () => Math.random().toString(36).substr(2, 9);

const remainingPrices = [
  '100 500',
  '50 80',
  '100 200',
  '50 300',
  '289 485',
  '23 345'
]

const moveGotPrice = ({
  x,
  y
}) => {
  const priceIndex = remainingPrices.indexOf(`${x} ${y}`);
  if (priceIndex > -1) {
    // remove price from remainingPrices
    remainingPrices.splice(priceIndex, 1);
    return true;
  }
}

module.exports = {
  generateRandomId,
  moveGotPrice,
  remainingPrices
}