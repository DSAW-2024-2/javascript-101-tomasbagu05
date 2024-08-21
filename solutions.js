// Sum of Two Numbers
function sum(a, b) {
  if(typeof a === 'number' && typeof b === 'number') {
    return a +b;
  }
  else{
    console.log("Los datos de entrada no son adecuados");
  }
}

// Factorial of a Number
function factorial(n) {
  if (typeof n === 'number') {
    if (n === 0 || n === 1) {
      return 1;
    } else {   
      return n*factorial(n-1);
    } 
  }
  else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Find the Largest Number
function findLargest(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    if (arr.every(numero => typeof numero === 'number')) {
      let Max_numero = Math.max(...arr);
      return Max_numero;
    } 
  } else {
    console.log("Los datos de entrada no son adecuados");
    return null;
  }
}


// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    console.log("Los datos de la entrada no son adecuadas");
    return null;
  }
  const vowels = 'aeiou';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  } return count;
}

     

// Check if a Number is Prime
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
