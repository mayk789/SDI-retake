/*
Week 3
Screen cast: Conditionals
Else If
 */

//alert("Javascript is working. :)")

//Variables

var kidHeight = 48;
var minHeight = 48;
var wParentHeight = 45; //height of kid with parent

//if the child is old enough, print to the console, "you can ride!"
//if kid is over 48 inches in height
if(kidHeight > minHeight){
    //you can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with parent present
    console.log("You can ride but only with a parent present");
}else{
    //sorry, you have growing to do.
    console.log("Sorry kid, you've got some growing to do first!");
}