
var data = {
	"name": "Yavin IV",
	"rotation_period": "24",
	"orbital_period": "4818",
	"diameter": "10200",
	"climate": "temperate, tropical",
	"gravity": "1 standard",
	"terrain": "jungle, rainforests",
	"surface_water": "8",
	"population": "1000",
	"residents": [],
	"films": [
		"http://swapi.dev/api/films/1/"
	],
	"created": "2014-12-10T11:37:19.144000Z",
	"edited": "2014-12-20T20:58:18.421000Z",
	"url": "http://swapi.dev/api/planets/3/"
};

document.body.style.background = "black";

var jsonData = JSON.stringify(data)


var list = document.getElementById("list");



for (var i = 0; i < jsonData.length; i++ ){
  var newList = document.createElement("li");
  newList.textContent = jsonData;
  list.append(newList);
  newList.style.color = "green";
  newList.style.fontWeight = "bold";
  
};
