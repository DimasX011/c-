
// перебор массивов
    
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(item, i, mass) {
   console.log( i+ ":" + item + "(массив: " + mass + ')'); 
});

console.log(arr);



// перебирает индексы массива
let mass = [1,3,4,6,7];

for(let key in mass){
    console.log(key);
}
/*
// перебирает значения массива
let mass = [1,3,4,6,7];

for(let key of mass){
    console.log(key);
}
*/

//разделитель
/*
let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');
console.log(arr);

*/
//склеивание
/*
let arr = ["aawe", 'zzz', 'pp', 'гqa'],
        i = arr.join();

console.log(i);


//сортировка
/*
let arr = ["aawe", 'zzz', 'pp', 'rqa'],
i = arr.sort();

console.log(arr);
работает по принципу сравнения первого сивмвола 
в случае с :

let arr = [1, 15, 4],
i = arr.sort();

console.log(arr);

[ 1, 15, 4 ]

Для сравнения самих чисел:

let arr = [1, 15, 4],
i = arr.sort(CompareNum);

function CompareNum(a,b) {
    return a - b;
}

console.log(arr);

запись создания эксземпляра класса

let soldier = {
    health: 400,
    armor: 100
};


let john ={
    health: 100
};

john.__proto__ = soldier;

*/

//Конвертация в строку
//1
//console.log(typeof(string(null)));
//2
//console.log(typeof('q'+5));
//заместо 5 - любой вид данных
// наоборот конвертация в число
//console.log(typeof(Number("5")));
//2
//console.log(typeof(5+ +"5"));
//3
//console.log(typeof(parseInt('15px', 10)));
//let ans = +prompt("Hello?", '');

//0, '', null, undefind, NaN - false

/*
//конвертация в булиновый тип
//2
console.log(typeof(Boolean('5')));
//3
console.log(typeof('5'));
*/