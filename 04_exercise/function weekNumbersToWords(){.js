function weekNumbersToWords(){
  let weekNumbers=[1,4,6,3,2];
  let weekDay=[];
  for(i=0;i<weekNumbers.length;i++){
    switch(weekNumbers[i]){
      case 1:
        weekDay[0] ='Monday';
      // weekDay.push(day);
        break;
      case 2:
        weekDay[1] ='Tuesday';
      // weekDay.push(day);
        break; 
      case 3:
        weekDay[2]='Wednesday';
      // weekDay.push(day);
        break;
      case 4:
        weekDay[3]='Thursday';
      // weekDay.push(day);
        break;  
      case 5:
        weekDay[4] = 'Friday';
      // weekDay.push(day);
        break;
      case 6:
        weekDay[5] = 'Saturday';
      // weekDay.push(day);  
        break;
        case 7:
          weekDay[6] = 'Sunday';
        // weekDay.push(day);  
          break;
      default:
      ; 
    }
  }
return weekDay;
}
console.log(weekNumbersToWords());