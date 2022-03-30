var foodsArray = [
    {
        "Id" : 1,
       "name" : "Sajttorta",
       "price" : 650,
       "topping" : "Eper",
       "calorie" : 540
    },
    {
       "Id" : 2,
      "name" : "Bolognai spagetti",
      "price" : 1650,
      "topping" : "spagetti tészta, bolognai szósz, sajt",
      "calorie" : 640
   },
   {
    "Id" : 3,
   "name" : "Carbonara",
   "price" : 1650,
   "topping" : "spagetti tészta, tejszín, bacon, hagyma, sajt",
   "calorie" : 640
},
{
    "Id" : 4,
   "name" : "Lazac steak jázmin rizzsel",
   "price" : 2850,
   "topping" : "lazac, jázmin rizs, sajtmártás",
   "calorie" : 540
},
{
    "Id" : 5,
   "name" : "Rántott sajt steak burgonyával",
   "price" : 1200,
   "topping" : "cheddar sajt, trappista sajt, rizs, választható szósz",
   "calorie" : 620
},
{
    "Id" : 6,
   "name" : "Fokhagymás szósz",
   "price" : 200,
   "topping" : "tejfől, fokhagyma, só, bors",
   "calorie" : 90
},
{
    "Id" : 7,
   "name" : "Barbecue szósz",
   "price" : 200,
   "topping" : "Barbecue szósz",
   "calorie" : 90
}
];
var helpArray = [];
function createFoods(){
 foodsArray = helpArray;
}
 
 for (let index = 0; index < foodsArray.length; index++) {
            drawFood(foodsArray, index);
    }

// Add plus food
function drawNewFood(){
    if(Validate()){
        var inputName = document.getElementById("foodName").value.trim();
        var inputPrice = document.getElementById("price").value.trim();
        var inputTopping = document.getElementById("topping").value.trim();
        var inputCalorie = document.getElementById("calorie").value.trim();

        foodsArray.push({
            "Id" : foodsArray.length,
            "name" : inputName,
            "price" : inputPrice,
            "topping" : inputTopping,
            "calorie" : inputCalorie
        });
        drawFood(foodsArray, foodsArray.length-1);

        document.getElementById("foodName").value = "";
        document.getElementById("price").value = "";
        document.getElementById("topping").value = "";
        document.getElementById("calorie").value = "";
    }
}
function Validate(){
    var inputName = document.getElementById("foodName").value.trim().length;
    var inputPrice = document.getElementById("price").value.trim().length;
    var inputTopping = document.getElementById("topping").value.trim().length;
    var inputCalorie = document.getElementById("calorie").value.trim().length;
    var inputNameValue = document.getElementById("foodName").value.trim();
    var inputCalorieValue = document.getElementById("calorie").value.trim();
    var inputPriceValue = document.getElementById("price").value.trim();

    if(validateFoodName() & validatePrice() & validateTopping() & validateCalorie() & existName()){
        return true;
    }
    else{
        return false;
    }

    function existName(){
        var exist = false;
        for (let index = 0; index < foodsArray.length; index++) {
        if(foodsArray[index].name === inputNameValue){
            exist = true;
        }
    }
    if(exist){
        document.getElementById("empty-foodName").style.display="block";
        document.getElementById("empty-foodName").innerHTML = "Ez az étel már létezik!";
        return false;
    } else {
        document.getElementById("empty-foodName").style.display = "none";
        return true;
    }
}
    
    function validateFoodName(){
        if(inputName === 0){
            document.getElementById("empty-foodName").style.display="block";
            document.getElementById("empty-foodName").innerHTML = "A név mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-foodName").style.display = "none";
            return true;
        }
    }

    function validatePrice(){
        if(inputPrice === 0){
            document.getElementById("empty-price").style.display="block";
            document.getElementById("empty-price").innerHTML = "Az ár mező kitöltése kötelező!";
            return false;
        } else {
            if(isNaN(inputPriceValue) | inputPriceValue < 0){
                document.getElementById("empty-price").style.display="block";
                document.getElementById("empty-price").innerHTML = "A formátum nem megfelelő!";
                return false;
            }
            else{
            document.getElementById("empty-price").style.display = "none";
            return true;
            }
        }

    }

    function validateTopping(){
        if(inputTopping === 0){
            document.getElementById("empty-topping").style.display="block";
            document.getElementById("empty-topping").innerHTML = "A hozzávalók mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-topping").style.display = "none";
            return true;
        }

    }

    function validateCalorie(){
            if(inputCalorie === 0){
                document.getElementById("empty-calorie").style.display="block";
                document.getElementById("empty-calorie").innerHTML = "A kalória mező kitöltése kötelező!";
                return false;
            } else {
                if(isNaN(inputCalorieValue) | inputCalorieValue < 0){
                    document.getElementById("empty-calorie").style.display="block";
                    document.getElementById("empty-calorie").innerHTML = "A formátum nem megfelelő!";
                    return false;
                }
                else{
                document.getElementById("empty-calorie").style.display = "none";
                return true;
                }
            
    
        }
    }
}


