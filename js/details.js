
// alert(window.location.search)
let param = new URLSearchParams(location.search);
let recipeId = param.get("rid");
recipesDetails = {}
getrecipesDetails();
let reciperimg = document.getElementById("recipeImg")
let ingredient = [];
function getrecipesDetails() {
    let httprequest = new XMLHttpRequest();
    httprequest.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
    httprequest.send();
    httprequest.addEventListener("readystatechange", function () {
        if (httprequest.readyState == 4 && httprequest.status == 200) {
            recipesDetails = JSON.parse(httprequest.response).recipe;
            reciperimg.src = recipesDetails.image_url;
            ingredient = recipesDetails.ingredients;
            let Title= recipesDetails.title;
            displayIngredients()
            document.getElementById("recipeTitle").innerHTML = Title
        }
    });

}

function displayIngredients() {
    let ingredientscontainer = ``
    for (let i = 0; i < ingredient.length; i++) {
        ingredientscontainer += `
        <li class="">${ingredient[i]}</li>
        `
    }
    document.getElementById("ingredientsul").innerHTML = ingredientscontainer
}
