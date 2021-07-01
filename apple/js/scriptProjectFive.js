'use strict';

let menu = document.getElementsByClassName('menu-item');
let menui = document.querySelector('.menu-item');
let menuParent = document.querySelector('.menu');
let menushka = document.createElement('menui');
let menuAll = document.querySelectorAll('.menu .menu-item');
let text = document.getElementById('title');
let adv = document.getElementsByClassName('adv')[0];
let prompte = document.querySelector("#prompt");

menushka.style.all = menui.style.all;

menushka.innerHTML = "Пятый пункт";
text.innerHTML = "Мы продаём только оригинальную технику Apple";
adv.remove();

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

menuParent.insertBefore(menu[2],menu[1]);

menushka.classList.add('menu-item');
menuParent.appendChild(menushka);

let yourOpinion = prompt("Ваше отношение к технике Apple?", "");  
prompte.textContent = yourOpinion;