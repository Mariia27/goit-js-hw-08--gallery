// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]; 

//
//console.log(listEl);
const listEl = document.querySelector('#ingredients');
const createList = ingredient => {
const elementOfList = document.createElement('li');
  elementOfList.textContent = `${ingredient}`;
    return elementOfList;
};
const createEl = ingredients.map(createList);

listEl.append(...createEl);


