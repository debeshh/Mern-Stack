
let myDiv = document.querySelector('#mydiv');
let newElement = document.createElement('span');
newElement.textContent = "This is Thanos";
myDiv.insertAdjacentElement('beforeend',newElement);


let paraElement = document.getElementById('fpara');
paraElement.style.backgroundColor = 'lightblue'


let fpara = document.querySelector('#mydiv');
fpara.classList.add('firstClass');
fpara.classList.toggle('SecondClass');
fpara.classList.contains('first');