/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40; 
  const amount = days * price;

  if(days < 3){
    return amount;
  }

  if(days > 2 && days < 7){
    return amount - 20;
  }

  return amount - 50;
}

module.exports = calculateRentalCost;
