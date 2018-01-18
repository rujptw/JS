    //parseInt将字符串转化为数字，同时能将不是10进制的数，转为10进制
    function countTheAnimals(animals) {
            var num = 0;
            for(var i in animals){
                num+= parseInt(animals[i],2);
            }
            return num
    }
