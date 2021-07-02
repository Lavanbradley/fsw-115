var bryan = document.getElementById('bryan')

bryan.addEventListener('click', () => {
  axios.get("http://api.bryanuniversity.edu/lavanbradley/list/")
    .then(response => {
      for (let i = 0; i < response.data.length; i++) {


        var ol = document.createElement('ol')
        ol.textContent = JSON.stringify(response.data[i])
        ol.style.border = '1px solid red'
        ol.style.color = 'red'
        document.body.appendChild(ol)
      }

    })
    .catch(error => console.log(error))
})










