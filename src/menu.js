const menuTab = () => {
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let menu = document.createElement('div');
    menu.setAttribute('id','menu')

    //adding the food categories to the DOM
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
    
    //All the food items offered
    let SandwichesList = [['Falafel', 5.75],['Chicken Shawarma',8.50],['Beef Shawarma',8.50],
    ['Kofta',8.50],['Chicken Kebab', 8.50],['Burger', 7.50],['Chicken Burger', 7.50],
    ['Veggie Burger', 6.50],['Ful (Fava Beans)',5.75]];
    let SaladsList = [['Greek Salad', 7.99],['Hummus Salad',7.00],['Yogurt Salad',5.99],
    ['Coleslaw',6.00],['Zaad Salad', 6.99],['Baba Ghannouj', 7.00],['Chicken Salad', 9.99]];
    let DrinksList = [['Soda',1.00],['Mint Tea',2.00]] 
    let DessertsList = [['Baklava',2.00],['Rice Pudding',3.00]];
    let SoupList = [['Soup of the Day',5.75]];

    //translating the food items to a div on the DOM via a factory function
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
    let categoryList = [SandwichesList,SaladsList,SoupList,DrinksList,DessertsList]
    let count = 0
    for (let category of categories) {
        let foodContainer = document.querySelector(`#${category}`);
        for (let item of categoryList[count]){
            let newItem = menuItemFactory(item[0],item[1]);
            foodContainer.appendChild(newItem);
        }
        count +=1;
    }}

export {
    menuTab,
};