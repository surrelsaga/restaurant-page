import './styles.css'
import { displayHome } from './home_page.js';

const contentBox = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');

homeBtn.addEventListener('click', () => {
    displayHome(contentBox);
});
