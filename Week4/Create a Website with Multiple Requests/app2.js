var poke = document.getElementById('poke');

poke.addEventListener('click', () => {
  axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(response => {
      for (let i = 0; i < response.data.results.length; i++) {


        var ol2 = document.createElement('ol')
        ol2.textContent = JSON.stringify(response.data.results[i])
        ol2.style.border = '1px solid black'
        ol2.style.border = '1px solid red'
        ol2.style.color = 'red'
        document.body.appendChild(ol2)
        console.log(response.data.results[i])
      }

    })
    .catch(error => console.log(error))
})