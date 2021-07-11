



const getData = async () => {
 let response;
 let home;
 try{
  response = await axios.get("https://swapi.dev/api/people/1")
  home = await axios.get(response.data.homeworld)
  const film = await axios.get(home.data.films[0])
  
  console.log(home)
  console.log(response.data.films)
  console.log(film.data.release_date)
  displayData(home, film)
//  for (i = 0; i < film.data.length; i++){
//    const test = document.createElement('h1')
//    test.textContent = film.data[i]
//    document.body.appendChild(test)
//  }
 } 
 catch(error){
 console.log(error)
 }
 
 
 
 // console.log(response.data.films)
  // console.log(response.data.results)
  // console.log(response)
}
getData()

function displayData (home, film){
console.log(home)
const h1 = document.createElement('h1')
h1.textContent = home.data.name
document.body.appendChild(h1)
const h2 = document.createElement('h2')
h2.textContent = film.data.title
document.body.appendChild(h2)
const h2a = document.createElement('h2')
h2a.textContent = film.data.episode_id
document.body.appendChild(h2a)

}


// .then(res => {
//   const homeworldUrl = res.data.homeworld
//   console.log(homeworldUrl)
//   return axios.get(homeworldUrl);
// })
// .then(response => axios.get(response.data.films[0]))
// .then(res => console.log(res.data))
// .catch(err => console.log(err))




