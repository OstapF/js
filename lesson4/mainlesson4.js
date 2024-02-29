// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle(a,b){
//     return a * b;
// }
// document.write(`S:${rectangle(14,6)}`)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(r){
//     return  Math.PI * r^2;
// }
// document.write(`S:${circle(6)}`)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(h,r){
//     return  2*Math.PI * r * h+2*Math.PI*r^2;
// }
// document.write(`S:${cylinder(6,3)}`)
// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function printerArray(array){
//     for (let item of array) {
//       console.log(item)
//     }
// }
// printerArray(users)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(argument){
//     document.write(`<p>${argument}<p/>`)
//
// }
// p('afsdasdf')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function li(argument){
//     document.write(`<ul>
// <li>${argument}</li>
// <li>${argument}</li>
// <li>${argument}</li>
// <ul/>`)
// }
// li('asdas')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function li(argument,number){
// let ul=`<ul>`
//     for (let i = 0; i < number; i++) {
//         ul+=`<li>${argument}</li>`
//
//     }
//     ul+=`</ul>`
//     return ul
// }
// document.write(li('asdas',6))
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mass=[12,'adfsdasf',234,true,false]
// function printArray(array){
//     for (let arrayElement of array) {
//         if (typeof arrayElement=== "number"){
//             document.write(`Число:${arrayElement}<br>`)
//         }else if (typeof arrayElement=== "string"){
//             document.write(`Стрінга:${arrayElement}<br>`)
//         }
//         else if (typeof arrayElement=== "boolean"){
//             document.write(`Булеве:${arrayElement}<br>`)
//         }
//     }
// }
// printArray(mass)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, id:1},
//     {name: 'petya', age: 30, id:2},
//     {name: 'kolya', age: 29, id:3},
//     {name: 'olya', age: 28, id:4},
//     {name: 'max', age: 30, id:5},
//     {name: 'anya', age: 31, id:6},
//     {name: 'oleg', age: 28, id:7},
//     {name: 'andrey', age: 29, id:8},
//     {name: 'masha', age: 30, id:9},
//     {name: 'olya', age: 31, id:10},
//     {name: 'max', age: 31, id:11},
// ];
// let list=``;
// function printArray(array){
//     for (let i = 0; i < array.length; i++) {
//         list+=`<div>
// Name : ${array[i].name} Age : ${array[i].age} ID : ${array[i].id}
// </div>`
//     }
//     return list
// }
// document.write(printArray(users))
// - створити функцію яка повертає найменьше число з масиву
// let numbers=[1,1342,1235532,-123,123,-12456,13]
// function calculate(arr){
//     let min=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return min
// }
// document.write(calculate(numbers))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let numbers=[1,2,3,4,5,6,7]
// let x=0
// function sum(arr){
//     for (let i = 0; i < arr.length; i++) {
//         x+= arr[i];
//     }
//     return x
// }
// document.write(sum(numbers))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     let x = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = x
//     return arr
// }
// console.log(swap([11,22,33,44], 0, 1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     if (exchangeCurrency===currencyValues[0].currency){
//         console.log(sumUAH/currencyValues[0].value)
//     }else if(exchangeCurrency===currencyValues[1].currency){
//         console.log(sumUAH/currencyValues[1].value)
//     }
// }
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')