



axios.get('https://swapi.dev/api/people/1')
.then(res => {
  const homeworld = res.data.homeworld
  console.log(homeworld)
  return axios.get(homeworld)
  
  
  
  
  // const films = res.data.films
  // console.log(homeworld, films)
  // const h1 = document.createElement('h1')
  // h1.textContent = films;
  // document.body.appendChild(h1)
})
.then(response => axios.get(response.data.films[0]))
.then(res => console.log(res.data))
.catch(err => console.log(err))