
const stuff = document.getElementById('stuff');
var put1 = document.getElementById('put1')
var put2 = document.getElementById('put2')
var put3 = document.getElementById('put3')
var addName = document.getElementById('addName')






















function data() {
  const rick = axios.get("https://rickandmortyapi.com/api/character")
    .then(res => { console.log(res)
      const newTodo = {
        name: res.data.results[1].name
      }
      axios.put("http://api.bryanuniversity.edu/lavanbradley/list/30ea74cf-338b-477b-bd62-7cc09a8c0358/", newTodo)
    })
    .catch(err => console.log(err))
}
data()


// const newTodo ={
//   name: todoForm.title.value,
//   price: todoForm.price.value,
//   description: todoForm.description.value
// }