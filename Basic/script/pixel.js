let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.scrollWidth,
    height = box.scrollHeight;


    //получение геометрических параметров элементов на сайте
console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

    //раскрытие полностью элемента для чтения
btn.addEventListener('click', function(){
    box.style.height = box.scrollHeight + 'px';
});

//перемотка страницы на 200 пикселей
scrollBy(0, 200);

scrollTo(0, 200);