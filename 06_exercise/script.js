let weekNumbersToWords=()=>{
    let weekNumbers=[1,4,6,3,2];
    let weekDay=[];
    for(i=0;i<weekNumbers.length;i++){
      let day;
    
      switch(weekNumbers[i]){
        case 1:
          day ='Monday';
          weekDay.push(day);
          break;
       case 2:
          day ='Tuesday';
          weekDay.push(day);
          break; 
       case 3:
          day='Wednesday';
          weekDay.push(day);
          break;
        case 4:
          day='Thursday';
          weekDay.push(day);
          break;  
        case 5:
          day ='Friday';
          weekDay.push(day);
          break;
        case 6:
          day = 'Saturday'
          weekDay.push(day);  
          break;
        case 7:
          day = 'Sunday'
          weekDay.push(day);  
          break;
      default:
       ; 
      }
    }
return weekDay;
}
console.log(weekNumbersToWords());