function noRepeats(str) {
    var reg=/(.)\1+/g;
    if(str.match(reg)!==null&&str.match(reg)[0]===str){
        return 0;
    }

    var arr=str.split('');
    var newArr=[];


   function swap(one,two){
       var tmp=arr[one];
       arr[one]=arr[two];
       arr[two]=tmp;
   }

    function dealRepeat(arr,begin){
        if(begin===arr.length-1){
            newArr[newArr.length]=arr.join('');
            return;
        }
        for(var i=0;i+begin<arr.length;i++){
             swap(begin,begin+i);
             dealRepeat(arr,begin+1);
             swap(begin,begin+i);
        }
        dealRepeat(arr,begin);
    }
    return newArr.filter(function (val) {
        return !val.match(reg);
    }).length;
}