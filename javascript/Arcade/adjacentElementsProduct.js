
inputArray = [3, 6, -2, -5, 7, 3]

function adjacentElementsProduct(inputArray) {
  var prod = inputArray[0] * inputArray[1];
  console.log(prod)
    
  for (var i = 1; i<inputArray.length - 1;i++) {
      prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
  }

  return console.log(prod)
}

adjacentElementsProduct(inputArray)

