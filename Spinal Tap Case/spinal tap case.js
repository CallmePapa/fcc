/**
 * Created by weiqiujuan on 17-8-8.
 */
function spinslTapCase(str){
    var  str=str.replace(/_/g," ")
        .replace(/([A-Z])/g," $1")
        .replace(/^\s/g,"")
        .replace(/\s+/g,"-")
        .toLowerCase();
    return str;
}

spinslTapCase('This Is Spinal Tap');