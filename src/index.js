import './styles.css';
import Icon from './images/icon.png';
import {welcomeTab} from './welcome.js'

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
// let address = document.createElement('div')
// address.setAttribute('class', 'address')
// address.textContent = `963 Amsterdam Ave, New York, NY 10025`
// header.appendChild(address);

//adding the restaurant icon
let content = document.querySelector('#content');
let holder = document.createElement('div');
const myIcon = new Image();
myIcon.src = Icon;
myIcon.style.width = '229px';
holder.setAttribute('id','left');
holder.appendChild(myIcon)
content.appendChild(holder);

//adding the footer
let footer = document.querySelector('#footer');
footer.textContent = `963 Amsterdam Ave, New York, NY 10025`

welcomeTab();