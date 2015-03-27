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


//Variable
var lotteryGame; //Lottery game of choice.
var floridaTicket;//numbers for Florida lottery ticket
var powerballTicket;//first 5 numbers for Powerball ticket
var powerballNum;//last number for the Powerball ticket

//Prompt
var lotteryGame = prompt("Please enter which lottery game you would like to purchase a ticket for. Enter either Florida or Powerball."); //Prompts the user to enter which lottery game they would like to purchase a ticket for.


if (lotteryGame === "Florida"){//runs if "Florida" is entered
    console.log("So you wish to purchase a " + lotteryGame + " lottery ticket? Good luck with your numbers!");//this concatenation prints to the console if "Florida" is entered

}else if (lotteryGame === "Powerball"){//runs if "Powerball" is entered
    console.log("Buying a " + lotteryGame + " ticket? Good luck on it!");//this concatenation prints to the console if "Powerball" is entered

}else{
    lotteryGame = prompt("You need to choose and enter either Florida or Powerball. Please do so in the space.");
    console.log("Glad that you made a decision. You will be getting your " + lotteryGame + " ticket in a moment.");

}



//Function

/*function whichLottery(lotteryGame){

    var chancesGiven = 1;

    while (lotteryGame === " "){

        lotteryGame = prompt("You can not leave this blank. Please enter one of the two choices you are given.");

        chancesGiven++;

        if(chancesGiven === 3){
            console.log("You were already given 3 more chances to enter your decision. No more for you.");
        }
    }
}

Can not get the above to run properly

*/

function randomNumberDrawn(min, max, digit){//settings for parameters

    var array = [];//creates the array

//Loop
    for (var a = 0; a < digit; a++){//defines starting point for "var a" as 0. As long as the number of loops is less than "digit", keeps running. 0 is not included in lottery numbers ++ to guarantee that we do not get 0.
        var lotteryNumber = Math.round(Math.random() * (max - min) + min);//Generates random whole numbers

        array[a] = lotteryNumber;//puts the numbers generated for "lotteryNumber" in an array

    }

    return array;//data shows as an array
}


//Main code

if(lotteryGame === "Florida"){ //Florida lottery
    floridaTicket = randomNumberDrawn(1, 53, 6);//sets min to 1, max to 53, and sets the digits/loops to 6
    console.log("Here are your numbers: "  + floridaTicket);
}else if(lotteryGame === "Powerball"){ //Powerball lottery
    powerballTicket = randomNumberDrawn(1, 59, 5);//sets min to 1, max to 59, & sets the digits/loops to 5. These are the first 5 numbers of the Powerball
    powerballNum = randomNumberDrawn(1, 35, 1);//sets min to 1, max to 35, & sets it at 1 digit/loop. This is the last Powerball number
    console.log("These are your numbers: " + powerballTicket + " & " +powerballNum);
}




