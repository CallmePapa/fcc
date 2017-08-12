/**
 * Created by weiqiujuan on 17-8-8.
 */
//三种实现方式

//递归方法

function Fibonacc(n) {
    return n < 2 ? n : (Fibonacc(n - 1) + Fibonacc(n - 2));
}


//数组方式
var fibArray =function(){
    var cache = [1,1];
    return function(n){
        if(n>=cache.length){
            for (var i=cache.length;i<n;i++){
                cache[i]=cache[i-2]+cache[i-1];
            }
        }
        return cache[n-1];
    };
}();


//用交换直接用加法
function fibSum(n) {
    if(n<=2){
        return 1;
    }
    var a=1;
    var b=1;
    for(var i=2;i<n;i++){
        b=a+b;
        a=b-a;
    }
    return a + b;
}



//第一种有他的局限性，n为10*10000的时候递归就已经报内存溢出了
//如果只使用一次运算，第三种方法速度最快；
//如果多次使用，第二种方法明显优于其它两种；