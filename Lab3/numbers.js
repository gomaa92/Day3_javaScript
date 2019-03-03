 var number1;
 var number2;
 var number3;

do{
	number1 =  prompt("Enter Number1");
} while(isNaN(number1))

do{
	number2 =  prompt("Enter Number2");
} while(isNaN(number2))

do{
	number3 =  prompt("Enter Number3");
} while(isNaN(number3))

document.write( "number 1 is : "+number1);
document.write("<br>");
document.write("number 2 is : "+number2);
document.write("<br>");
document.write("number 3 is : "+number3);
document.write("<br>");

var max = Math.max(number1,number2 ,number3);
document.write("Max number is "+max);
document.write("<br>");


var min = Math.min(number1,number2 ,number3);
document.write("Min number is "+min);
document.write("<br>");
