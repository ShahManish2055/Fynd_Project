function calculateCompoundInterest(principal, interestRate, time, compoundsPerYear) {
    const n = compoundsPerYear;
    const r = interestRate / n;
    const nt = n * time;
    const amount = principal * (1 + r) ** nt;
    const compoundInterest = amount - principal;
    return compoundInterest;
  }
  
  module.exports = calculateCompoundInterest;
  