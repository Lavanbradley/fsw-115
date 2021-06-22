const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    showData(data);
    console.log(data.results)
    console.log(xhr.responseText);
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr.responseText)
  }

}

function showData(data) {
  for (i = 0; i < data.results.length; i++) {
    var pokemon = document.createElement('h1');
    pokemon.textContent = 'Name: ' + data.results[i].name + ' ' + 'URL: ' + data.results[i].url;
    document.body.appendChild(pokemon);

  }
}


// const xhr1 = new XMLHttpRequest();
// xhr1.open("GET", "https://pokeapi.co/api/v2/pokemon-color/black/", true);
// xhr1.open("GET", "https://pokeapi.co/api/v2/pokemon/7/", true);

// xhr1.send();

// xhr1.onreadystatechange = function(){
//   if(xhr1.readyState === 4 && xhr1.status === 200){
//     let data = JSON.parse(xhr1.responseText); 
//     console.log(xhr1.responseText)
//     console.log(data.height)
//     console.log(data.name)
//     showPokeData(data);
//   }else if(xhr1.readyState === 4 && xhr1.status !== 200){
//     console.log(xhr1.responseText)
//   }


// }
// function showPokeData(data){
//   console.log(data)
//   for(i = 0; i < data.results.length; i++){
//   var pokemon2 = document.createElement('h1');
//   pokemon2.textContent = data.results[i].name;
//   document.body.appendChild(pokemon2);
//   }
// }
