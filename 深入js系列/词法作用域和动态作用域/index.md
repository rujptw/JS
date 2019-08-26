### js 是词法作用域，即静态作用域

1. 函数的作用域在函数定义的时候就确定了
2. 例子:


    ```
    var value = 1;

    function foo() {
    console.log(value);
    }

    function bar() {
    var value = 2;
    foo();
    }

    bar();//1,
    除非foo函数定义在bar内部调用，才能获取2

```
### bash是动态作用域
  1. 函数的作用域在函数调用的时候确定
```
