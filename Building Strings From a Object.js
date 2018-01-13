      function solution(pairs) {
          var str = '';
          for (var i in pairs) {
              str += i + " = " + pairs[i] + ",";
          }
          return str.slice(0, str.length - 1);
      }
