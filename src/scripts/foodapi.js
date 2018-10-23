



fetch("http://localhost:8088/food")
.then(foods => foods.json())
.then(parsedFoods => {
  foodFactory(parsedFoods)
  addFoodToDom(parsedFoods)
    })






    

// fetch("http://localhost:8088/food/")
//   .then((foodData) => foodData.json())
//   .then((realData) => {
//     console.log(realData)
//   })