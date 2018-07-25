//🍠适用于使用export导出，使用import{params}引入变量函数等
import {name,sayName,ani,weak} from "./inner"
//🍠适用于使用export default导出
import foodies from './inner'
//🍠将其他模块的东西全部导入,并设置别名
import * as obj from './other'

sayName(name)
sayName(ani)
weak()
sayName(foodies)
console.log(obj)
