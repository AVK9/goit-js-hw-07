/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const textInput = document.querySelector('#validation-input');

    textInput.addEventListener('focusout', evt =>{
        let length = textInput.value.length
        if (length === 6) {
            textInput.classList.add('valid');
            textInput.classList.remove('invalid');
        } else {
            textInput.classList.add('invalid');
            textInput.classList.remove('valid');
        }
    })


