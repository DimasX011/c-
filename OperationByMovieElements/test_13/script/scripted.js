let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    hearth = document.querySelectorAll('.wrapper .hearth'),
    oneHearth = document.querySelector('.hearth'),
    div = document.createElement('div'),
    wrapper = document.querySelector('.wrapper');

    div.classList.add('black');
    document.body.appendChild(div);

console.log(box);
document.body.appendChild(div);
//wrapper.removeChild(hearth[1]);
document.body.removeChild(circle[1]);