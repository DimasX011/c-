let timerId = setTimeout(sayHello, 3000 );
clearTimeout(timerId);


let timerIde = setInterval(sayHello, 3000 );//повтор каждые 3 секунды

function sayHello(){
    alert('Hello World');
}
 let timerIdo = setTimeout(function log(){
     console.log("Hello");
     setTimeout(log, 2000);
 });

 let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');


//анимация
function myAnimation(){
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.let = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

//делегирование
// если элемент подходит под условие выполнения, то функция будет передана
let btnBlock = document.querySelector('.btn-blick'),
    btns = document.getElementsByClassName('button');

    btnBlock.addEventListener('click',function(event){
        if(event.target && event.target.tagName == 'BUTTON'){
            console.log("Hello");
        }
    });


    // кликанье на первый элемент
    let btnBlock2 = document.querySelector('.btn-blick'),
    btns2 = document.getElementsByClassName('button');

    btnBlock2.addEventListener('click',function(event){
        if(event.target && event.target.classList.contains('first')){
            console.log("Hello");
        }
    });

//поиск конкретной кнопки
    let btnBlock3 = document.querySelector('.btn-blick'),
    btns3 = document.getElementsByClassName('button');

    btnBlock3.addEventListener('click',function(event){
        if(event.target && event.target.matches('buton.first')){
            console.log("Hello");
        }
    });