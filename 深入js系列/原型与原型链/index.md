### prototype 属性

```
function Person(){
}
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
```

> 构造函数的 prototype 指向构造函数实例的原型
> 原型:每一个 JavaScript 对象(null 除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

###**proto**属性: 每一个 JavaScript 对象(null 除外)的**proto**指向原型.

```
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

### constructor 属性:原型的 constructor 属性指向构造函数

### 原型没有属性指向实例

### 实例和原型

1. 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止，这就是原型链

### 原型的原型

1. 原型的原型最终指向 null, Object.prototype.**proto**===null 和 Object.prototype===null 是相同的意思

```
console.log(Object.prototype.__proto__ === null) // true
```

### 补充:

1. 实例没有 constructor 属性，是从实例的原型中读取到的

```
function Person() {

}
var person = new Person();
console.log(person.constructor === Person); // true
```

2. **proto**:非标准的属性，实际上存在于 Object.prototype 上，实际上是一个 getter/setter,当使用 obj.**proto** 时，可以理解成返回了 Object.getPrototypeOf(obj){getPrototypeOf 获取对象的原型}

### 继承实际上是委托,JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以委托更加恰当

### 图例

[原型链示意图](./原型链示意图.png)
