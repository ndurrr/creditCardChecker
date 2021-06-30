const validateCred = array => {
    let checkNums = array.slice(0, array.length - 1)
    let lastNum = array.pop()

    for (let i = checkNums.length - 1; i >= 0; i-= 2) {
        checkNums[i] *= 2;
    }
    for (let i = checkNums.length - 1; i >= 0; i--) {
        if (checkNums[i] > 9) {
            checkNums[i] -+ 9;
        }
    }
    const reducer = (a, b) => a + b;
    let sumTotal = checkNums.reduce(reducer, 0);

    let num = sumTotal + lastNum;
    if (num % 10 === 0) {
        return true;
    } else {
        return false;
    }
}; 

let invalidCards = [];
const findInvalidCards = batch => {
    for (let j = 0; j < batch.length; j++)
      if (validateCred(batch[j]) === false) {
        invalidCards.push(batch[j]);
      }
    return invalidCards;
  };
  // Test - Should print array of Invalid Cards
  console.log(findInvalidCards(batch));
  
  //function that ids the company associate with invalid cards in invalidCard array
  function idInvalidCardCompanies(invalidCards) {
    const companies = [];
    for (let i = 0; i < invalidCards.length; i++) {
      switch (invalidCards[i][0]) {
        case 3:
          if (companies.indexOf("Amex") === -1) {
            companies.push("Amex");
          }
          break;
        case 4:
          if (companies.indexOf("Visa") === -1) {
            companies.push("Visa");
          }
          break;
        case 5:
          if (companies.indexOf("Mastercard") === -1) {
            companies.push("Mastercard");
          }
          break;
        case 6:
          if (companies.indexOf("Discover") === -1) {
            companies.push("Discover");
          }
          break;
        default:
          console.log("Company not found");
      }
    }
    return companies;
  }
  // Should print companies that have invalid cards

console.log(idInvalidCardCompanies(invalidCards));
console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards
