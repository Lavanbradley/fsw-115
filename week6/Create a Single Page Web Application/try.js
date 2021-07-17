async function getAllLukeMovies() {
    const lukeData = await axios.get('https://swapi.dev/api/people')
  
  const data = lukeData.data
  const pending = []
console.log(data)
console.log(lukeData)

  pending.push(data)
  
  
  Promise.all(pending)
.then(res => console.log(res))  
.catch(err => console.log(err))
  }
getAllLukeMovies();