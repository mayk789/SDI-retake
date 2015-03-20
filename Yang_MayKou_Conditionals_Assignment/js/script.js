/*
May Kou Yang
SDI Section 02
 MDV2330-O
 Week 3
 Conditionals Assignment
 */
//alert("Javascript is working.")

//Variables

var calIntake;
var calBurned;
var female = true;//Boolean which indicates the gender of user.
var dailyCalIntake = [2000, 2500]; //Average daily recommended calorie intake for women is 2,000. Whereas, for men, it is 2500.
var totalCalLeft;


//Prompts

var calIntake = prompt("Please enter in the total amount of calories you consumed today.");//prompts user for a value
calIntake = Number(calIntake); //makes sure this will be a number
if (calIntake > 0) {
    //runs this if it is true that calIntake is greater than 0
    console.log("Your calorie intake for today is " + calIntake + ".");
} else {
    // if <= 0, run this
    calIntake = prompt("Please enter total number of calories you consumed today. Your intake should not be 0.");
    console.log("Okay, your calorie intake is " + calIntake + " for today.");
};

var calBurned = prompt("Enter the number of calories that you used today.");//prompts user to enter value for calBurned
calBurned = Number(calBurned); //ensures that the value will be a number
if (calBurned >= 1500){
    //run this if data entered in greater than or equal to 1500
    console.log("You burned " + calBurned + " calories today. Way to go!");
}else if (calBurned < 1500, calBurned > 400){
    //run this if data entered is less than 1500 but more than 400
    console.log("You used " + calBurned + " calories today. Not bad!");
}else{
    //run this if data entered is less than 400
    console.log("You burned only " + calBurned + " calories. Come one you can do more than that!")
}
//calculates the totalCalLeft variable using the values entered by the user for calIntake & calBurned
totalCalLeft = calIntake - calBurned;

//Confirm, Ok for true: Cancel for false
female = confirm("Are you a female? Click \"Ok\" for true or \"Cancel\" for false. Your gender will affect your daily recommended calorie intake.");

if(female !== true){
    //run this if not true
    console.log("Daily recommended calorie intake for men is " + dailyCalIntake[1] + ".");
}else{
    //run this if true
    console.log("For women, the daily recommended calorie intake is " +dailyCalIntake[0] + ".");
}

//Output
console.log("Your calorie count for the end of the day is" + totalCalLeft + ".")
