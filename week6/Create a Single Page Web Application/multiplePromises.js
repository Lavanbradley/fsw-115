



// async function getAllLukeMovies() {
//   const lukeData = await axios.get('https://swapi.dev/api/people/1')
//   const lukeFilms = lukeData.data.films






//   const pendingFilmsPromises = []
//   for (let i = 0; i < lukeFilms.length; i++) {
//    pendingFilmsPromises.push(axios.get(lukeFilms[i]))

// }
// Promise.all(pendingFilmsPromises)
//   .then(res => print(res))
//   .catch(err => console.log(err))
// }
// getAllLukeMovies();





// function print(res){
//   for(i = 0; i < res.length; i++){
//     console.log(res[i])
    
//     const h1 = document.createElement('h1')
//     h1.textContent = res.data.director[i]
//   document.body.appendChild(h1)
//   }
// }


// print();


axios.get("https://rickandmortyapi.com/api/character")
.then(res => console.log(res , res.data.results[0].name))
.catch(err => console.log(err))


async function getData(){
 const cartoonData =  await  axios.get("https://rickandmortyapi.com/api/character")
 console.log(cartoonData)
 const cartoon = cartoonData.data.results;
   const pending = []
   var lineBreak = '\n';
   for(let i = 0; i < cartoon.length; i++ ){
     pending.push(cartoon[i]);
     const h4 = document.createElement('h4');
     h4.style.color = "HSL(114, 96.1%, 59.6%)"
     h4.textContent = "Name: " + "\n" + cartoon[i].name + "\n" + lineBreak + "Created: " + cartoon[i].created + "\n"   + "Gender: " + cartoon[i].gender + "ID" + cartoon[i].id + "Image: " + cartoon[i].image + "Location: " + cartoon[i].location + "Origin: " + cartoon[i].origin + "Species: " + cartoon[i].species + "Status: " + cartoon[i].status  + "URL:" + cartoon[i].url;
     document.body.appendChild(h4);
   }

const cartoonData2 = await axios.get(cartoonData.data.info.next)
console.log(cartoonData2)
const cartoon2 = cartoonData2.data.results
const pending2 =[]

for(let i = 0; i < cartoon2.length; i++){
  const h42 = document.createElement('h4');
  h42.style.color = "HSL(114, 96.1%, 59.6%)"
  pending2.push(cartoon2[i])
     h42.textContent = "Name: " + cartoon2[i].name + "/n" + "Created: " + cartoon2[i].created  + "Gender: " + cartoon2[i].gender + "ID" + cartoon2[i].id + "Image: " + cartoon2[i].image + "Location: " + cartoon2[i].location + "Origin: " + cartoon2[i].origin + "Species: " + cartoon2[i].species + "Status: " + cartoon2[i].status  + "URL:" + cartoon2[i].url;
     document.body.appendChild(h42);
}

const cartoonData3 = await axios.get(cartoonData2.data.info.next)
console.log(cartoonData3)
const cartoon3 = cartoonData3.data.results
const pending3 = []

for(let i = 0; i < cartoon3.length; i++){
  const h43 = document.createElement('h4');
  h43.style.color = "HSL(114, 96.1%, 59.6%)"
  pending3.push(cartoon3[i])
  h43.textContent = "Name: " + cartoon3[i].name + "/n" + "Created: " + cartoon3[i].created +  "Gender: " + cartoon3[i].gender + "ID" + cartoon3[i].id + "Image: " + cartoon3[i].image + "Location: " + cartoon3[i].location + "Origin: " + cartoon3[i].origin + "Species: " + cartoon3[i].species + "Status: " + cartoon3[i].status  + "URL:" + cartoon3[i].url;
     document.body.appendChild(h43);
}







   Promise.all(pending , pending2, pending3)
  .then(res =>console.log(res))
  .catch(err => console.log(err))
}


getData();

var bod = document.querySelector("body")
bod.style.backgroundColor = 'black'



// async function starData (){
//   const lukeData = await axios.get('https://swapi.dev/api/people/')
//   const newData = lukeData.data
//   const pendingFilmsPromises = []
//   console.log(newData)

// }