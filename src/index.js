import './styles.css';
import {welcomeTab} from './welcome.js';
import {menuTab} from './menu.js';
import {contactTab} from './contact.js';
import {renderPage} from './pageRender.js';

renderPage();
welcomeTab();
//Switching between tabs
const switchTab = (btn) => {
    //delete content
    let container = document.querySelectorAll('.container');
    container[0].remove();
    if (btn.textContent === 'Welcome') {
        welcomeTab()
    } else if (btn.textContent === 'Menu') {
        menuTab()
    } else if (btn.textContent === 'Contact') {
        contactTab()
    }
}
let btns = document.querySelectorAll('.navigationButton');
btns.forEach(btn => btn.addEventListener('click', function() {switchTab(btn)}));

