/*
Week 3
Screen cast: Conditionals
Ternary Operators
 */

//alert("Javascript is working. :)")

/*
if(condition){
    do if true;
}else{
    do if false;
}

(condition) ? do if true : do if false;
*/

var age = 6;
var book;

//if child is under 10, they get "Green Eggs and Ham", otherwise they get "The Time Machine"
/*
if(age<10){
    book = "Green Eggs and Ham";
}else{
    book = "Time Machine";
}
*/
book = (age <10) ? "Green Eggs and Ham" : "Time Machine";
console.log(book);