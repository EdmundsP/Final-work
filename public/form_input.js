const req = new Request()

Contact:{

    req.get('api.php?name=getContact', function(response){
        for(let connection of response.contact){ 
            printContact(connection)
        }
    })
    const form = document.querySelector('form')
    if (form != null){
        form.onsubmit = function(event){
            event.preventDefault()
            if (document.getElementById('subscription_check').checked ){
                const url = this.getAttribute('action')
                let form = this
                req.post(url, new FormData(this), function(response){
                    if (response.hasOwnProperty('entity')) {
                        printContact(response.entity)
                        for (let input of form.querySelectorAll('input')) {
                            input.value = '';
                            input.checked = false;
                        }
                        for (let textarea of form.querySelectorAll('textarea')) {
                            textarea.value = '';
                        }
                        document.getElementById('alert').textContent = ''
        
                    }
                })
            }
            else{
                document.getElementById('alert').textContent = "please check the checkbox!"
            }
        }
    }   
    
    function printContact(connection) {
        const row = document.createElement('tr')
        const delete_btn = document.createElement('a')
        delete_btn.setAttribute('href', 'api.php?name=delete')
        delete_btn.classList.add('btn_accent', 'displ_block')
        delete_btn.textContent = 'delete'
        delete_btn.dataset.id = connection.id
        delete_btn.onclick = deleteHandler
    
            let cell = document.createElement('td')
            cell.textContent = connection.name
            row.append(cell)
    
            cell = document.createElement('td')
            cell.textContent = connection.email
            row.append(cell)
    
            cell = document.createElement('td')
            cell.textContent = connection.message
            row.append(cell)
    
            cell = document.createElement('span')
            cell.append(delete_btn)
            row.append(cell)
    
            document.querySelector('#contact_list tbody').append(row)
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
}


Subscribers:{

    req.get('api.php?name=getSubscribers', function(response){
        for(let subscriber of response.subscribers){ 
            printSubscriber(subscriber)
        }
    })
    
    //document.querySelector('form').onsubmit = submitHandler
    
    function submitHandler(event){
        event.preventDefault()
            const url = this.getAttribute('action')
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
    
    function printSubscriber(subscriber) {
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
    
        document.querySelector('#subscribe_list tbody').append(row)
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
}

