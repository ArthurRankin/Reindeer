var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < colors.length; i++) {
    var a = colors[i];
    console.log(a);
}
for (var x = 0; x < reindeer.length; x++) {
    var b = reindeer[x];
    console.log(b);
}
hohohoElement.innerHTML = a + " " + b;