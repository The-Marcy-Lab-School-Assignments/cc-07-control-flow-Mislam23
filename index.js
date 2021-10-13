//1
function sumOfFourAndSix(){
let sum = 0;
  for (let i = 0; i <= 1000; i++) {
      if (i % 4 === 0 && i % 6 ===0) {
          sum +=i;
      }
  }
  return sum
}

//2
function oddAndEvenInFifteen(){
  for (let i = 0; i <= 15; i++) {
      if (i % 2 === 0) {
          console.log(i + " is even")
      } else {
          console.log(i + " is odd")
      }
  }
}

// //2 another attempt
// function oddAndEvenInFifteen(num){
//   if (num >= 0 && num <= 15) {
//       if (num % 2 === 0) {
//           console.log(num + " is even")
//       } else {
//           console.log(num + " is odd")
//       }
//   }
// }


//3
function assignGrade(int){
    if (int >= 0 && int <= 100) {
        if (int > 90 && int < 101) {
            return 'A';
        } else if (int > 80 && int < 91) {
            return 'B';
         }else if (int > 70 && int < 81) {
            return 'C';
        } else if (int >= 65 && int < 71) {
            return 'D';
        } else {
            return 'F';
        }
    }
}


//calling functions: 
//console.log(sumOfFourAndSix());
//oddAndEvenInFifteen();
//oddAndEvenInFifteen(10); //2 another attempt
console.log(assignGrade(64));

