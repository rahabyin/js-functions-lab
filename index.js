// ============================================
// Budget Management Functions
// ============================================

// Function 1: Calculate 10% Tax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: Convert Text to Uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: Find Maximum of Two Numbers
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } 
    else {
        return num2;
    }
    
    // Alternative one-liner using Math.max():
    // return Math.max(num1, num2);
}

// Function 4: Check if Word is Palindrome
function isPalindrome(word) {
    // Convert to lowercase to handle case-insensitive comparison
    const lowerWord = word.toLowerCase();
    
    // Reverse the string
    const reversedWord = lowerWord.split('').reverse().join('');
    
    // Compare original with reversed
    return lowerWord === reversedWord;
}

// Function 5: Calculate Discounted Price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    const finalPrice = originalPrice - discountAmount;
    return finalPrice;
}


// Test calculateTax
console.log(calculateTax(100));        // 10
console.log(calculateTax(50));         // 5


// Test convertToUpperCase
console.log(convertToUpperCase("hello"));  // "HELLO"
console.log(convertToUpperCase("budget")); // "BUDGET"

// Test findMaximum
console.log(findMaximum(10, 20));      // 20
console.log(findMaximum(5, 3));        // 5

// Test isPalindrome
console.log(isPalindrome("radar"));    // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("Racecar"));  // true (case-insensitive)

// Test calculateDiscountedPrice
console.log(calculateDiscountedPrice(100, 20));  // 80
console.log(calculateDiscountedPrice(50, 10));   // 4



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };