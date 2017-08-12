
function every(collection,pre) {
    var result = collection.every(function(item){
        return item[pre];
    });
    return result;
}