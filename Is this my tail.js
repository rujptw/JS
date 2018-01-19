function correctTail(body, tail){
  var length = body.length
  var sub = body.slice(length-1,length)
  if (sub === tail){
    return true
  }
  else {
    return false}
  }
