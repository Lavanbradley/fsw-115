


async function getAllLukeMovies() {
  const lukeData = await axios.get('https://swapi.dev/api/people/1')
  const lukeFilms = lukeData.data.films
  const luke = lukeFilms.data.title
  const pendingFilmsPromises = []
console.log(luke)
  for (let i = 0; i < lukeFilms.length; i++) {
    pendingFilmsPromises.push(axios.get(lukeFilms[i])) 
    const h1 = document.createElement('h1')
    h1.textContent = lukeFilms[i]
    document.body.appendChild(h1)
  }
console.log(pendingFilmsPromises)
Promise.all(pendingFilmsPromises)
.then(res => console.log(res))
.catch(err => console.log(err))
}
getAllLukeMovies();