import './styles.css';
import Icon from './images/icon.png';
import {welcomeTab} from './welcome.js';
import {menuTab} from './menu.js';
import {contactTab} from './contact.js';

//Creating the header, top navigation, and footer
let header = document.querySelector('#header');
let zaad = document.createElement('h1');
zaad.textContent = 'Zaad';
header.appendChild(zaad);
let buttons = ['Welcome','Menu','Contact'];
let tabs = document.createElement('div');
tabs.setAttribute('id','tabs');
for (let button of buttons) {
    let btn = document.createElement('button');
    btn.textContent = button;
    btn.setAttribute('class', 'navigationButton');
    tabs.appendChild(btn);
}
header.appendChild(tabs);


//Adding the restaurant icon
let content = document.querySelector('#content');
let holder = document.createElement('div');
const myIcon = new Image();
myIcon.src = Icon;
myIcon.style.width = '229px';
holder.setAttribute('id','left');
holder.appendChild(myIcon)
content.appendChild(holder);

//Footer
let footer = document.querySelector('#footer');
let address = document.createElement('div')
address.textContent = `963 Amsterdam Ave, New York, NY 10025`;
footer.appendChild(address);
let number = document.createElement('div');
number.textContent = `212-999-9999`;
footer.appendChild(number);
// footer.textContent = `963 Amsterdam Ave, New York, NY 10025`+ '\u2003'+ '\u2003'+ '\u2003'+ '\u2003'+ '\u2003'+ `212-999-9999`
// let address = document.createElement('div')
// address.setAttribute('class', 'address')
// address.textContent = `212-999-9999`
// footer.appendChild(address);

welcomeTab();
//Switching between tabs
const switchTab = (btn) => {
    //delete content
    let container = document.querySelectorAll('.container');
    container[0].remove();
    if (btn.textContent === 'Welcome') {
        welcomeTab()
    }
    else if (btn.textContent === 'Menu') {
        menuTab()
    }
    else if (btn.textContent === 'Contact') {
        contactTab()
    }
}
let btns = document.querySelectorAll('.navigationButton');
btns.forEach(btn => btn.addEventListener('click', function() {switchTab(btn)}));

