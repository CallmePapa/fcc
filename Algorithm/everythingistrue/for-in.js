"use strict";
function istrue(collection, prestr){
   var i='';
   var identify=true;
   for(i in collection){
       if(!collection[i][prestr]){
           identify=false;
       }
       return identify;
   }
}

istrue([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");