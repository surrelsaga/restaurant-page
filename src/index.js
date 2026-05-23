import './styles.css'
import { displayHome } from './home_page.js'; //named import
import displayMenu from './menu_page.js'; //default import

const contentBox = document.querySelector('#content');

// target buttons
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');

homeBtn.addEventListener('click', () => {
    displayHome(contentBox);
});

menuBtn.addEventListener('click', () => {
    displayMenu(contentBox);
});


