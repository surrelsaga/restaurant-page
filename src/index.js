import './styles.css'
import { displayHome } from './home_page.js'; //named import
import displayMenu from './menu_page.js'; //default import
import displayAbout from './about_page.js'; //default import

// target the box to display pages' content
const contentBox = document.querySelector('#content');

// target buttons
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');


homeBtn.addEventListener('click', () => {
    // Wipes out all current content to display new content
    // possible but less performant: contentBox.innerHTML = '';
    contentBox.replaceChildren();

    displayHome(contentBox);
});

menuBtn.addEventListener('click', () => {
    // Wipes out all current content to display new content
    // possible but less performant: contentBox.innerHTML = '';
    contentBox.replaceChildren();

    displayMenu(contentBox);
});

aboutBtn.addEventListener('click', () => {
    // Wipes out all current content to display new content
    // possible but less performant: contentBox.innerHTML = '';
    contentBox.replaceChildren();

    displayAbout(contentBox);
});




