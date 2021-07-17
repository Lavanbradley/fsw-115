const { default: axios } = require("axios");

async function getData(){
  const lukeData = await axios.get("https://swapi.dev/api/people/1")
  
}