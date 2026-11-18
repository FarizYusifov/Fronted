// 1)
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
// Son dəyəri konsola çıxarın.


// let n = prompt("zehmet olmasa ikireqemli eded daxil edin:");
// n = Number(n)
// while (n < 100) {
//     n += 7
// }
// console.log(n);



// 2)
// Konsola N dəfə «I know how to use cycles» mesajı  yazın.
// Proqram N ədədini istifadəçidən soruşur.


// let n = prompt("Zehmet olmasa eded daxil edin:") 
// for (i = 0 ; i < n ; i++ )  { 
//    let a="I know how to use cycles" 
//      console.log(a);
// }



// 3)
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// for (i = 100; i < 1000; i=i+10) {
//     console.log(i);
// }

// 4)
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.



// let sum = 0
// for (i = 10; i < 100; i++) {
//     if (i % 2 != 0) {
//         sum = sum + i
//     }
// }
// console.log(sum);



// 7)
// 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
// Alınan dəyəri konsola çıxarın.


// let product = 1
// for (i = 1; i < 11; i++) {
//     product = product * i
// }
// console.log(product);




// 9)
// Mətndə "." simvolunun ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// let a ="salam Ayxan muellim .";
// let b= a.indexOf(".");
// console.log(b);



// 5)
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.


// let n=prompt("3 reqemli eded daxil edin:");
// n=Number(n);
// let sum = 0;
// for (i = 100; i < 1000; i++) {
//    if (n % i === 0) {
//     sum += i;
// }
// }
// console.log(sum);



// 8)
// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// let a = prompt("Metn daxil edin:");
// let ters = "";
// for (i = a.length - 1; i >= 0; i--) {
//    ters +=a[i];
// }
// console.log(ters);

// HTML KOD
// <h1>GeForce 20</h1>
// <ul>
//   <li>GTX 1650</li>
//   <li>GTX 1660</li>
//   <li class="primary">GTX 1660 Ti</li>
//   <li>RTX 2070</li>
//   <li>RTX 2080</li>
//   <li class="primary">RTX 2080 Ti</li>
// </ul>



// 1)

// HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.

// let a = document.querySelector("li");
// console.log(a);


// 2)

// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - Başlığı silin;
// - Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .

// document.querySelector("h1").remove();
// let a = document.createElement("li");
// a.textContent = "TITAN RTX";
// document.querySelector("ul").append(a);

// 3)

// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - başlıq mətnini «GeForce 20 Series» -a;
// - fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.


// 4)

// HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın.

