//touchstart - событие прикосновения к экрану
//touchmove - прискосновение и перемещение
// touchend - прикосновение и отпустил касание
//touchenter - движение с заходом на объект
//touchleave - зашел и покинул элемент
//touchcancel - браузер свернут палец не зарегистрирован

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');
    box.addEventListener('touchstart', function(e){
        e.preventDefault();
        console.log("Reg box: touchstart");
        console.log(e.touches);// все пальцы в событии
        console.log(e.touches[0].target);
        console,log(e.changedTouches);//аналог - список пальцов взаимодействия
        console.log(e.targetTouches);//только те пальцы, которые взаимодействуют с элементом
    });
    box.addEventListener('touchmove', function(e){
        e.preventDefault();
        console.log("Reg box: " + e.touches[0].pageX);
    });
    box.addEventListener('touchend', function(e){
        e.preventDefault();
        console.log("Reg box: touchstart");
    });
    //регулярные выражения состоят из 2-ух частей: паттерн и флаги
    //1-й вариант
    new RegExp('pattern', 'flags');
    //2-й вариант
    /pattern/

    let ans = prompt('Введите ваше имя');

    let reg = /n/i;

    console.log(ans.search(reg));
    //search не работает с g, т.к он search ищет только первое вхождение по регистру

    console.log(ans.match(reg));
    //match - ищет по совпадению, можно использовать с g


    //i - флаг регистра, говорит нам что мы хотим найти что то в зависимости от регистра
    //g - флаг глобальности, не только первое но и остальные вхождения
    //m - многострочность,
// . - ожидание замены символов, введенный пароль заменится звёхдочками в визуальном отображении
    let pass = prompt('Введите пароль');
    console.log(pass.replace(/./g,"*"));
    //замена - на :
    alert('12-34-56'.replace(/-/,':'));

    //тест на наличие строки

    //поиск цифры
    // \d

    let ansу = /\d/g;


    //поиск буквы
    // \w
    let str = 'My name is R2D2';
    console.log(str.match(/\w\d\w\d/i));

    //поиск пробела
    // \s

    console.log(reg.test(ansу));//поиск в ans символа reg
});

