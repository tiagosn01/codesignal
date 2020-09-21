const sequence = [3, 2, 1, 5, 20, 4, 8, 10, 20, 15]

function almostIncreasingSequence(sequence) {

  let size = sequence.length
  let count = 0;
  
  for (i=0; i < size; ++i) {
      if (sequence[i] >= sequence[i + 1]) {
          if (i != 0 && sequence[i - 1] >= sequence[i + 1]) {
              sequence.splice(i + 1, 1);
              --i;
              console.log(i)
          }
          count++;
      }
  }
  
  return console.log(count < 2);

}

almostIncreasingSequence(sequence)
