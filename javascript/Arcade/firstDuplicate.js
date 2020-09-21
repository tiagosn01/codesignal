a = [2, 4, 3, 5, 1]

function firstDuplicate(a) {
 let duplicated = 1000;
  let lastduplicated = 1000;
  let result =0
  let repeated = 0;

  for(i = 0; i < a.length; i++) {    
    for(n=i+1; n <= a.length; n++) {      
      if(a[i] === a[n]) {
        duplicated = n - i + n;
        if(duplicated < lastduplicated ) {
          lastduplicated = n - i + n;
          
          result = a[i]         
        }
      }
    }
    
  }
  if (result === 0) {
    return -1
  }

  return result
}
 firstDuplicate(a)