
//👇使用export到出变量
export const name = "sam"
//👇导出函数
export function sayName(param){
    alert(param)
}
//👇导出函数
export let weak = function(){
   alert("you need to work") 
}
let oneAnimal = {
    color:"yellow",
    foot:2
}
//👇使用别名导出
export {oneAnimal as ani}

//👇如果一个js模块文件就只有一个功能， 那么就可以使用export default导出,就像vue的组件
export default {
    food:"vegetables"
}

//👇使用通配符*,重新导出其他模块的接口, (其实就是转载文章， 然后不注明出处啦);
 export * from './other'
//👇如果只想导出部分接口， 只要把接口名字列出来
export {foo,fnFoo} from "./other";

