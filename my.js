function navFunc(){
    const mainMenuBtn = document.getElementById('mainMenuBtn');
    const navList = document.getElementById('navList');
    const navAnchors = document.querySelectorAll('.navAnchors');
    const recipeAnchors = document.querySelectorAll('.recipeAnchor');

    mainMenuBtn.addEventListener('click', () =>{
        navList.classList.toggle('hidden')
        navAnchors.forEach((anchor) =>{
            anchor.classList.toggle('bottomBorderTransition')
        })
    })

    recipeAnchors.forEach((anchor) =>{
        anchor.addEventListener('click', () =>{
            navList.classList.toggle('hidden')
            document.getElementById('foodSearch').focus()
        })
    })
  
}

function mealSearch(){
  const recipeSearchBar = document.getElementById('foodSearch');
  const recipeItemGrid = document.getElementById('recipeItemsGrid');
  const recipeInfo = document.getElementById('recipeInfo');
  const recipeInfoClose = document.getElementById('recipeInfoClose');
  const ingredientList = document.getElementById('ingredientList');
  const measurementList = document.getElementById('measurementList');
  if (recipeSearchBar){ // checks first if this element exists on the file or page if it does it runs the function
  recipeSearchBar.addEventListener('keypress', (ev) =>{
    if (ev.key === "Enter"){
        let timesEnter = 0;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeSearchBar.value}`)
        .then ((response) => {return response.json()})
        .then ((data) =>{
                console.log(data.meals)
                if (data.meals === null){
                    alert('This recipe does not exist')
                }
            for (let i = 0; i <= 25; i++){
                let section = document.createElement('section');
                section.classList.add("col-span-2", "h-full", "text-center", "my-3");
                let h2 = document.createElement('h2');
                h2.textContent = data.meals[i].strMeal
                let recipeImg = document.createElement('img');
                recipeImg.classList.add("md:w-56", "w-36", "h-fit", "mx-auto", "my-1", "hover:cursor-pointer", "rounded", "rounded-md")
                recipeImg.setAttribute('src', data.meals[i].strMealThumb)
                section.appendChild(h2)
                section.appendChild(recipeImg)
                recipeItemGrid.appendChild(section);
                console.log(data.meals[i].strMeal);
                recipeImg.addEventListener('click', () =>{
                    const ingredientArray = ["Ingredients:", data.meals[i].strIngredient1, data.meals[i].strIngredient2, data.meals[i].strIngredient3, data.meals[i].strIngredient4, data.meals[i].strIngredient5,
                    data.meals[i].strIngredient6, data.meals[i].strIngredient7, data.meals[i].strIngredient8, data.meals[i].strIngredient9, data.meals[i].strIngredient10, data.meals[i].strIngredient11,
                    data.meals[i].strIngredient12, data.meals[i].strIngredient13, data.meals[i].strIngredient14, data.meals[i].strIngredient15, data.meals[i].strIngredient16, data.meals[i].strIngredient17,
                    data.meals[i].strIngredient18, data.meals[i].strIngredient19, data.meals[i].strIngredient20]; //refactor later
                    const measurementArray = ["Measurements:", data.meals[i].strMeasure1, data.meals[i].strMeasure2, data.meals[i].strMeasure3, data.meals[i].strMeasure4, data.meals[i].strMeasure5,
                    data.meals[i].strMeasure6, data.meals[i].strMeasure7, data.meals[i].strMeasure8, data.meals[i].strMeasure9, data.meals[i].strMeasure10, data.meals[i].strMeasure11, data.meals[i].strMeasure12,
                    data.meals[i].strMeasure13, data.meals[i].strMeasure14, data.meals[i].strMeasure15, data.meals[i].strMeasure16, data.meals[i].strMeasure17, data.meals[i].strMeasure18, data.meals[i].strMeasure19, data.meals[i].strMeasure20]
                    ingredientArray.forEach((ing) =>{
                        let li = document.createElement('li');
                        li.textContent = ing
                        ingredientList.appendChild(li)
                    })

                    measurementArray.forEach((measurement) =>{
                        let li = document.createElement('li')
                        li.textContent = measurement
                        measurementList.appendChild(li)
                    })
              
                    document.getElementById('mealName').textContent += data.meals[i].strMeal
                    document.getElementById('mealDescription').textContent += data.meals[i].strInstructions
                    recipeInfo.classList.toggle('hidden')
                    console.log('clicked')
                })
            }})

        .catch ((error) =>{
        console.warn(error)
    })

    recipeInfoClose.addEventListener('click', () =>{
        recipeInfo.classList.toggle('hidden')
        recipeInfo.classList.add('hidden')
        document.getElementById('mealName').textContent = ""
        document.getElementById('mealDescription').textContent = ""
        ingredientList.replaceChildren()
        measurementList.replaceChildren()
    })

    timesEnter++
        if (timesEnter == 1){
            recipeItemGrid.replaceChildren()
        }
    }}
 )}}

 function randomMealGenerator(){
    const randomMealButton = document.getElementById('randomMealButton');
    const randomMealIngredientList = document.getElementById('randomMealIngredients');
    const randomMealMeasurementList = document.getElementById('randomMealMeasurements');
    if (randomMealButton){ // checks first if this element exists on the file if it does it runs the function
    randomMealButton.addEventListener('click', () =>{
        let clicks = 0;
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then ((response) => {return response.json()})
        .then ((data) =>{
            document.getElementById('mealInfoSection').classList.add('bg-white');
            document.getElementById('mealInfoHeader').textContent = data.meals[0].strMeal;
            document.getElementById('randomMealImage').style.backgroundImage = `url('${data.meals[0].strMealThumb}')`;
            const randomIngredientArray = ["Ingredients:", data.meals[0].strIngredient1, data.meals[0].strIngredient2, data.meals[0].strIngredient3, data.meals[0].strIngredient4, data.meals[0].strIngredient5,
            data.meals[0].strIngredient6, data.meals[0].strIngredient7, data.meals[0].strIngredient8, data.meals[0].strIngredient9, data.meals[0].strIngredient10, data.meals[0].strIngredient11,
            data.meals[0].strIngredient12, data.meals[0].strIngredient13, data.meals[0].strIngredient14, data.meals[0].strIngredient15, data.meals[0].strIngredient16, data.meals[0].strIngredient17,
            data.meals[0].strIngredient18, data.meals[0].strIngredient19, data.meals[0].strIngredient20]
            const randomMeasurementArray = ["Measurements:", data.meals[0].strMeasure1, data.meals[0].strMeasure2, data.meals[0].strMeasure3, data.meals[0].strMeasure4, data.meals[0].strMeasure5,
            data.meals[0].strMeasure6, data.meals[0].strMeasure7, data.meals[0].strMeasure8, data.meals[0].strMeasure9, data.meals[0].strMeasure10, data.meals[0].strMeasure11, data.meals[0].strMeasure12,
            data.meals[0].strMeasure13, data.meals[0].strMeasure14, data.meals[0].strMeasure15, data.meals[0].strMeasure16, data.meals[0].strMeasure17, data.meals[0].strMeasure18, data.meals[0].strMeasure19, data.meals[0].strMeasure20]
            randomIngredientArray.forEach((ing) =>{
                let li = document.createElement('li');
                li.textContent = ing;
                randomMealIngredientList.appendChild(li);
            });

         randomMeasurementArray.forEach((measurement) =>{
            let li = document.createElement('li');
            li.textContent = measurement;
            randomMealMeasurementList.appendChild(li);
         });

        document.getElementById('randomMealInstructionsHeader').textContent = "Instructions:";
        document.getElementById('randomMealInstructions').textContent = data.meals[0].strInstructions;
        }
    )
    clicks++
    if (clicks === 1){
       randomMealIngredientList.replaceChildren();
       randomMealMeasurementList.replaceChildren();
    }
}
 )}}

 function myMeals(){
    const mealIngredientsList = document.getElementById('mealIngredients');
    const mealMeasurementsList = document.getElementById('mealMeasurements');
    const mealRecipeName = document.getElementById('mealRecipeName');
    const mealRecipeDescription =  document.getElementById('mealRecipeDescription');
    const recipeGrid = document.getElementById('recipeGrid');
    const saveMealRecipeButton = document.getElementById('saveMealRecipeButton');
    const clearMealRecipeButton = document.getElementById('clearMealRecipeButton');

    const recipes = JSON.parse(localStorage.getItem("recipes") || "[]") // getting whatever is in the recipes array and converting into a object
    if (mealIngredientsList){
        mealIngredientsList.addEventListener('click', () =>{
            mealIngredientsList.textContent = ""
        })
        mealMeasurementsList.addEventListener('click', () =>{
           mealMeasurementsList.textContent = ""
        })
       mealRecipeName.addEventListener('click', () =>{
           mealRecipeName.textContent = ""
        })
       mealRecipeDescription.addEventListener('click', () =>{
           mealRecipeDescription.textContent = ""
        })

    function showRecipes(){ // create recipe function
        document.querySelectorAll('.mealRecipes').forEach((mealRecipe) => {mealRecipe.remove()})
        recipes.forEach((recipe) =>{
            let section = document.createElement('section');
            section.classList.add("mealRecipes", "col-span-4", "flex", "justify-center", "items-center", "mx-1", "my-3", "h-52", "w-36", "bg-white", "hover:cursor-pointer")
            let h1 = document.createElement('h1');
            h1.textContent = recipe.mealName;
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            para1.classList.add('hidden') // ok so turn the paragraphs into list and find a way to append them to the main ul 
            para2.classList.add('hidden')
            para1.textContent = recipe.mealIngredients
            para2.textContent = recipe.mealMeasurements
            let descPara = document.createElement('p');
            descPara.classList.add('hidden')
            descPara.textContent = recipe.mealDescription
            section.appendChild(h1)
            section.appendChild(para1)
            section.appendChild(para2)
            section.appendChild(descPara)
            recipeGrid.appendChild(section)
            console.log(recipe)
         })
         
            document.querySelectorAll('.mealRecipes').forEach((mealRecipe) =>{
                mealRecipe.addEventListener('click', () =>{
                    console.log(mealRecipe)
                    mealRecipeName.textContent = mealRecipe.childNodes[0].textContent;
                    mealIngredientsList.textContent = mealRecipe.childNodes[1].textContent;
                    mealMeasurementsList.textContent = mealRecipe.childNodes[2].textContent;
                    mealRecipeDescription.textContent = mealRecipe.childNodes[3].textContent;
                })
            })
    }

    saveMealRecipeButton.addEventListener('click', (ev) =>{
        ev.preventDefault()
        console.log('recipe saved')
        let mealRecipe = { // object
            mealName: mealRecipeName.textContent,
            mealIngredients: mealIngredientsList.textContent,
            mealMeasurements: mealMeasurementsList.textContent,
            mealDescription: mealRecipeDescription.textContent
        }
        recipes.push(mealRecipe) // pushing each object into an array everytime the save button is clicked
        localStorage.setItem("recipes", JSON.stringify(recipes)) // saving the recipes array and turning into string
        showRecipes()
        })

        window.addEventListener('load', () =>{showRecipes()})

        clearMealRecipeButton.addEventListener('click', () =>{
            alert('click on the recipes you want to remove')

            document.querySelectorAll('.mealRecipes').forEach((mealRecipe) =>{
                mealRecipe.addEventListener('click', () =>{
                    mealRecipe.remove()
                    recipes.splice(-1)
                    localStorage.setItem('recipes', JSON.stringify(recipes))
                })
            })
        })
    }
 }
    
navFunc()
mealSearch()
randomMealGenerator()
myMeals()

// might need to refactor
// this was made possible thanks to the MealDB API