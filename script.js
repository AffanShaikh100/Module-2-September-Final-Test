// RECIPE DATA FROM SERVER

let recipe = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

let cardbody= document.getElementById("cardbody");
let searchval = document.getElementById("searchrp");
let highradio = document.getElementById("highrating");
let averageradio = document.getElementById("averagerating");


// FUNCTION CREATED TO LOAD RECIPE CARDS ON SITE
function loadrecipe(getrec){
    cardbody.innerHTML="";

    getrec.forEach(food => {

    let div = document.createElement("div");
     for(let i in food){

        
        div.innerHTML=`
        <div class="cards">
        <img src=${food.imageSrc}>
        <br>
        <p class="foodtype">${food.type}</p>
        <div class="cardin-1">
            <h3>${food.name}</h3>
            
             <p><img src="./img assets/Star.svg"> ${food.rating}</p>
        </div>
        <div class="cardin-2">
             <h3>${food.time}</h3>
             <button>
             <img onclick="islikedbtn(event)" class="likebtn" src="./img assets/like.svg">
            </button>
             <img src="./img assets/comments.svg">
        </div>       
        `
     }
    cardbody.appendChild(div);
    });
}


// FUNCTION TO SHOW  ALL RECEPIE
function getallrecepie(){
    highradio.checked = false;
    averageradio.checked = false;
   loadrecipe(recipe);
}

// FUNCTION TO SHOW VEG FOODS
function getvegrecepie(){
    highradio.checked = false;
    averageradio.checked = false;
    let vegg = recipe.filter((s)=>{
        return s.type === "veg";
    });
    loadrecipe(vegg);
}


// FUNCTION TO SHOW NONVEG FOODS
function getnonvegrecepie(){
    highradio.checked = false;
    averageradio.checked = false;
    let nonvegg = recipe.filter((s)=>{
        return s.type === "non-veg";
    });
    loadrecipe(nonvegg);
}

// FUNCTION TO SHOW SEARCH FOODS 
function searchfood(){
 
    let text =searchval.value.toLowerCase();
    console.log(text);
    let filtarr = recipe.filter((s)=>{
       return s.name.toLowerCase().includes(text);
    })
    loadrecipe(filtarr);
}

// FUNCTIONALITY OF ISLIKE BUTTON

function islikedbtn(e){

    e.target.src="./img assets/likered.svg"; 
}

// FUNCTIONALITY OF RATING RADIO BUTTON > 4.5
function ratinghigh(){
    let toprating = recipe.filter((s)=>{
        return s.rating > 4.5;
    })

    loadrecipe(toprating);
}

// FUNCTIONALITY OF RATING RADIO BUTTON < 4
function ratingaverage(){
    let toprating = recipe.filter((s)=>{
        return s.rating < 4;
    })

    loadrecipe(toprating);
}


//fUNCTIONALITY OF ASIDE NAVBAR 
function togglesidebar(){
    document.getElementById("toggleme").classList.toggle("active");
}