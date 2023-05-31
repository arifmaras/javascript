var a = prompt("1.sayı giriniz"); //10
var b = prompt("2.sayı giriniz"); //20
var c = prompt("3.sayı giriniz"); //30

console.log("a sayisi en büyük mü ? : ", a > b && a > c); //false

console.log("b sayisi en büyük mü ? : ", b > a && b > c); //false

console.log("c sayisi en büyük mü ? : ", c > a && c > b); //true
