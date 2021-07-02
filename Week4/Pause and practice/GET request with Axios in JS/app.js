

//Get all
axios.get("http://api.bryanuniversity.edu/lavanbradley/list")
  .then(response => console.log(response.data))
  .catch(error => console.log(error))


// CORS Error, CORS-anywhere google it when you happen upon this error
//http://cors-anywher.herokuapp.com/


//Get one

axios.get("http://api.bryanuniversity.edu/lavanbradley/list/6dcd891d-1f2a-4b17-9835-7249f2120d35")
  .then(response => console.log(response.data))
  .catch(error => console.log(error))


//Print to screen

axios.get("http://api.bryanuniversity.edu/lavanbradley/list")
  .then(response => {
    for (let i = 0; i < response.data.length; i++) {
      const h1 = document.createElement('h1')
      h1.textContent = response.data[i].name
      document.body.appendChild(h1)
    }
  })
  .catch(error => console.log(error))



//Print to screen one to screen
