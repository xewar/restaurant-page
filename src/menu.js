const menuTab = () => {
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let menu = document.createElement('div');
    menu.setAttribute('id','menu')
    
    let categories = ['Sandwiches', 'Salads', 'Soup','Drinks','Desserts']
    for (let category of categories) {
        let newCategory = document.createElement('div');
        newCategory.setAttribute('class','menuCategory');
        newCategory.setAttribute('id',category);
        newCategory.textContent = category;
        menu.appendChild(newCategory);
    }
    container.appendChild(menu);
    content.appendChild(container);

    let sandwichList = [['Falafel', 5.75],['Chicken Shawarma',8.50],['Beef Shawarma',8.50],
    ['Kofta',8.50],['Chicken Kebab', 8.50],['Burger', 7.50],['Chicken Burger', 7.50],
    ['Veggie Burger', 6.50],['Ful (Fava Beans)',5.75]];

    let saladList = [['Greek Salad', 7.99],['Hummus Salad',7.00],['Yogurt Salad',5.99],
    ['Coleslaw',6.00],['Zaad Salad', 6.99],['Baba Ghannouj', 7.00],['Chicken Salad', 9.99]];
    let drinksList = [['Soda',1.00],['Mint Tea',2.00]] 
    let dessertList = [['Baklava',2.00],['Rice Pudding'],3.00];
    let soup = ['Soup of the Day',5.75];


    const menuItemFactory = (itemName,price) => {
        let newItem = document.createElement('div');
        newItem.setAttribute('class','menuItem');
        let nameDiv = document.createElement('div');
        nameDiv.textContent = itemName;
        let priceDiv = document.createElement('div');
        priceDiv.textContent=price;
        newItem.appendChild(nameDiv);
        newItem.appendChild(priceDiv)
        return newItem
    }
    //how can i reduce this so it's not so repetitive?
    let sandwichContainer = document.querySelector('#Sandwiches');
    for (let item of sandwichList) {
        let newItem = menuItemFactory(item[0],item[1]);
        sandwichContainer.appendChild(newItem)
    }
    let saladContainer = document.querySelector('#Salads');
    for (let salad of saladList) {
        let newSalad = menuItemFactory(salad[0],salad[1]);
        saladContainer.appendChild(newSalad)
    }
    let soupContainer =  document.querySelector('#Soup');
    soupContainer.appendChild(menuItemFactory(soup[0],soup[1]));
    let drinksContainer = document.querySelector('#Drinks');
    for (let drink of drinksList) {
        let newDrink = menuItemFactory(drink[0],drink[1]);
        drinksContainer.appendChild(newDrink)
    }
    let dessertsContainer = document.querySelector('#Desserts');
    for (let item of dessertList) {
        let newItem = menuItemFactory(item[0],item[1]);
        dessertsContainer.appendChild(newItem);
    }
    }

export {
    menuTab,
}