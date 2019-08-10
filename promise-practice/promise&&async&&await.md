### promise

1. promise 是什么:promise 是抽象异步处理对象及对其进行各种操作的组件
2. promise 的状态 Pending,Fulfilled,Rejected
3. 生成一个 promise 实例对象用 new Promise(),里面有包含着 reject 和 resolve 对不同结果的处理函数
4. then 可以接受异步处理成功即 resolve 的结果.catch 接收异步处理失败的结果即 reject,操作可以串联，例如 then 后面可以加 then
5. 优点：避免了回调地狱,代码编写更加地清晰
6. 各种方法 Promise.all(),所有的异步操作结束后才会返回结果 Promise.race(),只要有一个异步操作返回结果，Promise 就返回结果

### async 和 await

1. async 和 await 是 promise 的语法糖
2. 优点：编写异步代码就像编写同步代码一样，比 promise 更加好理解
3. 其他特性:有 await 前缀的函数后面的代码等到该函数执行完毕之后，才能继续执行
4. 有 await 前缀的函数必须在 async 函数的前缀里
