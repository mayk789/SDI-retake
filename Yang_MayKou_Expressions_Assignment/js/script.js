/*
May Kou Yang
SDI Section 2
MDV2330-O
Week 2
Expressions Assignment
 */

//alert("Javascript is working");

//Variables
var numberOfLoads; //Variable for the number of loads of laundry a person washes.
var detergent = true; // Boolean variable.
var washing = [.50, 1.25]; //Array that shows the cost of detergent (.50) plus the cost of the wash.
var actualWashCost = washing[0] + washing[1]; // Variable representing actual cost to wash because you had to buy detergent.
var dryCost; //Variable which will contain the cost of using the drying machine.
var howOftenWeekly; //Variable which shows how often laundry is done on a weekly basis.
var totalCost; //Variable shows total cost of laundry.

//Prompts
numberOfLoads = prompt("Please enter the number of loads of laundry you do on laundry day.");
dryCost = prompt("Enter how much it costs to run the drying machine for 1 cycle.");
howOftenWeekly = prompt("How many times a week do you do wash the laundry?");

//Outputs
console.log("You wash " + numberOfLoads + " load(s) of laundry whenever it's laundry day.");
console.log("Yes, it's " + detergent + " . You like to buy a small box of detergent.");
console.log("The box of detergent costs " + washing[0] + "0.");