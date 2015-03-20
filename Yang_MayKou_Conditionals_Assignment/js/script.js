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
var totalCalLeft;
var female = true;//Boolean which indicates gender of user.
var dailyCalIntake = [2000, 2500]; //Average recommended calorie intake for women is 2,000. Whereas, for men, it is 2500.
var sliceOfPie = 400; //number of calories in a slice of apple pie

//Prompts

var calIntake = prompt("Please enter in the total amount of calories you consumed today.");//prompts user for a value
calIntake = Number(calIntake); //makes sure this will be a number
if (calIntake > 0) {
    //runs this if calIntake is greater than 0
    console.log("Your calorie intake for today is " + calIntake + ".");
} else {
    calIntake = prompt("Please enter total number of calories you consumed today. Your intake should not be 0.");
    console.log("Okay, your calorie intake is " + calIntake + " for today.");
};

var calBurned = prompt("Enter the number of calories that you used today.");
calBurned = Number(calBurned);
if (calBurned >= 1500){
    console.log("You burned " + calBurned + " calories today. Way to go!");
}else if (calBurned < 1500, calBurned > 400){
    console.log("You used " + calBurned + " calories today. Not bad!");
}else{
    console.log("You burned only " + calBurned + " calories. Come one you can do more than that!")
}

//Confirm
female = confirm("Are you a female? Click \"Ok\" for true or \"Cancel\" for false. Your gender will affect your daily recommended calorie intake.");

if(female !== true){
    console.log("Daily recommended calorie intake for men is " + dailyCalIntake[1] + ".");
}else{
    console.log("For women, the daily recommended calorie intake is " +dailyCalIntake[0] + ".");
}

