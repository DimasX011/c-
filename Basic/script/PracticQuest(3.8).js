'use strict';

class User{



constructor(value){
    user = document.getElementById('age');
    this.value = value;
}
 showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }

}

let user = document.querySelector('.age');
// надо было использовать apply а не конструктор
let max = new User(age);

console.log(max);
max.showUser('Maxim', 'Titanov');
// Второе задание

// let age = document.getElementById('age');
 
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
 
// showUser.apply(age, ["Горький","Максим"]);