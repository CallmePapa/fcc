/**
 * Created by weiqiujuan on 17-8-8.
 */
function unite(arr1, arr2, arr3) {
    let args=Array.from(arguments);
    let arr =args.reduce(function(prev,cur){
        return prev.concat(cur);
    });
    return arr.filter(function(item,index,arr){
        return arr.indexOf(item)===index;
    });
    return arr;

}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);