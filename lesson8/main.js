// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.surname = surname;
//     this.phone = phone;
// }
//
// let users = [
//     new User(1, 'ostap', 'f21', 'ostap@gmail.com', 14231414312),
//     new User(2, 'o', 'f22', 'o@gmail.com', 14231414312),
//     new User(13, 'os', 'f23', 'os@gmail.com', 14231414312),
//     new User(4, 'ost', 'f24', 'ost@gmail.com', 14231414312),
//     new User(5, 'osta', 'f25', 'osta@gmail.com', 14231414312),
//     new User(6, 'p', 'f26', 'p@gmail.com', 14231414312),
//     new User(17, 'ap', 'f27', 'ap@gmail.com', 14231414312),
//     new User(8, 'tap', 'f28', 'tap@gmail.com', 14231414312),
//     new User(29, 'stap', 'f29', 'stap@gmail.com', 14231414312),
//     new User(10, 'sta', 'f30', 'sta@gmail.com', 14231414312),
// ];
// console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let usr=users.filter((a)=>a.id%2===0)
// console.log(usr);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort=users.sort((a, b)=>a.id-b.id);
// console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.surname = surname;
//         this.phone = phone;
//         this.order = order
//     }
// }
//
// let clients = [
//     new Client(1, 'ostap', 'f21', 'ostap@gmail.com', 14231414312, ['adsf', 'afd']),
//     new Client(2, 'o', 'f22', 'o@gmail.com', 14231414312, ['adsf']),
//     new Client(13, 'os', 'f23', 'os@gmail.com', 14231414312, ['adsf', 'afd']),
//     new Client(4, 'ost', 'f24', 'ost@gmail.com', 14231414312, ['adsf']),
//     new Client(5, 'osta', 'f25', 'osta@gmail.com', 14231414312, ['adsf']),
//     new Client(6, 'p', 'f26', 'p@gmail.com', 14231414312, ['adsf']),
//     new Client(17, 'ap', 'f27', 'ap@gmail.com', 14231414312, ['adsf', 'afd']),
//     new Client(8, 'tap', 'f28', 'tap@gmail.com', 14231414312, ['adsf']),
//     new Client(29, 'stap', 'f29', 'stap@gmail.com', 14231414312, ['adsf', 'afd']),
//     new Client(10, 'sta', 'f30', 'sta@gmail.com', 14231414312, ['adsf']),
// ];
// console.log(clients)
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = clients.sort((a, b) =>{
//     return a.order.length-b.order.length
// })
// console.log(sort)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, age, maxSpeed, volumeEngine) {
//     this.model = model;
//     this.producer = producer;
//     this.age = age;
//     this.maxSpeed = maxSpeed;
//     this.volumeEngine = volumeEngine;
//
//    this.drive= function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//
//     this.info= function () {
//         document.write(`Модель:${model}<br>Виробник:${producer}<br>Рік випуску:${age}<br>Максимальна швидкість:${maxSpeed}<br>Об'єм двигуна:${volumeEngine}`)
//     }
//
//     this.increaseMaxSpeed= function (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//
//     this.changeYear= function  (newValue){
//         this.age=newValue
//     }
//
//     this.addDriver=function (driver){
//        this.driver=driver
//     }
// }
// let car1= new Car('adfsas','dfas',123,200,5.6);
// car1.info()
// car1.increaseMaxSpeed(10)
// car1.drive()
// car1.changeYear(21)
// car1.addDriver({name: 'John', age: 30})
// console.log(car1)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//    constructor(model,producer,age,maxSpeed,volumeEngine) {
//        this.model = model;
//        this.producer = producer;
//        this.age = age;
//        this.maxSpeed = maxSpeed;
//        this.volumeEngine = volumeEngine;
//
//    }
//    drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info () {
//         document.write(`Модель:${this.model}<br>Виробник:${this.producer}<br>Рік випуску:${this.age}<br>Максимальна швидкість:${this.maxSpeed}<br>Об'єм двигуна:${this.volumeEngine}`)
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//
//     changeYear(newValue){
//         this.age=newValue
//     }
//
//   addDriver(driver){
//        this.driver=driver
//     }
// }
// let car1= new Car('adfsas','dfas',123,200,5.6);
// car1.info()
// car1.increaseMaxSpeed(10)
// car1.drive()
// car1.changeYear(21)
// car1.addDriver({name: 'John', age: 30})
// console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.


// class Cinderella {
//     constructor(name,age,shoeSize) {
//         this.name=name;
//         this.age=age;
//         this.shoeSize=shoeSize
//     }
// }
// let girls=[
//     new Cinderella('nastya',20,37),
//     new Cinderella('lyuba',22,36.5),
//     new Cinderella('ilona',21,39),
//     new Cinderella('ira',19,34),
//     new Cinderella('tanya',23,40),
//     new Cinderella('alina',25,38.5),
//     new Cinderella('khrystia',18,39),
//     new Cinderella('olya',19,36),
//     new Cinderella('olesya',16,37),
//     new Cinderella('maria',67,48),
// ];
//
// class prince{
//     constructor(name,age,foundShoeSize) {
//         this.name=name;
//         this.age=age;
//         this.foundShoeSize=foundShoeSize
//     }
// }
// let princeOstap = new prince('Ostap', 22, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let found=null
// for (let i = 0; i < girls.length; i++) {
//      if (girls[i].shoeSize===princeOstap.foundShoeSize){
//          found=girls[i]
//      }
// }
// console.log(found)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let find=girls.find(girl=>girl.shoeSize===princeOstap.foundShoeSize)
// console.log(find)