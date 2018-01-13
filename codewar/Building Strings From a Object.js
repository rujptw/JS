//对象不能直接转化为字符串，需要通过for in 的帮助，如果不这样，会被转换成"[objectobject]"的形式     
function solution(pairs) {
          var str = '';
          for (var i in pairs) {
              str += i + " = " + pairs[i] + ",";
          }
          return str.slice(0, str.length - 1);
      }
