//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
//на правильное количество символов.

 
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.




const listEl = document.querySelector('#validation-input');

function checkInputFn(evt) {
    // if (evt.type === 'blur') {
        if (listEl.value.length !== Number(listEl.getAttribute('data-length'))) {
            listEl.classList.add('invalid')
        } else {
            listEl.classList.remove('invalid')
            listEl.classList.add('valid')
        }
    // }
}
// const checkEvtTupeFn = (evt) => {
//     if (evt.type === 'blur') {
//          checkInputFn
//     }
    
// }
listEl.addEventListener('blur', checkInputFn)