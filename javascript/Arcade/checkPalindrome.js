function checkPalindrome(inputString) {
  let result = inputString.split('').reverse().join('');
  
  return (result === inputString)
}
