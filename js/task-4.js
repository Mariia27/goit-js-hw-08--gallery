// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
// счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanCounter = document.querySelector('#value');
let counterValue = 0 ; //будет хранится текущее значение счетчика.

const decrementFn = () => { 
    counterValue -=  1;
    return spanCounter.textContent = counterValue;
};

const incrementFn = () => { 
    counterValue += 1;
     return spanCounter.textContent = counterValue;
};
 decrementBtn.addEventListener('click', decrementFn)
incrementBtn.addEventListener('click', incrementFn)
