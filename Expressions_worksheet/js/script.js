/**
 * Created by maykouyang on 3/11/15.
 */
//Activity - Expression worksheet

/*
//Problem: Calculating how old Sparky is in dog years based on actual age.

var humanYears = prompt("How old is Sparky in human years?"); //prompts user to enter number
var dogYears = humanYears * 7;// calculates dog years by human years


console.log("Sparky is " + humanYears + " human years old which is " + dogYears + " dog years old."); // prints info to the console
*/


//Slice of Pie part 1
var slicesPerPizza = prompt("How many slices are there per pizza?"); //prompts user to enter number of slices per pizza
var people = prompt("How many will be attending?"); //prompts user to enter number of people attending
var pizza = prompt("How many pizzas will be ordered?"); //prompts user to enter the number of pizzas that will be ordered
var slicesTotal = (pizza * slicesPerPizza); //calculates total number of slices
console.log(slicesTotal);
var personEats = slicesTotal / people; //calculates the number of slices that each person gets

console.log("Each person ate " + personEats + " slices of pizza at the party.")