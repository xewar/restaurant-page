//welcome tab module to be imported
import chickenR from './images/BW/chicken.jpg';

function welcomeTab() {
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let box = document.createElement('box')

    //adding an image
    const chicken = new Image();
    chicken.src = chickenR;
    let image_div = document.createElement('div');
    image_div.appendChild(chicken);
    image_div.setAttribute('class','food_pic')

    //adding text
    let text_div = document.createElement('div');
    text_div.setAttribute('class','home_text')
    text_div.textContent = `With some of the most delicious combinations of ingredients, Zaad has something for everyone to enjoy.
    Loved by locals and traveling foodies alike, now is the perfect time for you to join us!`
    container.appendChild(image_div);
    container.appendChild(text_div);
    content.appendChild(container)
}

export {
    welcomeTab,
}