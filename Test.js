value = false;

value_1 = true;
value_2 = null;

result = arr + value - value_2 + value_1;
console.log(result);

var arr = [];
let x = 1;
let y = 2;

result = 2 && 1 && null && 0 && undefined;
console.log( null || 2 && 3 || 4 );

a = [1, 2, 3]; 

b = [1, 2, 3];

if(a==b){
    console.log(верно);
}
else{
    console.log(неверно);
}

console.log(0 || "" || 2 || undefined || true || falsе);
 let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = getElementsByClassName('circle'),
    hearth = document.querySelectorAll('.wrapper .hearth'),
    oneHearth = document.querySelector('.hearth');

    box.style.backgroundColor = 'blue';
    btn[1].style.borderRadius = '100%';

    //добавление класса элементу
    box.classList.add('black');

    //вставка элемента в конец
    document.body.appendChild(div);

    //вставка элемента после
    document.body.insertBefore(div, circle[0]);

    //удаление элемента
    document.body.removeChild(circle[1]);

    wrapper.removeChild(heart[1]);

    //замена элемента
    document.body.replaceChild(btn[1], circle[1]);

    //добавление текста в блок
    //div.innerHTML = 'This is my web-site';

    //в форме заголовка
    //div.innerHTML = <h1>This is my web-site</h1>;

    //тоже добавление текста
    div.textContent = 'Helo World';
