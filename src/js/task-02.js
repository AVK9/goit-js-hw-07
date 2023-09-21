/*
HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//variant 1
// const container = document.querySelector('#ingredients');
// const markup = ingredients.map(el => `<li class="item"> 
// ${el}
// </li>`).join(' ');
// container.insertAdjacentHTML('beforeend', markup);
////////////////////////////
//variant 2
const container = document.querySelector('#ingredients');
const liIngredients = ingredients.map(el => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = el;
  return li;
});
//  console.log(liIngredients);
container.append(...liIngredients);
// container.innerHTML = '';

