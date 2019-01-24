const beerMenu = document.getElementById("beer-menu-listing");
const wineMenu = document.getElementById("wine-menu-listing");
const cocktailMenu = document.getElementById("cocktails-menu-listing");
const pizzaMenu = document.getElementById("pizza-menu-listing");

// const beerItems = document.querySelector(".beer");
// const wineItems = document.querySelector(".wine");
// const cocktailItems = document.querySelector(".cocktails");
//const pizzaItems = document.querySelector(".pizza");
const beerItems = Array.from(document.querySelectorAll(".beer"));
const wineItems = Array.from(document.querySelectorAll(".wine"));
const cocktailItems = Array.from(document.querySelectorAll(".cocktails"));
const pizzaItems = Array.from(document.querySelectorAll(".pizza"));


beerMenu.addEventListener("click", function(){
	beerMenu.classList.add("selected");
	wineMenu.classList.remove("selected");
	cocktailMenu.classList.remove("selected");
	pizzaMenu.classList.remove("selected");

	for (let element of beerItems) {
	  element.classList.remove('hide')
	}
	for (let element of wineItems) {
	  element.classList.add('hide')
	}
	for (let element of cocktailItems) {
	  element.classList.add('hide')
	}
	for (let element of pizzaItems) {
	  element.classList.add('hide')
	}
});

wineMenu.addEventListener("click", function(){
	beerMenu.classList.remove("selected");
	wineMenu.classList.add("selected");
	cocktailMenu.classList.remove("selected");
	pizzaMenu.classList.remove("selected");

	for (let element of beerItems) {
	  element.classList.add('hide')
	}
	for (let element of wineItems) {
	  element.classList.remove('hide')
	}
	for (let element of cocktailItems) {
	  element.classList.add('hide')
	}
	for (let element of pizzaItems) {
	  element.classList.add('hide')
	}
});

cocktailMenu.addEventListener("click", function(){
	beerMenu.classList.remove("selected");
	wineMenu.classList.remove("selected");
	cocktailMenu.classList.add("selected");
	pizzaMenu.classList.remove("selected");

	for (let element of beerItems) {
	  element.classList.add('hide')
	}
	for (let element of wineItems) {
	  element.classList.add('hide')
	}
	for (let element of cocktailItems) {
	  element.classList.remove('hide')
	}
	for (let element of pizzaItems) {
	  element.classList.add('hide')
	}

});

pizzaMenu.addEventListener("click", function(){
	beerMenu.classList.remove("selected");
	wineMenu.classList.remove("selected");
	cocktailMenu.classList.remove("selected");
	pizzaMenu.classList.add("selected");

	for (let element of beerItems) {
	  element.classList.add('hide')
	}
	for (let element of wineItems) {
	  element.classList.add('hide')
	}
	for (let element of cocktailItems) {
	  element.classList.add('hide')
	}
	for (let element of pizzaItems) {
	  element.classList.remove('hide')
	}

});


// let allElements = Array.from(document.querySelectorAll('.widget.hover'))
// for (let element of allElements) {
//   element.classList.remove('hover')
// }