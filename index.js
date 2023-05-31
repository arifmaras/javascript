var marka = "Opel";
var model = "Astra";
var otomatikMi = "yes";

/* if else*/
if (otomatikMi == "yes") {
  console.log("araç otomatiktir");
} else {
  console.log("araç otomatik değildir");
}

otomatikMi = true;

if (otomatikMi) {
  console.log(marka + " " + model + " " + "otomatik");
}

if (otomatikMi == "true") {
  console.log("true");
}

if (10 == "10") {
  // tipinide kontrol etmek istersek ===
  console.log("sayilar eşit");
}

/* switch statement */
// 1 : manuel
//2 : otomatik
var vites = "1";

if (vites == "3") {
  console.log("bu araç manuel vitestir");
} else if (vites == "2") {
  console.log("bu araç otomatiktir.");
} else {
  console.log("yanlış bir değer");
}

vites = "2";
switch (vites) {
  case "1":
    console.log("araç manuel");
    break;
  case "2":
  case "3":
    console.log("araç otomatik");
    break;
  default:
    console.log("yanlış değer");
}
