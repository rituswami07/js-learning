function info() {
    let name    =  document.getElementById("text1").Value;

    document.getElementById("result").innerHTML = name;

}

function info1() {
    let cl =  document.getElementById("text2").value;

    document.getElementById("result2").innerHTML = cl;
}

function info2() {
    let roll = document.getElementById("text3").value;

    document.getElementById("result3").innerHTML = roll;
} 

// check if the number is positive 

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
    // the body of the if statement
    console.log("The number is positive");
}

console.log("The if statement is easy");

    var one = prompt("Enter the first number");
    var two = prompt("Enter the second number");
    one = parseInt(one);
    two = parseInt(two);
    if  (one == two)
         document.write(one + " is equal to " + two + ".");
      else if  (one<two)
          document.write(one + " is less than " + two + ".");
      else
          document.write(one + " is greater than " + two + ".");

function myFunction() {
    var x = document.getElementsByTagName("DIV")[0];

    if (x.id === "myDIV") {
        x.getElementsByClassName.fontSize = "30px";
    }
}

function day() {
    let clock  = document.getElementById("day").value;

    document.getElementById("result5").innerHTML = clock;
}

function num () {
    let age = document.getElementById("num").value;

    document.getElementById("result6").innerHTML = age;
}

function changeImage() {
    var image = document.getElementById("myImage");
    if (image.scr.match("bulbon")) {
        image.src = "pic_bulboff.gif";
    } else {
        image.scr = "pic_bulbon.gif";
}

}

function myFunction() {
    var x, text;
    console.log('gffgd')

    // Get the value of input field with id="numb"

    x = document.getElementById("numb").ariaValueMax;

    // If x is Not a Number or less then one or greater than 10, output "input is not valid"

    // If x is a number between 1 and 10, output "Input OK"

    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo8").innerHTML = text;
}

function myScore() {
    var letter = document.getElementById("myInput").value;
    var text;

    // If the letter is "c"
    if(letter === "c") {
        text = "Spot on! Good job!";

    // If the letter is "b" or "d"
    } else if (letter === "b" || letter === "d") {
        text = "Close, but not close enough.";

    // If the letter is anything else
    } else {
        text = "Waaay off..";
    }
    document.getElementById("demo4").innerHTML = text;
}

function age() {
    var numb = document.getElementById("numb1").value;
    var text;

    if (person  > 18) {
        text = "Yes you can drive";
    } else {
        text = "No you can't drive";
    }

    document.getElementById("demo5").innerHTML = text;
}

function stdt() {
    var letter = document.getElementById("info5").value;
    var text;
    var num = document.getElementById("info6").value;
    var text;

    // If the letter is started with "a" "b" "c" "d" "e"
    if(letter === "a" || letter === "b" || letter === "c" || letter === "d" || letter === "e") {
        text = "Accept the form";
        // If the letter is anything else
    } else {
        text = "Not accepted";
    }
    if(num < 22){
    text = "Accept the form";
    } else {
        text = "Not accepted";
    }

    document.getElementById("demo6").innerHTML = text;
}

function num() {
    var x = document.getElementById("log").value;
    var text;

    if (x > 18) {
        text = "Old enough";
    } else {
        text = "Too young";
    }

    document.getElementById("demo7").innerHTML = text;
}

function meet() {
       var age = document.getElementById("name").value;
       var y = 30;
       var text;

       if (age >= y) {
           text = "Enter";
       } else {
           text = "No entry";
       }

     document.getElementById("check").innerHTML = text;  
}

function meet1() {
    var age = document.getElementById("name2").value;
    var y = 20;
    var text;

    if (age == y) {
        text = "Enter";
    } else {
        text = "No entry";
    }

    document.getElementById("check2").innerHTML = text;
}