


// fetch("https://swapi.dev/api/people/")
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))

// fetch("https://swapi.dev/api/people/")
// .then(res => res.json())
// .then(res => {
//   for(let i =0; i < res.results.length; i++){
//     console.log(res.results[i].name)
//   }
// } )
// .catch(err => console.log(err))

fetch("https://swapi.dev/api/people/")
.then(res => res.json())
.then(res => {
  for(let i =0; i < res.results.length; i++){

    const h1 = document.createElement('h1')
    h1.textContent = res.results[i].name + " - " + res.results[i].height + " - " + res.results[i].mass
    document.body.appendChild(h1)
  }
} )
.catch(err => console.log(err))