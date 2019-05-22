### 糟粕

1. js 依赖于全局变量来进行连接，所有编译单元的所有顶级变量被撮合到一个全局变量中({})的公共命名空间中,

2. parseInt(params),
   > 问题
   - 只会返回 params 的数字部分，而没有对非数字部分的提示
   - 解析以 0 开头的字符串,比如'08',ie8 会出现错误
     > 解决
   - 总是带上第二个参数告诉函数以什么进制解析
3. NaN
   > 问题
   - 类型是数字
   - isNaN(),对非数字字符串和 NaN 都返回 true
     > 解决:
     1. es6 Number.isNaN,判断参数是否为 NaN 或其他，不存在隐式转化


          ```
           polyfill:
           Number.isNaN = Number.isNaN || function(value) {
              return typeof value === "number" && isNaN(value);
           }
           ```
      2. 判断是否为数字
         > isFinite 会剔除 NaN 和 infinite,但存在隐式转化
         ```
         function isNumber(num){
             return typeof num === "number" && isFinite(num)
         }
         ```

4.  typeof

    > 问题

    - 检测数组和对象都会返回 object
      > 解决
    - Array.isArray(),参数为数组返回 true，否则返回 false

5.  [浮点数精度问题](https://blog.csdn.net/u013347241/article/details/79210840)

6.  js 的内部方法可能会被改写，从而造成莫名其妙的错误
