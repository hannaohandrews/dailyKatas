const chooseRecipe = function(bakeryA, bakeryB, recipes) {

let ingredients = [];

   let ingredientCheck = (bakery,recipe) => {
    for (let i = 0 ; i < bakery.length; i++){
        for (let j = 0 ; j < recipe[i][ingredients].length ; j ++){
            if (bakery[i] === recipe[i][ingredients][j]){
                ingredients.push(bakery[i])
            }
        }
       }
       return ingredients
   }
   console.log(ingredientCheck(bakeryA,recipes)) 
   console.log(ingredientCheck(bakeryB,recipes))

  }
  
  let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  let bakeryB = ['milk', 'butter', 'cream cheese'];
  let recipes = [
      {
          name: 'Coconut Sponge Cake',
          ingredients: ['coconut', 'cake base']
      },
      {
          name: 'Persian Cheesecake',
          ingredients: ['saffron', 'cream cheese']
      },
      {
          name: 'Custard Surprise',
          ingredients: ['custard', 'ground beef']
      }
  ];

  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  
  bakeryA = ['potatoes', 'bay leaf', 'raisins'];
  bakeryB = ['red bean', 'dijon mustard', 'apples'];
  recipes = [
      {
          name: 'Potato Ganache',
          ingredients: ['potatoes', 'chocolate']
      },
      {
          name: 'Sweet Fish',
          ingredients: ['anchovies', 'honey']
      },
      {
          name: "Nima's Famous Dijon Raisins",
          ingredients: ['dijon mustard', 'raisins']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));

  // Persian Cheesecake 
  // Nima's Famous Dijon Raisins 


