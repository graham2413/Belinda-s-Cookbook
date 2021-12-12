// using query string, each page has a unique ID
const params = new URLSearchParams(window.location.search)
const id = params.get("id");

fetch("recipe.json")
.then(response=> response.json())
.then(data => {

/*if id is found, populate page with json file*/
/*--------------------------------------------*/

    if(id==="ham" ||id==="sausage"||id==="artichoke"||id==="spaghetti"||id==="chilli"||id==="taco"||id==="poundcake"
    ||id==="funfetti"|id==="cccake"){

    $(".hidden").hide();
   
    $('title').append(data[id].name);
    $(".rec-header").append(data[id].recheader)

    let picture =document.getElementById("food-pic")
    picture.src= data[id].src
    picture.alt= data[id].alt
    
/*for prep*/
var prep1 = data[id].prep1;
var prep2 = data[id].prep2;
var prep3 = data[id].prep3;

$('#ct').append(prep1);
$('#ts').append(prep2);
$('#tc').append(prep3);
        
/*loop for ingredients*/
var ingred = data[id].ingredients;
var links = data[id].links;
var i=0;

for (var key in ingred) {
    if (ingred.hasOwnProperty(key)) {
        links[i];
        var a = document.createElement('a');
        a.setAttribute('href', links[i]);
        a.innerHTML = ingred[key];
        $('.ingredients ul').append(a);
        i++;
    }
}
/*loop for directions*/
var dir = data[id].directions;

for (var key in dir) {
    if (dir.hasOwnProperty(key)) {
        $('.directions ol').append(dir[key]);
    }
}
$("#learn").attr("href", data[id].learn1);
    }
// if id it not one of the valid recipes, only display the hidden header and the nav bar. (error handling)
    else{
    
        $(".hidden").show();

        $('.rec-header').remove();
        $('#food-pic').remove();
        $('.rec-cont').remove();
        $('#prep').remove();
        $('#footer').remove();
        $('#learn').remove();
        
    }
})