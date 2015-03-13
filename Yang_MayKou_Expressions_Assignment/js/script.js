/*
May Kou Yang
SDI Section 2
MDV2330-O
Week 2
Expressions Assignment
 */

//alert("Javascript is working");

//Variables
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var numberOfLoads;
var washCost;
var dryCost;
var costOfLaundry = ((numberOfLoads * washCost) + (numberOfLoads * dryCost));
var weeklyDeal = dayOfWeek[4];
    dayOfWeek[4]=  costOfLaundry - (numberOfLoads * dryCost);
