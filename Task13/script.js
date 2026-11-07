console.log("hello world");


const str ="fariz"
console.log(str);




// 1,2,4 den basqa hamsi olar




let a="elgiz"
let b='Elnure xanim muleime'
console.log(a +" "+ b);

// task 20


// 1) if...else operatoru ilə yazllmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın.
// let id = prompt ('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// }

let id = prompt('enter product id:');

switch (id) {
  case '1':
    alert('Available 10 pcs.');
    break;
  case '2':
    alert('Available 256 pcs.');
    break;
  case '3':
    alert('Available 53 pcs.');
    break;
  case '4':
    alert('There are 3 available.');
    break;
  default:
    alert('Out of stock');
}




// ////////////////////////////////////////////////////



let aylar = prompt("necenci ayi axtarirsiz?");

switch (aylar) {
  case "1":
    console.log("Yanvar");
    break;
  case "2":
    console.log("Fevral");
    break;
  case "3":
    console.log("Mart");
    break;
  case "4":
    console.log("Aprel");
    break;
  case "5":
    console.log("May");
    break;
  case "6":
    console.log("İyun");
    break;
  case "7":
    console.log("İyul");
    break;
  case "8":
    console.log("Avqust");
    break;
  case "9":
    console.log("Sentyabr");
    break;
  case "10":
    console.log("Oktabr");
    break;
  case "11":
    console.log("Noyabr");
    break;
  case "12":
    console.log("Dekabr");
    break;
  default:
    console.log("ay cemi 12 denedi cox yazdin ");
}



// ///////////////////////////////////////



let bookPrice = 750;
let bookAmount = 14;
let umumiDeyer = bookPrice * bookAmount;
console.log(umumiDeyer); 


// ///////////////////////////////////////

let kmhSpeed = 75;
let msSpeed = kmhSpeed / 3.6;
console.log(msSpeed); 

// /////////////////////////////////////////


let dogumTarixiInput = prompt("Dogum tarixinizi yazin (YYYY-MM-DD):");
let dogum = new Date(dogumTarixiInput);
let buGun = new Date();
let yasadigiGunler = Math.floor((buGun - dogum) / (24 * 60 * 60 * 1000));
console.log("Yasadiginiz gunlerin sayi:", yasadigiGunler);

// ////////////////////////////////////////


const num = 30;
console.log(num ** 5);
console.log(num % 3);



// //////////////////////////////////////

let firstName = 'Alan';
let lastName = 'Turing';

console.log(' Sizin adınız ' + firstName + ' ' + lastName + '. Tanışlığımıza çox şadam! ');


// //////////////////////////////////////////////

let fullName = "Murad Orucov";
console.log(fullName.replaceAll(" ", "").length); 

// ///////////////////////////////////////

let fullName = "Murad Orucov";
const [firstName, lastName] = fullName.split(" ");
console.log(firstName[0] + lastName[0]); 

// ////////////////////////////////////////

const fullName = prompt("Tam adınızı daxil edin (AD SOYAD):");
const [firstName, lastName] = fullName.split(" ");
console.log( lastName +' '+firstName );

// /////////////////////////////////////////

const a = Number(prompt("Birinci ədədi daxil edin:"));
const b = Number(prompt("İkinci ədədi daxil edin:"));
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// //////////////////////////////////////////////

const result = 12345 * 98765; 
console.log(String(result)[5]); 

// /////////////////////////////////////////////

let value = 10;
console.log(value < 15);    
console.log(value <= 10);   
console.log(value == 10);   
console.log(value === 10);  
console.log(value != 20);   

// /////////////////////////////////////////////

const year = Number(prompt("İl daxil edin:"));

if (year % 4 === 0) {
  console.log("İl uzun ildir");
} else {
  console.log("İl uzun il deyil");
}


// ////////////////////////////////////////////