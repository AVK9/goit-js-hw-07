/*
Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
<ul class="gallery"></ul>
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
*/
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryImage = document.querySelector('ul.gallery');
  galleryImage.style.display = 'flex';
  galleryImage.style.flexWrap = 'wrap';
  galleryImage.style.gap = '20px 20px';
  galleryImage.style.listStyle = 'none';

const galleryEl = images.map(el => `<li><div style="width: 250px; height: 200px; box-shadow: 10px 5px 5px #5b5b5b"><img src="${el.url}" alt="${el.alt}" style="width: 100%; height: 100%; object-fit: cover;"></div></li>`).join('');
galleryImage.insertAdjacentHTML('beforeend', galleryEl);