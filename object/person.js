/**
 * Created by weiqiujuan on 17-8-11.
 */
var Person = function(firstAndLast) {
    var name=firstAndLast.split(" "),
        firstName=name[0],
        lastName=name[1];
    this.getFirstName=function(){
        return firstName;
    };
    this.getLastName=function(){
        return lastName;
    };
    this.getFullName=function(){
        name[0]=firstName;
        name[1]=lastName;
        return name.join(' ');
    };
    this.setFirstName=function(first){
        return firstName=first;
    };
    this.setLastName=function(last){
        return lastName=last;
    };
    this.setFullName=function(firstAndLast){
        name=firstAndLast.split(" ");
        firstName=name[0];
        lastName=name[1];
    };

};

var bob = new Person('Bob Ross');
bob.getFullName();
