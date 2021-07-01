'use strict';

let calculation = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    levelvalue = document.getElementsByClassName('level-value')[0],
    expensesvalue = document.getElementsByClassName('expenses-value')[0],
    optionalexpress = document.getElementsByClassName('optionalexpenses-value')[0],
    incomevalue = document.getElementsByClassName('income-value')[0],
    monthsaving = document.getElementsByClassName('monthsavings-value')[0],
    yearsaving = document.getElementsByClassName('yearsavings-value')[0],
    expensesitem_1 = document.getElementById('expenses_1'),
    expensesitem_2 = document.getElementById('expenses_2'),
    expensesitem_3 = document.getElementById('expenses_3'),
    expensesitem_4 = document.getElementById('expenses_4'),
    expenses_btn = document.getElementsByTagName('button')[0],
    optionalExpenses_btn = document.getElementsByTagName('button')[1],
    CountBtn = document.getElementsByTagName('button')[2],
    optionalexpenses_1 = document.querySelector('.optionalexpenses-item'),//необязательные расходы
    income = document.querySelector('.choose-income'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    checksavinks = document.getElementById('savings'),
    expensesitem = document.getElementsByClassName('expenses-item'),
    optionalexpensesitem = document.querySelectorAll('.optionalexpenses-item');

    
let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
    
};

expenses_btn.disabled = true;
optionalExpenses_btn.disabled = true;
CountBtn.disabled = true;


calculation.addEventListener('click', function(){
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    expenses_btn.disabled = false;
    optionalExpenses_btn.disabled = false;
    CountBtn.disabled = false;
});

expenses_btn.addEventListener('click', function(){
    let summary = 0;
    for (let i = 0; i < expensesitem.length; i++) {
        let a = expensesitem[i].value,
            b = expensesitem[++i].value;
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
            appData.expenses[a] = b;
            summary += +b;
        } else {
            console.log ("bad result");
            i--;
        }
    }
    expensesvalue.textContent = summary;
});

let box = document.getElementById('box');

optionalExpenses_btn.addEventListener('click', function(){
    for (let i = 0; i < optionalexpensesitem.length; i++) {
        let questionOptExpenses = optionalexpensesitem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalexpress.textContent += appData.optionalExpenses[i] + ' ';
    }
});

CountBtn.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - +expensesvalue.textContent) / 30).toFixed();
        daybudget.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelvalue.textContent = "Это минимальный уровень достаткa!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelvalue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelvalue.textContent = "Это высокий уровень достатка!";
        } else {
            levelvalue.textContent = "Ошибочка...!";
        }
    }
    else{
        daybudget.textContent = 'Произошла ошибка!';
    }
  
});

income.addEventListener('input', function(){
    let items = income.value;
    if(isNaN(items) || items !=''){
        appData.income = items.split(', ');
        incomevalue.textContent = appData.income;
    }
});

checksavinks.addEventListener('click', function(){
if(appData.savings == true){
    appData.savings = false;
} else{
    appData.savings = true;
}
});

sum.addEventListener('input', function(){
    if(appData.savings == true ){
        let sumvalue = +sum.value,
        perCent = percent.value;
        appData.monthIncome = sumvalue/100/12*perCent;
        appData.YearIncome = sumvalue/100*perCent;
        monthsaving.textContent = appData.monthIncome.toFixed(1);
        yearsaving.textContent = appData.YearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function(){
    if(appData.savings == true ){
        let sumvalue = +sum.value,
        perCent = percent.value;
        appData.monthIncome = sumvalue/100/12*perCent;
        appData.YearIncome = sumvalue/100*perCent;
        monthsaving.textContent = appData.monthIncome.toFixed(1);
        yearsaving.textContent = appData.YearIncome.toFixed(1);
    }
});





 

