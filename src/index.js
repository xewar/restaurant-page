import './styles.css';
import Icon from './images/icon.png';
import chickenR from './images/BW/chicken.jpg';

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
holder.setAttribute('id','left');
holder.appendChild(myIcon)
content.appendChild(holder);

//welcome tab module to be imported
let container = document.createElement('div');
const chicken = new Image();
chicken.src = chickenR;
// chicken.style.width = '100px';
// chicken.style.height = 'auto';
container.appendChild(chicken);
container.setAttribute('id','container');
// container.textContent = `With some of the most delicious combinations of ingredients, Zaad has something for everyone to enjoy.
// Loved by locals and traveling foodies alike, now is the perfect time for you to join us!`
content.appendChild(container);