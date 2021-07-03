let name = "Ivan",
    age = 30,
    mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Уго почтовый адрес: ${mail}`);

//let и const

// видны лишь в блоке кода, ограниченных фигурными скобками
//При использовании let или const в цикле для каждой итерации создаётся своё переменная

function makeArray(){
    var items = [];
    for(var i = 0; i< 10;i++){
        var item = function(){
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();//10
arr[3]();//10
arr[7]();//10

function makeArray(){
    var items = [];
    for(let i = 0; i< 10;i++){
        var item = function(){
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();//1
arr[3]();//3
arr[7]();//7

//стрелочные функции
// у стрелочной функции нет своего контекста, она его берёт всегда у родителя, она всегда анонимна
let fun = () => {
    console.log(this);
};

fun();

let obj = {
    number: 5,
    sayNumber: function(){
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();
//получаем объект

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let show = () => {
        console.log(this);
    };
    show();
});

//E56 параметры по умолчанию

function calcOrDouble(number, basis){
    basis = basis || 2;//ES5 формат
    console.log(number * basis);
}

calcOrDouble(3,5);//15
calcOrDouble(6);//12


function calcOrDouble(number, basis = 2){
    //ES 6 формат
    console.log(number * basis);
}

//классы

class Rectangle{
    constructor(height, width = 20){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea);

//spread оператор - оператор разворота

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
//разворот массива данных
console.log(internet);

function log(a, b, c) {
    console,log(a);
    console,log(b);
    console,log(c);
}
let numbers = [2, 5, 7];

log(...numbers);