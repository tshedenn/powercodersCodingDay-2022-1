let reverse = (number)=> {
   let reversed = number.toString().split('').reverse().join('');
  return Math.sign(number) * parseInt(reversed);
}
console.log(reverse(1234 ));
console.log(reverse(10000));
console.log(reverse(-321));