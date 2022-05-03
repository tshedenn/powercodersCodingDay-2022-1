let reverse = (number)=> {
   let reversed = number.toString().split('').reverse().join('');
  return Math.sign(number) * parseInt(reversed);
}
console.log(reverse(1234 ));
console.log(reverse(10000));
console.log(reverse(-321));

// let reverseNum= (number) => {
//   let stringconvert = number.toString();
//   let splitNum = stringconvert.split('');
//   let reveredNum = splitNum.reverse();
//   let joinNum = reveredNum.join();
//   console.log(stringconvert);
//   console.log(splitNum);
//   console.log(reveredNum);
//   console.log(joinNum);
//   return Math.sign(number) * parseInt(joinNum);

  

// }
// reverseNum('100000');