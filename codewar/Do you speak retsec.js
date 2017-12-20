function reverseByCenter(s){
 var num = s.length;
  if(num%2==0){
    return s.substring(num/2)+ s.substring(0,num/2);
  }else{
  	return s.substring(parseInt(num/2)+1)+s[parseInt(num/2)]+s.substring(0,parseInt(num/2))
  }
}