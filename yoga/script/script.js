'use strict';

window.addEventListener('DOMContentLoaded', function(){


    // сокрытие всех табов кроме первого (со здоровым позвоночником)
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for (let i = a; i< tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i< tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //timer
    let actual;
    

    let deadline = '2021-07-03';

    function getTimeRemaining(endtime){
        if(Date.parse(endtime)>Date.parse(new Date())){
            actual = true;
            let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)% 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            return{
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
           };
        }
        else{
        actual = false;
        }
       
    }

    function setClock(id, endtime){
        let timet = document.getElementById(id),
            hours = timet.querySelector('.hours'),
            minutes = timet.querySelector('.minutes'),
            seconds = timet.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

    function addZero(num){
        if(num<9){
            return '0'+num;
        }
        else{
            return num;
        }
    }
        function updateClock(){
            let t = getTimeRemaining(endtime);
            if(actual == true){
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);
                if(t.total <=0){
                    clearInterval(timeInterval);
                }
            }
           else{
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
           }
        }
    }


    setClock('timer', deadline);

    //modal windiw
    //узнать больше
  
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        spine = document.getElementsByClassName('description-btn')[0],
        antistress = document.getElementsByClassName('description-btn')[1],
        recovery = document.getElementsByClassName('description-btn')[2],
        Yoga = document.getElementsByClassName('description-btn')[3];

        Modal(more, overlay, close);
        Modal(spine, overlay, close);
        Modal(antistress, overlay, close);
        Modal(recovery, overlay, close);
        Modal(Yoga, overlay, close);


    function Modal(more, overlay, close){
        more.addEventListener('click', function(){
            overlay.style.display ='block';
            this.classList.add('more-splain');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    
    }   
  
/*
    class options{
        constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width ;
            this.bg = bg ;
            this.fontSize = fontSize ;
            this.textAlign =textAlign;
        }
        writetext() {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let param = `height:${this.height}px;width:${this.width}px;background-color:${this.bg}px;font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            div.style.cssText = param;
        }   
    }
    
           
    const obj = new options(200, 300, "white", "14","center");
    obj.writetext();
          
*/
/*
 let message = {
        loading: 'Загрузка ...',   
        success:'Спасибо! Скоро мы свяжемся с вами!',
        failure:'Что-то пошло не так ...'
 };

 let    form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
        
        let formData = new FormData(form);
        let obj = {};
        formData.forEach(function(value, key){
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function(){
            if(request.readyState < 4){
                statusMessage.innerHTML = message.loading;

            } else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.success;
            }else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let i = 0; i< input.length; i++){
            input[i].value = '';
        }
    });

*/
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function(value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener('readystatechange', function() {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if(request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});


});