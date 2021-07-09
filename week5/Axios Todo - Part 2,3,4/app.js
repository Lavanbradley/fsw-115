const stuff = document.getElementById('stuff');
function getData() {
  axios.get("http://api.bryanuniversity.edu/lavanbradley/list/")
    .then(response => newData(response.data))
    .catch(error => console.log(error))
}




getData();

function clearData() {
  while (stuff.firstChild) {
    stuff.removeChild(stuff.firstChild)
  }
}


function newData(data) {
  clearData()
  for (let i = 0; i < data.length; i++) {

    let completed = data[i].isComplete;
    console.log('Completed: ', completed)
    let id = data[i]._id;
    //console.log(id)
    const h1 = document.createElement('h1')
    h1.textContent = "Title:" + data[i].name + " Price: " + data[i].price + " Description: " + data[i].description;
    var chkBox = document.createElement("INPUT")
    chkBox.setAttribute("type", "checkbox")
    stuff.appendChild(h1)
    stuff.appendChild(chkBox)
    chkBox.checked = data[i].isComplete;
    chkBox.onclick = function () {


      //axios.put("http://api.bryanuniversity.edu/lavanbradley/list/" + data[i]._id, { "completed": !data[i].isComplete })
      axios.put("http://api.bryanuniversity.edu/lavanbradley/list/" + data[i]._id, { "isComplete": !completed })
        .then(response => {
          getData()
        })
        .catch(error => console.log(error))
      stuff.appendChild(chkBox);
    }
    var span = document.createElement('span');
    span.innerHTML = "completed"
    stuff.appendChild(span)
    var x = document.createElement('button');
    x.innerHTML = "X"

    stuff.appendChild(x)


    x.onclick = () => {

      //axios.delete("http://api.bryanuniversity.edu/lavanbradley/list/" + data[i]._id)

      console.log('inside the delete event')
      console.log('id: ', id)


      //console.log("http://api.bryanuniversity.edu/lavanbradley/list/" + id)

      axios.delete("http://api.bryanuniversity.edu/lavanbradley/list/" + id)
        .then(response => {
          getData()
        })
        .catch(error => console.log(error))
    }

    if (data[i].isComplete === true) {
      h1.style.textDecoration = 'line-through'

    }


  }

}



const todoForm = document.todoForm;
var post = document.getElementById('post')
post.addEventListener('click', e => {
  e.preventDefault();

  console.log('inside event listener')

  const newTodo = {
    name: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value
  }
  axios.post("http://api.bryanuniversity.edu/lavanbradley/list/", newTodo)
    .then(response => {
      getData();
      //newData(response.data))
    })

    .catch(err => console.log(err))
})




