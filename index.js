// Helper functions
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function isPerfect(num) {
  if (num <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          sum += i;
          if (i !== num / i) sum += num / i;
      }
  }
  return sum === num;
}

function isArmstrong(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), power), 0);
  return sum === num;
}

function getDigitSum(num) {
  return num.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
}


module.exports = {isPrime, isPerfect, isArmstrong, getDigitSum };
