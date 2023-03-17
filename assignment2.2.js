// Define a function called "findPrime" that takes one parameter: "num"
function findPrime(num) {
    // Loop through all the numbers from 1 to the input number
    for (var i = 1; i <= num; i++) {
      var isPrime = true;
      // Check if each number is prime
      for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      // If the number is prime, print it out
      if (isPrime && i > 1) {
        console.log(i);
      }
    }
  }
  
  // Test the function by calling it with a sample input
  findPrime(97); // Output: 2, 3, 5, 7, 11, 13, 17, 19
  