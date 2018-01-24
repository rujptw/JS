function sumDigits(number) {
  var num = Math.abs(number).toString().split("");
  var sums = 0;
  num.forEach((item)=>{
    sums+=Number(item)})
  return sums;
}
