class Restaurant {
	constructor(name, menu) {
		this.name = name;
		this.menu = menu;
		this.location = "Bangladesh";
	}
}

const kababBari = new Restaurant("Kabab Bari", [
	"grill",
	"chicken chap",
	"beef chap",
	"lacchi",
]);

console.log(kababBari);
