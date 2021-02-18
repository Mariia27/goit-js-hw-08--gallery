// Напиши скрипт создания и очистки коллекции элементов. 
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
//после чего рендерится коллекция.При нажатии на кнопку Очистить, 
//коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const divEl = document.querySelector('#controls');
const inputEl = divEl.firstElementChild;
//const inputEl = document.querySelector('');
const createElBtn = document.querySelector('[data-action="render"]');
const destroyElBtn = document.querySelector('[data-action="destroy"]');
const divCreateBoxEl = document.querySelector('#boxes');


const El = divCreateBoxEl.insertAdjacentHTML('afterbegin', '<div id="square"></div>');
const createBoxes = (amount) => {
    amount.currentTarget.value
 
}
inputEl.addEventListener('input', createBoxes);
//  const createsquare = divCreateBoxEl.innerHTML = '<div id="square"></div>';
//return divCreateBoxEl.insertAdjacentHTML('afterbegin', '<div id="square"></div>')
//divCreateBoxEl.insertAdjacentHTML('afterbegin', createBoxes)

//#square {
    // width: 120px;
    // height: 120px;
    // background: #f447ff;}
    