
statues = [3, 6, 2, 8]

function makeArrayConsecutive2(statues) {

  lastNum = Math.max(...statues)
  firstNum = Math.min(...statues)
 
  newArray = []

 for (let i = firstNum; i <= lastNum; i++ ) {
    newArray.push(i)        

}
console.log(newArray)
const result = newArray.length - statues.length
return console.log(result) 
}

makeArrayConsecutive2(statues)