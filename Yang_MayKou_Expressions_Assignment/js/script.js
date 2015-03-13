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
var actualWashCost = washing[0] + washing[1]; // Variable representing the addition of cost of detergent and cost of wash to show actual wash cost.
var dryCost; //Variable which will contain the cost of using the drying machine.
var howOftenWeekly; //Variable which shows how often laundry is done on a weekly basis.


//Prompts
numberOfLoads = prompt("Please enter the number of loads of laundry you do on laundry day."); //Prompts user to input the number of load(s) of laundry they do at a given time.
dryCost = prompt("Enter how much it costs to run the drying machine for 1 cycle."); //Prompts the user to input how much it costs to use the dryer for 1 cycle.
howOftenWeekly = prompt("How many times a week do you wash the laundry?"); //Prompts user to enter how often per week do they do the laundry.

var totalCost = ((numberOfLoads * actualWashCost) + (numberOfLoads * dryCost)) * howOftenWeekly;//Variable calculates total cost to do laundry on a weekly basis.

//Outputs
console.log("You wash " + numberOfLoads + " load(s) of laundry whenever it's laundry day."); //Print to the console the number of loads of laundry which is washed whenever laundry is being done.
console.log("Yes, it's " + detergent + " . You like to buy a small box of detergent. That costs $" + washing[0]+ "."); //Prints to the console the boolean statement, "true" & the price of the box of detergent.
console.log("Being as the cost of washing is $" + washing[1] + " and the cost of the detergent is $" + washing[0] + "0, your actual washing cost is $" + actualWashCost + " and then the cost to dry for each cycle is $" + dryCost + "."); //Prints to the console the actual cost of washing laundry and the cost of drying.
console.log("You do laundry " + howOftenWeekly +" time(s) a week. So, it costs you $" + totalCost + " to do the laundry on a weekly basis."); //Prints to the console the how much it costs overall to do laundry per week.