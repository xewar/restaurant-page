import './styles.css';
import Icon from './icon.png';

//Creating the header and tabs
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


let content = document.querySelector('#content');
let holder = document.createElement('div');
const myIcon = new Image();
myIcon.src = Icon;
myIcon.style.width = '229px';
holder.appendChild(myIcon)
content.appendChild(holder);
