const contactTab = () => {
    let container = document.createElement('div');
    let text_div = document.createElement('div');
    text_div.textContent = 'Testing tab switching'
    container.appendChild(text_div);
    container.setAttribute('class','container');
    content.appendChild(container);
}

export {
    contactTab,
}