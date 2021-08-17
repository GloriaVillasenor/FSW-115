const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
    }
}

function showData(pokemon){
    for (let i = 0; i < pokemon.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = "name: " + pokemon[i].name + "resource inner uri: " + pokemon[i].resource_uri
        document.body.appendChild(h1)     
    }
}