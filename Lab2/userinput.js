 var number =  prompt("Enter Number");

 if (number != 1 || 2 || 3  ) {
 alert("Enter a valid number");

var number =  prompt("Enter Number");
}
 


var bulletList = "BulletList";
 if (number == 1) {
  document.write(bulletList.fontsize(6));
  document.write("<ul><li> List Item 1 </li><li> List Item 2 </li><li> List Item 3</li></ul>");


}
var orderedListNumber = "Ordered List : Number";
 if (number == 2) {
  document.write(orderedListNumber.fontsize(6));
  document.write("<ol><li> List Item 1 </li><li> List Item 2 </li><li> List Item 3</li></ol>");


}
var orderedListLetters = "Ordered List : Letters";
 if (number == 3) {
  document.write(orderedListLetters.fontsize(6));
  document.write("<ol type = A><li> List Item 1 </li><li> List Item 2 </li><li> List Item 3</li></ol>");
}