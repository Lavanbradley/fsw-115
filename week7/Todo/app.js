



var btn = document.querySelector('button')
var characters = document.getElementById('characters')
var contentSpace = document.getElementById('contentSpace')
btn.addEventListener('click', getData)

function getData(e){
  e.preventDefault()
  axios.get("https://swapi.dev/api/people/")
.then(res => {
  if(characters.value === "Luke"){
    contentSpace.innerHTML = JSON.stringify("Name: " + res.data.results[0].name + " " + "Height: " + res.data.results[0].height + " " + "Mass: " + res.data.results[0].mass)
  }
  if(characters.value === "C-3PO"){
    contentSpace.innerHTML = JSON.stringify("Name: " + res.data.results[1].name + " " + "Height: " + res.data.results[1].height + " " + "Mass: " + res.data.results[1].mass)
  }
  if(characters.value === "R2-D2"){
    contentSpace.innerHTML = JSON.stringify("Name: " + res.data.results[2].name + " " + "Height: " + res.data.results[2].height + " " + "Mass: " + res.data.results[2].mass)
  }
  if(characters.value === "Darth Vader"){
    contentSpace.innerHTML = JSON.stringify("Name: " + res.data.results[3].name + " " + "Height: " + res.data.results[3].height + " " + "Mass: " + res.data.results[3].mass)
  }
  if(characters.value === "Leia Organa"){
    contentSpace.innerHTML = JSON.stringify("Name: " + res.data.results[4].name + " " + "Height: " + res.data.results[4].height + " " + "Mass: " + res.data.results[4].mass)
  }
  
})
.catch(err => console.log(err))

}



