/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputControls: document.querySelector("#controls > input[type=number]"),
  btnCreate: document.querySelector("#controls > button:nth-child(2)"),
  btnDestroy: document.querySelector("#controls > button:nth-child(3)"),
  boxesDiv: document.querySelector("#boxes")
};

refs.btnCreate.addEventListener('click', createBoxes)
function createBoxes() {
  let amount = [];
  for (let i = 0; i < refs.inputControls.value; i += 1) {
    amount.push(`<div style="width: ${20 +(i * 10)}px; height:${20 +(i * 10)}px; background-color: ${getRandomHexColor()};"></div>`);
  }
refs.boxesDiv.insertAdjacentHTML('beforeend', amount.join(''));
}

refs.btnDestroy.addEventListener('click', destroyBoxes)
function destroyBoxes() {
  const element = document.getElementById("boxes");
  element.parentNode.removeChild(element);
//   refs.inputControls.reset(); // Не працює чому дає помилку?
setTimeout(function(){ document.location.reload();},2000);
}
