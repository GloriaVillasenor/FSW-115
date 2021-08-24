const submitBtn = document.getElementById("submit")

submitBtn.addEventListener('click', function() {
    axios.get("https://swapi.dev/api/starships").then(response => {
        for(let i = 0; i < response.data.results.length; i++) {
            let title = document.createElement('h1')
            title.textContent = response.data.results[i].name    
            document.body.appendChild(title)
    }
    })   
    .catch(err => console.log(err))

})

