const beerMenu = document.getElementById("beer-menu-listing");
const wineMenu = document.getElementById("wine-menu-listing");
const cocktailMenu = document.getElementById("cocktails-menu-listing");
const pizzaMenu = document.getElementById("pizza-menu-listing");

const beerItems = Array.from(document.querySelectorAll(".beer"));
const wineItems = Array.from(document.querySelectorAll(".wine"));
const cocktailItems = Array.from(document.querySelectorAll(".cocktails"));
const pizzaItems = Array.from(document.querySelectorAll(".pizza"));

const menuIcon = document.getElementById("menu-icon");
const crossIcon = document.getElementById("cross-icon");
const mobileNav = document.getElementById("nav-bar-mobile");

menuIcon.addEventListener("click", function() {
	menuIcon.classList.add("remove");
	menuIcon.classList.remove("display");
	crossIcon.classList.add("display");
	crossIcon.classList.remove("remove");

	mobileNav.classList.add("show");
	mobileNav.classList.remove("hide");
});

crossIcon.addEventListener("click", function() {
	menuIcon.classList.remove("remove");
	menuIcon.classList.add("display");
	crossIcon.classList.remove("display");
	crossIcon.classList.add("remove");

	mobileNav.classList.remove("show");
	mobileNav.classList.add("hide");
});



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

function initMap(){
	var location = {lat: 45.521901, lng: -122.690613};
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 8,
		center: location,
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
};