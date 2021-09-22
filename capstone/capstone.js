const myContent = document.getElementById("myContent")
const myOrderedList = document.createElement('ol')
console.log(myContent)
axios.get("http://api.bryanuniversity.edu/gloria/list/").then(response => {
    console.log(response)
    for(let i = 0; i < response.data.length; i++){
        let li = document.createElement('li')
        let title = document.createElement('h2')
        
        title.textContent = response.data[i].name

        var checkbox1 = document.createElement('input')
        checkbox1.type = "checkbox"

        var remove = document.createElement('button')
        remove.textContent = "delete"

        if (response.data[i].isComplete){
            title.style.textDecorationLine = "line-through"
            checkbox1.checked = true
        }
        checkbox1.addEventListener('change', function(e) {
            var checkbox1 = e.target
            console.log('checkbx1 event listener', checkbox1)

            var info = response.data[i]._id

            var obj =
             {isComplete: checkbox1.checked}

            console.log(obj)

            axios.put("http://api.bryanuniversity.edu/gloria/list/" + info, obj).then(resp => {
                console.log(resp, obj)
                if(obj.isComplete){
                    title.style.textDecorationLine = "line-through"
                    checkbox1.checked = true
                } else if(!obj.isComplete) {
                    title.style.textDecorationLine = "none"
                    checkbox1.checked = false
                }
            })

        })

        remove.onclick = () => {
            console.log('button clicked!')

            var info = response.data[i]._id

            axios.delete("http://api.bryanuniversity.edu/gloria/list/" + info).then(resp => {
                console.log(resp)
                li.remove()

            })

        }

        li.append(title, checkbox1, remove)
        myOrderedList.appendChild(li)

        function test(event){
            event.preventDefault();
        
        }
    }

    myContent.appendChild(myOrderedList)
})
.catch(err => console.log(err))
