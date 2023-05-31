  console.log("sayfa yüklendi");

var ad = prompt("ad giriniz:");
var ogrno = prompt("Öğrenci no giriniz:");
var cinsiyet = prompt("Cinsiyet") // erkek : true; kadın : false
var ders = prompt("Ders Adı:");
var not1 = prompt("1.Sınav notu giriniz:");
var not2 = prompt("2.Sınav notu giriniz:");

var ortalama = (Number(not1) + Number(not2)) / 2;

console.log(
  ogrno +
    " " +
    "numaralı " +
    ad +
    "(" +
    cinsiyet +
    ")" +
    "isimli öğrencinin " +
    ders +
    " " +
    "dersinden aldığı not ortalaması " +
    ortalama
);
