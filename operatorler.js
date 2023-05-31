var x = 10;
var y = 20;
var z = 10;

console.log(x + y);
console.log(x - y);
console.log(y / x);
console.log(x * y);
console.log(x * y + z);
console.log(x * (y + z));

// x++;
// x--;
// x = x - 1;
// x = x + 1;
// console.log(x);

/*
Karşılaştırma Operatörleri;
*/

var sonuc = x > y; //dönecek olan sonuç boolean olacaktır.
console.log(sonuc);
console.log(x < y);
console.log(x >= z);
console.log(x == z);
console.log(x == "10");
console.log(x === "10");
console.log(x != z);

/*Mantıksal Operatörler   && VE AND OPERATORU */

a1 = true && true; // return true
a2 = true && false; // return false
a3 = false && true; //return false
a4 = false && 3 == 4; //return false
a5 = "cat" && "dog"; // t && t return "dog"
a6 = false && "cat"; //return false
a7 = "cat" && false; // return false
a8 = "" && false; // return " "
//a9=false && || // return false

console.log(20 > 10 && 30 <= 20);

/*Mantıksal Operatörler || YADA OR  */
o1 = true || true; // t returns true
o2 = false || true; // returns true
o3 = true || false; // returns true
o4 = false || 3 == 4; //returns false
o5 = "cat" || "dog"; // returns "Cat"
o6 = false || "cat"; // returns "Cat"
o7 = "cat" || false; // returns "Cat"
o8 = "" || false; // returns false
o9 = false || ""; // return " "

console.log(20 > 10 || 30 <= 20);

/* Mantıksal Operatörler ! Değil  */

n1 = !true; // it returns false
n2 = !false; // it returns true
n3 = !"Cat"; // it returns false

console.log(!(x > z));
