let weekNumbersToWords =()=>{
    let weekNumbers=[1,2,3,4,5,6,7];
    let day;
    let weekDay=[];
    switch(weekNumbers){
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
      default:
        day = 'invalid'; 
    }

}
weekNumbersToWords();