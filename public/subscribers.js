const req = new Request()

const subscribe_list = document.querySelector('#subscribe_list tbody')
if(subscribe_list != null){
    req.get('api.php?name=getSubscribers', function(response){
        for(let subscriber of response.subscribers){ 
            printSubscriber(subscriber)
        }
    })
}


const formSubmitHandler = document.querySelector('form')
if (formSubmitHandler != null){
    formSubmitHandler.onsubmit = function (event){
        event.preventDefault()
            const url = this.getAttribute('action')//action="api.php?name=subscribers"
            let form = this
            req.post(url, new FormData(this), function(response){
                if (response.hasOwnProperty('entity')) {
                    printSubscriber(response.entity)
                    for (let input of form.querySelectorAll('input')) {
                        input.value = '';
                    }
                } 
            })
    }
}

function printSubscriber(subscriber) {
    
    if(subscribe_list != null) {
        
        const row = document.createElement('tr')
        const delete_btn = document.createElement('a')
        delete_btn.setAttribute('href', 'api.php?name=delete_subscriber')
        delete_btn.classList.add('btn_accent', 'displ_block')
        delete_btn.textContent = 'delete'
        delete_btn.dataset.id = subscriber.id
        delete_btn.onclick = deleteHandler

        cell = document.createElement('td')
        cell.textContent = subscriber.email
        row.append(cell)

        cell = document.createElement('span')
        cell.append(delete_btn)
        row.append(cell)

        subscribe_list.append(row)
    }
}


function deleteHandler(event) {
    event.preventDefault()
    const url = this.getAttribute('href')
    const data = new FormData()
    data.append('id', this.dataset.id)
    const btn = this

    req.post(url, data, function (response) {
        btn.parentNode.parentNode.remove()
    })  
}