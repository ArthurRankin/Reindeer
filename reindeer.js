var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");
var text = "";
for (var i = 0; i < colors.length && i < reindeer.length; i++) {
        text = colors[i] + reindeer[i];
        console.log(text);
};

hohohoElement.innerHTML = text;
