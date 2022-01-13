import falafelPic from './images/falafel.jpg'

const contactTab = () => {
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let text_div = document.createElement('div');
    //could not figure out how to get the line break to work below
    text_div.innerHTML = `Order via Seamless or Doordash,
     or by calling us at 212-999-9999`;
    text_div.setAttribute('class','home_text');
    container.appendChild(text_div);

    let cateringText = document.createElement('div');
    cateringText.textContent = `We also cater events big and small. Get in touch with the 
    details about your event and we'll do our best to accommodate your desired date 
    and any requests you may have to make your celebration memorable.`
    cateringText.setAttribute('class','catering');
    container.appendChild(cateringText);
    

     //adding an image
     const falafel = new Image();
     falafel.src = falafelPic;
     let image_div = document.createElement('div');
     image_div.appendChild(falafel);
     image_div.setAttribute('class','food_pic');
     content.appendChild(container);
}

export {
    contactTab,
}