import falafelPic from './images/falafel.jpg'
import drinks from './images/laziza.jpg';
import soup from './images/lentil_soup.jpg';
import baklava from './images/baklava.jpg';

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
    
    
     //adding images
     let image_container = document.createElement('div');
     image_container.setAttribute('class','image_container')
     let addPicture = (importedImg) => {
        const image = new Image();
        image.src = importedImg;
        let image_div = document.createElement('div');
        image_div.appendChild(image);
        image_div.setAttribute('class','small_food_pic');
        image_container.appendChild(image_div);
     }
     let images = [falafelPic,soup, baklava];
     for (let image of images){
         addPicture(image)
     }
     container.appendChild(image_container);
     content.appendChild(container);
}

export {
    contactTab,
}