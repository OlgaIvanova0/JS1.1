"use strict";

//перевод градусов по Цельсию в градусы по Фаренгейту 
const temperature = + prompt("Введите температуру в градусах по Цельсию");
let a = ( 9 / 5 ) * temperature + 32;
let b = Math.round(a);
alert(b + " градусов по Фаренгейту");

//выводит надпись Василий в консоль
let admin = "Василий";
let name1 = admin;
console.log(name1);

//выполняет расчеты с числами и строками
console.log(10 + 10 + "10"); //результат: строка20строка10
console.log(10 + "10" + 10); //результат: строка10строка10строка10
console.log(10 + 10 + + "10"); //результат: число30
console.log(10 / - ""); //результат: 10/-0=бесконечность
console.log(10 / + "2.5"); //результат: число4
console.log(10 / + "2,5"); //результат: не числовое значение

//проверяет счастливый ли ваш билет
const number = + prompt('Введите 6 цифр номера билета');
let c = parseInt(number / 100000);
let d = parseInt(number / 10000 - c * 10);
let i = parseInt(number / 1000 - c * 100 - d * 10);
let first = c + d + i;
let f = parseInt(number / 100 - c * 1000 - d * 100 - i * 10);
let g = parseInt(number / 10 - c * 10000 - d * 1000 - i * 100 - f * 10);
let h = parseInt(number - c * 100000 - d * 10000 - i * 1000 - f * 100 - g * 10);
let second = f + g + h;
if (first === second){
    alert("Ура! Ваш билет - счастливый!");
} else {
    alert("Купите другой билет");
}

