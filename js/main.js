
// window.addEventListener("scroll",function(){
//     var nav = document.getElementsByClassName("navbar");
//     // let windowposition=window.scrollY>0;
//     console.log(nav);
//     // nav.classList.add("bgColor")
// })



let recipes = [];
getrecipes("pizza");
let links = document.getElementsByClassName("nav-link");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        let currentMeal = e.target.text;
        getrecipes(currentMeal)
    });
}
function getrecipes(meal) {
    let httprequest = new XMLHttpRequest();
    httprequest.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    httprequest.send();
    httprequest.addEventListener("readystatechange", function () {
        if (httprequest.readyState == 4 && httprequest.status == 200) {
            recipes = JSON.parse(httprequest.response).recipes
            displayrecipes()
        }
    });

}
function displayrecipes() {
    let recipescontainer = "";
    for (let i = 0; i < recipes.length; i++) {
        recipescontainer +=
            `
        <div class="col-md-3 my-2 ajax-dvs">
         
            <img class="w-100 img-style" src="${recipes[i].image_url}">
            <div class="header-info"> <h3>${recipes[i].title}</h3></div>
            <button class="btn btn-info"> <a class="text-white" target="_blank" href="${recipes[i].source_url}">Source</a> </button>
            <button class="btn btn-warning"> 
                <a class="text-white" href="details.html?rid=${recipes[i].recipe_id}" target="_blank" >Details</a> 
                </button>
            <h4></h4>
            <p></p>
          
        </div>
        `

    }

    document.getElementById("meals").innerHTML = recipescontainer;
}