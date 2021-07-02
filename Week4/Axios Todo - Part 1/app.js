


var title = document.getElementById('title')
var todo = document.getElementById('todo')
var post = document.getElementById('post')
var todoValue = JSON.stringify(todo.value);
const myForm = document.getElementById('myForm');
window.addEventListener('load', () => {
  axios.get("http://api.bryanuniversity.edu/lavanbradley/list")
    .then(response => {
      for (let i = 0; i < response.data.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].name + " " + response.data[i].description
        if (response.data[i].isComplete === true) {
          h1.style.textDecoration = 'line-through'
        }
        document.body.appendChild(h1)

      }
    })
    .catch(error => console.log(error))
})
// myForm.addEventListener('submit', function (e){
//   e.preventDefault();

//   const formData = new FormData(this);

//   fetch("http://api.bryanuniversity.edu/lavanbradley/list/",{
//     method: 'post',
//     body: formData
//   }).then(function (response){
//     return response.text();
//   }).then(function(text){
//     console.log(text)
//   }).catch(function(error){
//     console.error(error)
//   })
// })


// post.addEventListener('click', () => {
// axios.post("http://api.bryanuniversity.edu/lavanbradley/list", {
//   'description': todoValue
//   // description: 'Hello world'
// })
// .then(response => {
//   console.log(response)
// })
// })



// CORS Error, CORS-anywhere google it when you happen upon this error
//http://cors-anywher.herokuapp.com/


//Get one

// axios.get("http://api.bryanuniversity.edu/lavanbradley/list/6dcd891d-1f2a-4b17-9835-7249f2120d35")
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error))


//Print to screen

// axios.get("http://api.bryanuniversity.edu/lavanbradley/list")
//   .then(response => {
//     for (let i = 0; i < response.data.length; i++) {
//       const h1 = document.createElement('h1')
//       h1.textContent = response.data[i].name
//       document.body.appendChild(h1)
//     }
//   })
//   .catch(error => console.log(error))



//Print to screen one to screen
