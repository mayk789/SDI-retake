/*
May Kou Yang
SDI Section 02
MDV2330-O
Week 4
Functions Assignment
 */

//alert("Javascript is working!");

//Variable
var lotteryGame; //Lottery game of choice.


//Prompt
var lotteryGame = prompt("Please enter which lottery game you would like to purchase a ticket for. Enter either Florida or Powerball."); //Prompts the user to enter which lottery game they would like to purchase a ticket for.


if (lotteryGame === "Florida"){//runs it "Florida" is entered
    console.log("So you wish to purchase a " + lotteryGame + " lottery ticket!");//this prints to the console if "Florida" is entered

}else if (lotteryGame === "Powerball"){//runs if "Powerball" is entered

    console.log("Buying a " + lotteryGame + "? Good luck!");//this prints to the console if "Powerball" is entered

}else{//runs if anything other than "Florida" or "Powerball" has been entered by user
    lotteryGame = prompt("Looks like you did not enter Florida or Powerball. Please enter one of the two.");//Prompts the user again to enter either "Florida" or "Powerball"
    console.log("Glad you came to a decision. You'll be getting your " + lotteryGame + " ticket.");//user input is printed to the console
}


//Main code