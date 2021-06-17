fetch('https://swapi.dev/api/people/').then(Response => Response.json()).then(characters => showCharacters(characters.results));

showCharacters = characters => {
  const charactersDiv = document.querySelector('.people');
  characters.forEach(character => {
    const characterElement = document.createElement('p');
    var people = JSON.stringify(character)
    characterElement.innerText = `${people}`

    charactersDiv.append(characterElement);
  })
}
