import 'normalize.css';
import '../../scss/pages/blog.scss';

import menuMacker from '../../components/menu/menu';
let menu = menuMacker(['Главная','Обо мне','Блог'], 'menu');
document.body.appendChild(menu);

console.log('in blog.js');