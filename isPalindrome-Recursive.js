// Write a function isPalindrome that accepts a string and returns true if it's a Palindrome, 
// false if it is not a Palindrome.

function isPalindrome(str){
  if (str.length === 0) return;
  if (str.charAt(0) != str.charAt(str.length - 1)) return false;  
  isPalindrome(str.slice(1, -1));
  return true;
}

isPalindrome('awesome') // false
isPalindrome('tacocat') // true
