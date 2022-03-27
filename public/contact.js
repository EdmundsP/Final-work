const req = new Request()

const contact_list = document.querySelector('#contact_list tbody')
if (contact_list != null){
    req.get('api.php?name=getContact', function(response){
        for(let connection of response.contact){ 
            printContact(connection)
        }
    })
}

const ContactSubmitHandler = document.querySelector('form')
if (ContactSubmitHandler != null){
    ContactSubmitHandler.onsubmit = function(event){
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

    if(contact_list !=null){
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

            contact_list.append(row)
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