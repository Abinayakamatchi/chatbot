function getBotResponse(input) {
    //rock paper scissors
    if (input == "what can i have?" || input == "what is available in the menu?") {
        return "please check our website";
    }if (input == "is cash on delivery available") {
        return "yes,please check our website";
    }if (input == "cash on delivery available") {
        return "yes,please check our website";
    }if (input == "how to order food?") {
        return "please,click the order now button to order food!,we have both cash on delivery and online payment.";
    }if (input == "when will my food arrive?") {
        return "Anytime soon!"; 
    }if (input == "is the resturant open today") {
        return "yes,We are open for delivery";
    }if (input == "what are the timings for the resturant") {
        return "11am-11pm"; 
    }if (input == "what payment is being used?") {
        return "stripe payment"; 
    }if (input == "when are you open at the morning?") {
        return "we are available from 11am";
    }if (input == "what is todays special") {
        return "please check the home page for featured food";
    } else if (input == "are you a bot") {
        return "yes";
    } else if (input == "is everything available is the menu") {
        return "yes,please check our website";
    }if (input == "Is any offer going?") {
        return "please check our website";
    }
    if (input == "hello" || input == "hi" || input == "heyyy" || input == "hey there") {
        return "Hello,How can i help you?";
    } else if (input == "goodbye" || input == "bye" || input == "Thankyou" || input == "Thanks" || input == "ok,thankyou") {
        return "Anytime!"; 
    } else {
        return "I would like to connect you to my manager,this is beyond my abilities!";
    }
}