// Sort food
document.getElementById('search_categories').addEventListener('change', (e) => {
    let selected = document.getElementById('search_categories');
    let selectedValue = selected.options[selected.selectedIndex].value;
    if (selectedValue == 1) {
        removeFoods();
        createFoods();
        for (let index = 0; index < foodsArray.length; index++) {
            for (let jindex = index+1; jindex < foodsArray.length; jindex++) {
                if(foodsArray[index].name > foodsArray[jindex].name){
                    let tmp = foodsArray[index];
                    foodsArray[index] = foodsArray[jindex];
                    foodsArray[jindex] = tmp;
                }
            }
        }
        for (let index = 0; index < foodsArray.length; index++) {
                drawFood(foodsArray, index);
        }
    }
    if (selectedValue == 2) {
        removeFoods();
        createFoods();
        for (let index = 0; index < foodsArray.length; index++) {
            for (let jindex = index+1; jindex < foodsArray.length; jindex++) {
                if(foodsArray[index].price > foodsArray[jindex].price){
                    let tmp = foodsArray[index];
                    foodsArray[index] = foodsArray[jindex];
                    foodsArray[jindex] = tmp;
                }
            }
        }
        for (let index = 0; index < foodsArray.length; index++) {
                drawFood(foodsArray, index);

        }
    }
    if (selectedValue == 3) {
        removeFoods();
        createFoods();
        for (let index = 0; index < foodsArray.length; index++) {
            for (let jindex = index+1; jindex < foodsArray.length; jindex++) {
                if(foodsArray[index].price < foodsArray[jindex].price){
                    let tmp = foodsArray[index];
                    foodsArray[index] = foodsArray[jindex];
                    foodsArray[jindex] = tmp;
                }
            }
        }
        for (let index = 0; index < foodsArray.length; index++) {
                drawFood(foodsArray, index);
        }
    }   
});
function removeFoods(){
    var foodContainer = document.getElementById("food-container");
    foodContainer.parentNode.removeChild(foodContainer);

   var addFoodContainer = document.getElementById("add-food-container");
    var div = document.createElement("div");
    div.classList.add("foods-container");
    div.setAttribute("id", "food-container");
    addFoodContainer.appendChild(div);
    helpArray = foodsArray;
    foodsArray = [];
}

function drawFood(foodArray, index) {
    var foodContainer = document.getElementById("food-container");
    var div = document.createElement("div");
    div.classList.add("dynamic-food");
    foodContainer.appendChild(div);

    var img = document.createElement("img");
    img.classList.add("food-item-img");
    img.src = "/img/foodItem.png"
    div.appendChild(img);

    var title = document.createElement("p");
    title.textContent = foodArray[index].name;
    title.classList.add("food-title");
    div.appendChild(title);

    var price = document.createElement("p");
    price.textContent = foodArray[index].price;
    price.classList.add("food-price");
    div.appendChild(price);

    var cart = document.createElement("div");
    cart.classList.add("buy-item");
    cart.setAttribute("id", `${foodArray[index].Id}-1`);
    cart.setAttribute("onClick", `addFood()`); 
    div.appendChild(cart);

    // info
    var ToppingInfo = document.createElement("div");
    ToppingInfo.classList.add("tooltip");
    div.appendChild(ToppingInfo);

    var ToppingText = document.createElement("span");
    ToppingText.textContent = foodArray[index].topping + '\n' + foodArray[index].calorie  + 'kcal';
    ToppingText.classList.add("tooltiptext");
    ToppingInfo.appendChild(ToppingText);
    foodFlysToCart();
}


// Item flys to cart
function addFood(){
    document.getElementById("shopping-cart-counter").innerHTML++;
}

function foodFlysToCart() {

    setTimeout(function () {
        $('.buy-item').on('click', function () {
            var cart = $('.cart-buttom');
            var imgtodrag = $(this).parent('.dynamic-food').find("img").eq(0);
            if (imgtodrag) {
                var imgclone = imgtodrag.clone()
                    .offset({
                        top: imgtodrag.offset().top,
                        left: imgtodrag.offset().left
                    })
                    .css({
                        'opacity': '0.5',
                        'position': 'absolute',
                        'height': '150px',
                        'width': '150px',
                        'z-index': '100'
                    })
                    .appendTo($('body'))
                    .animate({
                        'top': cart.offset().top + 10,
                        'left': cart.offset().left + 10,
                        'width': 75,
                        'height': 75
                    }, 1000, 'easeInOutExpo');

                setTimeout(function () {
                    cart.effect("shake", {
                        times: 2
                    }, 200);
                }, 1500);

                imgclone.animate({
                    'width': 0,
                    'height': 0
                }, function () {
                    $(this).detach()
                });
            }
        });
    }, 1000);

    jQuery(function ($) {
        $(window).scroll(function fix_element() {
            $('.cart-wrap').css(
                $(window).scrollTop() > 700 ?
                {
                    'position': 'fixed',
                    'top': '10px',
                    'border-radius': '40px',
                    'right': '-130px',
                    'background-color': 'rgb(107, 182, 130)',
                    'width': '80px'
                } :
                {
                    'position': 'relative',
                    'top': 'auto',
                    'right': '0',
                    'background-color': '',
                    'height': '50px',
                    'width': '50px'
                }
            );
            $('.cart-items-wrap').css(
                $(window).scrollTop() > 650 ?
                {
                    'right': '130px'
                } :
                {
                    'right': '0'
                }
            );
            return fix_element;
        }());
    });
}

