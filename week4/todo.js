const myContent = document.getElementById("myContent")
const myOrderedList = document.createElement('ol')

axios.get("http://api.bryanuniversity.edu/gloria/list/").then(response => {
    console.log(response)
    for(let i = 0; i < response.data.length; i++){
        let li = document.createElement('li')
        let title = document.createElement('h2')
        
        title.textContent = response.data[i].name

        if (response.data[i].isComplete){
            title.style.textDecorationLine = "line-through"
        }

        li.appendChild(title)
        myOrderedList.appendChild(li)
    }
    myContent.appendChild(myOrderedList)
    .catch(err => console.log(err))
})
