 'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();


// перебор массивов
    /*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(item, i, mass) {
   console.log( i+ ":" + item + "(массив: " + mass + ')'); 
});

console.log(arr);
*/

/*
// перебирает индексы массива
let mass = [1,3,4,6,7];

for(let key in mass){
    console.log(key);
}

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
*/

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


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
                console.log ("done");
        
                appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i--;
            }
        
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}