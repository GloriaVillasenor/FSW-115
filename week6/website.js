const getData = async () => {
    let response;
    let people;
    try{
        const character = await axios.get('https://rickandmortyapi.com/api/character/583')
        console.log('character: ', character)

        const location = await axios.get(character.data.location.url)
        console.log('location:', location)

        const episode = await axios.get(character.data.episode[0])
        console.log(episode)

        document.getElementById('character').innerText = character.data.name
        document.getElementById('character-img').src = character.data.image
        document.getElementById('location').innerText = location.data.name
        document.getElementById('episode').innerText = episode.data.name
    }
    catch(error) {
        console.log(error)
    }
}
getData();