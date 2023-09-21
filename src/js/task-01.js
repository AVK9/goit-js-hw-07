/*
HTML містить список категорій ul#categories.
Напиши скрипт, який:
Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
В результаті, в консолі будуть виведені наступні повідомлення.
Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5
*/
// variant 1
// const navEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${navEl.length}`);
// navEl.forEach(function (el) {
//     console.dir(`Category: ${el.firstElementChild.textContent}`);
//     console.dir(`Elements: ${el.lastElementChild.children.length}`);
// });

// variant 2 
const navEl = document.querySelector('#categories');
console.dir(`Number of categories: ${navEl.children.length}`);
[...navEl.children].forEach(el => {
    console.dir(`Category: ${el.firstElementChild.textContent}`);
    console.dir(`Elements: ${el.lastElementChild.children.length}`)
});