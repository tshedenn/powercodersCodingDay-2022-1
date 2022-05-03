let getLastValue = (weekDays = ["Monday","Thursday","Saturday","Wednesday","Tuesday"]) =>{
  let sortedVal = weekDays.sort();
  let output = sortedVal.slice(-1);
  console.log(output);
  // let weekDays = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];
  //  let sortedVal= weekDays.sort();
  // console.log(sortedVal);
  // weekDays.forEach(function(item,index){
  //   console.log(item,index);
  // });
  // let toGetString = weekDays.toString();
  // console.log(toGetString);

}
getLastValue();