/*
May Kou Yang
SDI Section 02
MDV2330-O
Week 4
Functions Assignment
 */

/* NOTE TO SELF:
 Florida lottery has 6 random numbers ranging from 1-53,
 Powerball lottery has 5 random numbers ranging from 1-59 & 1 powerball number ranging from 1-35
 */


//alert("Javascript is working!");


/*
//Variable
var lotteryGame; //Lottery game of choice.


//Prompt
var lotteryGame = prompt("Please enter which lottery game you would like to purchase a ticket for. Enter either Florida or Powerball."); //Prompts the user to enter which lottery game they would like to purchase a ticket for.


if (lotteryGame === "Florida"){//runs it "Florida" is entered
    console.log("So you wish to purchase a " + lotteryGame + " lottery ticket. Good luck!");//this prints to the console if "Florida" is entered

}else if (lotteryGame === "Powerball"){//runs if "Powerball" is entered
    console.log("Buying a " + lotteryGame + " ticket? Good luck on it!");//this prints to the console if "Powerball" is entered

}else{//runs if anything other than "Florida" or "Powerball" has been entered by user
    lotteryGame = prompt("Looks like you did not enter Florida or Powerball. Please enter one of the two.");//Prompts the user again to enter either "Florida" or "Powerball"
    console.log("Glad you came to a decision. You'll be getting your " + lotteryGame + " ticket in a moment.");//user input is printed to the console
}

*/

//Function

function randomNumberDrawn(min, max, digit){

    var array = [];//creates the array

//Loop
    for (var a = 0; a < digit; a++){//defines starting point for "var a" as 0. As long as the number of loops is less than "digit", keeps running. 0 is not included in lottery numbers ++ to guarantee that we do not get 0.
        var lotteryNumber = Math.round()(Math.random() * (max - min) + min);

        array[a] = lotteryNumber;

    }

}


//Main code

//Florida lottery
randomNumberDrawn(1, 59, 6);

//Powerball lottery
randomNumberDrawn(1, 35, 5);