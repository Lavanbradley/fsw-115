document.body.style.backgroundColor = "black"
const filmDiv = document.querySelector('.films')





async function getAllLukeMovies() {
  const lukeData = await axios.get('https://swapi.dev/api/people/1')
  const lukeFilms = lukeData.data.films
  const pendingFilmsPromises = []

  for (let i = 0; i < lukeFilms.length; i++) {
    pendingFilmsPromises.push(axios.get(lukeFilms[i])) 
    const h1 = document.createElement('h1')
    h1.textContent = " Luke Films URL: " + lukeFilms[i]
    h1.style.color = "#ff073a"
    
    h1.style.textAlign = "center"
    h1.style.marginBottom ="50px"
    document.body.appendChild(h1)
  }
  const lukeVehicles = lukeData.data.vehicles
  const pendingVehiclesPromises = []
  for (let i = 0; i < lukeVehicles.length; i++){
    pendingVehiclesPromises.push(axios.get(lukeVehicles[i]))
    const h11 = document.createElement('h1')
    h11.textContent = " Luke Vehicles URL: " + lukeVehicles[i]
    h11.style.color = "#48fb47"
    h11.style.textAlign = "center"
    h11.style.marginBottom ="50px"
    document.body.appendChild(h11)
  }
  const lukeStarships = lukeData.data.starships
  const pendingStarshipsPromises = []

  for(let i = 0; i < lukeStarships.length; i++){
    pendingStarshipsPromises.push(axios.get(lukeStarships[i]))
    const h111 = document.createElement('h1')
    h111.textContent = " Luke Starships URL: " + lukeStarships[i]
    h111.style.color = "#FF5F1F"
    h111.style.textAlign = "center"
    h111.style.marginBottom ="50px"
    document.body.appendChild(h111)
  }

Promise.all(pendingFilmsPromises, pendingVehiclesPromises,pendingStarshipsPromises)
.then(res => console.log(res))
.catch(err => console.log(err))
}
getAllLukeMovies();

const help = document.getElementById('help')
help.style.color = "white"
help.style.textAlign = "center"
help.style.textDecoration = "underline"





