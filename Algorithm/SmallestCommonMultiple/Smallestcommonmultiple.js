"use strict";
function smallestCommonMultiple(){
    var max=Math.max(arr[0],arr[1]);
    var min=Math.min(arr[0],arr[1]);
    for(var i=min+1;i<max;i++){
        arr.push(i);
    }

    var gcd = function(a,b){
        if(a%b===0)
            return b;
        else
            return gcd(b,a%b);
    };

    return arr.reduce(function(a,b){
        return a*b/gcd(a,b);
    });

}