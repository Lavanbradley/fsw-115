







window.addEventListener('load', () => {
  axios.get("http://api.bryanuniversity.edu/lavanbradley/list")
    .then(response => {
      for (let i = 0; i < response.data.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = "Title:" + response.data[i].name + " Price: " + response.data[i].price + " Description: " + response.data[i].description;
        var chkBox = document.createElement("INPUT")
        chkBox.setAttribute("type", "checkbox")
        // chkBox.value = "completed"
        // chkBox.checked = false;
        var span = document.createElement('span');
        span.innerHTML = "completed"
        var x = document.createElement('button');
        x.innerHTML = "X"
        document.body.appendChild(h1)
        document.body.appendChild(x)
        document.body.appendChild(chkBox)
        document.body.appendChild(span)
        if (response.data[i].isComplete === true) {
          h1.style.textDecoration = 'line-through'
          
        }
      }
    })
    .catch(error => console.log(error))
})

const todoForm = document.todoForm;

todoForm.addEventListener('submit', e => {
  e.preventDefault();

  const newTodo = {
    name: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value
  }
  axios.post("http://api.bryanuniversity.edu/lavanbradley/list/", newTodo)
    .then(res => console.log(res))
    .catch(err => console.log(err))
})


x.addEventListener('click', () =>{
  h1.style.textDecoration = 'line-through'
})


//STOP Z HERE!!!!!!!!!!!!
//STOP Z HERE!!!!!!!!!!!!
//STOP Z HERE!!!!!!!!!!!!