/**
 * Created by weiqiujuan on 17-8-8.
 */
var sumFibs = function() {
    var cache = [1, 1];
    return function (n) {
        if (n >= cache.length) {
            for (var i = cache.length; i < n ; i++ ) {
                cache[i] = cache[i - 2] + cache[i - 1];
            }
        }
        var arr=cache.filter(function(val){
            return val%2!==0&&val<=n;
        });
        return arr.reduce(function(pre,next){
            return pre+next;
        });
    };

}();