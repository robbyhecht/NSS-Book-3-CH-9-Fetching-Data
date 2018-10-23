
// access article in html
const foodList = document.querySelector(".foodList")

// Reformats the array's objects into html
let foodFactory = (food) => {
  let htmlContent = `
    <div class="foods"> 
      <h2>${food.name}</h2>
      <p>${food.type}</p>
      <p>${food.ethnicity}</p>
    </div>
    `
    return htmlContent;
}

// For each object in the array, transform the entry into html with the foodFactory function above and add it to the DOM
addFoodToDom = (food) => {
  food.forEach((item) => {
    foodList.innerHTML += foodFactory(item);
  });
}
