const stuff = document.getElementById('stuff');
var put1 = document.getElementById('put1')
var put2 = document.getElementById('put2')
var put3 = document.getElementById('put3')


async function todo(){
  const data = await axios.get("http://api.bryanuniversity.edu/lavanbradley/list/")
  Promise.all(data)
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}
todo()

