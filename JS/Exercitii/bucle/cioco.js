var money = 5;
var chocolates = 0;
var chocolatesPrice = 1;

while(money >= chocolatesPrice) {
    chocolates++;
    money -= chocolatesPrice;
}
document.write("I have " + chocolates + " chocolates!");
// document.write("<br/>");
// if(money == 1) {
//     document.write("Mai am " + money + " Leu");
// } else {
//     document.write("Mai am " + money + " Lei");
// }
