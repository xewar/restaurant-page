import Icon from './images/icon.png';
const renderPage = () => {
    //Header: Name + top navigation buttons
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

    //Restaurant icon
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
}

export {renderPage}