function countSheeps(arrayOfSheep) {
  var sum = 0;
  arrayOfSheep.forEach((v)=>{
      if(v===true){
      sum++}  
  })
  return sum;
}