// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s1='hello world';
// let s2='lorem ipsum';
// let s3='javascript is cool';
// console.log(s1.length);
// console.log(s2.length);
// console.log(s3.length);

// - Перевести до великого регістру наступні стрінгові значення
// let s1='hello world';
// let s2='lorem ipsum';
// let s3='javascript is cool';
// console.log(s1.toUpperCase());
// console.log(s2.toUpperCase());
// console.log(s3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let s1='HELLO WORLD';
// let s2='LOREM IPSUM';
// let s3='JAVASCRIPT IS COOL';
// console.log(s1.toLowerCase());
// console.log(s2.toLowerCase());
// console.log(s3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.replaceAll(' ',''))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let str = 'Ревуть воли як ясла повні';
// function adapter(objStr){
//     return objStr.split(' ')
// }
// console.log(adapter(str));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let numbers=[10,8,-7,55,987,-1011,0,1050,0];
// let string=numbers.map(String)
// console.log(string);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// function sortNums(nums,direction){
//     if(direction==='ascending'){
//         return nums.slice().sort((a,b)=>a-b)
//     }else if (direction==='descending'){
//         return nums.slice().sort((a,b)=>b-a)
//     }
// }
// let nums=[11,21,3];
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort= coursesAndDurationArray.sort((a,b)=>{
//     return a.monthDuration-b.monthDuration;
// })
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let reduce= coursesAndDurationArray.reduce((a,user)=>{
//     if (user.monthDuration>5){
//         a[0].push(user)
//     }
//     return a
// },[[]])
// console.log(reduce);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let map =coursesAndDurationArray.map((user,index)=>({
//     name:user.title,month:user.monthDuration,id:index
// }))
// console.log(map);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let deck = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },

    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },

    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },

    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз
// let filter=deck.filter((card)=>card.value==='ace'&&card.cardSuit==='spade')
// console.log(filter);
// - всі шістки
// let filter=deck.filter((card)=>card.value==='6')
// console.log(filter);
// - всі червоні карти
// let filter=deck.filter((card)=>card.color==='red')
// console.log(filter);
// - всі буби
// let filter=deck.filter((card)=>card.cardSuit==='diamond')
// console.log(filter);
// // - всі трефи від 9 та більше
// let filter=deck.filter((card)=>card.cardSuit==='clubs')
// let splice=filter.splice(3)
// console.log(splice);
// // {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// let reduce=deck.reduce((a,card)=>{
//     if (card.cardSuit==='spade'){
//         a[0].push(card)
//     }else if (card.cardSuit==='diamond'){
//         a[1].push(card)
//     }else if (card.cardSuit==='heart'){
//         a[2].push(card)
//     }else {
//         a[3].push(card)
//     }
//     return a
// },[[],[],[],[]])
// console.log(reduce);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
// let filter=coursesArray.filter((cours)=>cours.modules.includes('sass'))
// console.log(filter);
// // --написати пошук всіх об'єктів, в який в modules є docker
// let filter=coursesArray.filter((cours)=>cours.modules.includes('docker'))
// console.log(filter);