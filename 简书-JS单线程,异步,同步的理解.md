#### JS是单线程的
1. 意义：任务是串行的，只能一步一步地去做。
2. 缺点：可能会造成长时间的等待
3. 怎么解决:异步，能够同时做多项任务,提高了效率，虽然JS是单线程的。
4. 流程：通过将任务交给相应的异步模块去处理，主线程的效率大大提升，可以并行的去处理其他的操作。当异步处理完成，主线程空闲时，主线程读取相应的callback，进行后续的操作，最大程度的利用CPU。
5. 流程图：
    [事件循环机制](./images/事件流程图.png)
6. 说明：
7. 如上图为事件循环示例图（或JS运行机制图），流程如下
    1. step1: 主线程读取JS代码，此时为同步环境，形成相应的堆和执行栈；
    2. step2: 主线程遇到异步任务，指给对应的异步进程进行处理（WEB API）;
    3. step3: 异步进程处理完毕（Ajax返回、DOM事件处罚、Timer到等），将相应的异步任务推入任务队列；
    4. step4: 主线程执行完毕，查询任务队列，如果存在任务，则取出一个任务推入主线程处理（先进先出）；
    5. step5: 重复执行step2、3、4；称为事件循环。

8. 执行的大意：同步环境执行(step1) -> 事件循环1(step4) -> 事件循环2(step4的重复)…
   　
9. 其中的异步进程有：
* a、类似onclick等，由浏览器内核的DOM binding模块处理，事件触发时，回调函数添加到任务队列中；
* b、setTimeout等，由浏览器内核的Timer模块处理，时间到达时，回调函数添加到任务队列中；
* c、Ajax，由浏览器内核的Network模块处理，网络请求返回后，添加到任务队列中

10. 任务队列：
* 分类: 1. **microtask queue** 2. **macrotask queue** 

* 上面的a,b，c均属于macrotask queue，它的api: setTimeout, setInterval, setImmediate, I/O, UI rendering

* microtask queue 的api:process.nextTick, Promise, MutationObserver

* macrotask任务会优先于microtask执行,任务队列分为 macrotasks 和 microtasks, 而promise中的then方法的函数会被推入到microtasks队列中，而setTimeout函数会被推入到macrotasks任务队列中，在每一次事件循环中，macrotask只会提取一个执行，而microtask会一直提取，直到microsoft队列为空为止。

* 代码为证
    ```
    console.log('1, time = ' + new Date().toString())
        setTimeout(macroCallback, 0);
        new Promise(function(resolve, reject) {
            console.log('2, time = ' + new Date().toString())
            resolve();
            console.log('3, time = ' + new Date().toString())
        }).then(microCallback);

        function macroCallback() {
            console.log('4, time = ' + new Date().toString())
        } 

        function microCallback() {
            console.log('5, time = ' + new Date().toString())
        }

    依次打印为:1,2,3,5,4
    ```
11. 更完整的事件循环流程    

> 将microtask加入到JS运行机制流程中，则：

* step1、2、3同上，

* step4：主线程查询任务队列，执行microtask queue，将其按序执行，全部执行完毕；

* step5：主线程查询任务队列，执行macrotask queue，取队首任务执行，执行完毕；

* step6：重复step4、step5。

* microtask queue中的所有callback处在同一个事件循环中，而macrotask queue中的callback有自己的事件循环。

* 简而言之：同步环境执行 -> 事件循环1（microtask queue的All）-> 事件循环2(macrotask queue中的一个) -> 事件循环1（microtask queue的All）-> 事件循环2(macrotask queue中的一个)...

* 利用microtask queue可以形成一个同步执行的环境，但如果Microtask queue太长，将导致Macrotask任务长时间执行不了，最终导致用户I/O无响应等，所以使用需慎重。

* 为什么要用promise，async:  
1. 根据 HTML Standrad， 在每个task运行完以后，UI都会重新渲染，那么在    microCallback完成数据更新，因此当前task结束就可以得到最新的UI了。    反 之：如果新建一个task(例如ajax)来做数据更新的话，那么渲染会执行两次。

> 参考:
  * [JS 事件循环机制 - 任务队列、web API、JS主线程的相互协同](http://www.cnblogs.com/hity-tt/p/6733062.html)
  * [Vue 中如何使用 MutationObserver 做批量处理？](https://www.zhihu.com/question/55364497/answer/144215284)
  * [javascript中的异步 macrotask 和 microtask 简介](http://www.cnblogs.com/hity-tt/p/6733062.html)
