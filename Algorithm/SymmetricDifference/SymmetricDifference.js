/**
 * Created by weiqiujuan on 17-8-10.
 */
function sym(args) {
    var array=Array.prototype.slice.call(arguments);

    return array.reduce(function(pre,cur){
        "use strict";
        pre=unquie(pre);
        cur=unquie(cur);

        for(var i=0;i<cur.length;i++){
            if(pre.indexOf(cur[i])===-1){
                pre.push(cur[i]);
            }
            else{
                pre.splice(pre.indexOf(cur[i]),1);
            }
            console.log('new: ',pre);
        }
        return pre.sort();
    });
}

function unquie(str) {
    var strUnquie=[];
    for(var j=0;j<str.length;j++){
        if(strUnquie.indexOf(str[j])===-1){
            strUnquie.push(str[j]);
        }
    }
    return strUnquie;
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);