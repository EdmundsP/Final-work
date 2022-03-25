const req = new Request()

req.get('api.php?name=getContact', function(response){
    for(let contactor of response.contact){ 
        printContact(contactor)
    }
})

document.querySelector('form').onsubmit = function(event){
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

function printContact(contactor) {
    const row = document.createElement('tr')
    const delete_btn = document.createElement('a')
    delete_btn.setAttribute('href', 'api.php?name=delete')
    delete_btn.classList.add('btn_accent', 'displ_block')
    delete_btn.textContent = 'delete'
    delete_btn.dataset.id = contactor.id
    delete_btn.onclick = deleteHandler

        let cell = document.createElement('td')
        cell.textContent = contactor.name
        row.append(cell)

        cell = document.createElement('td')
        cell.textContent = contactor.email
        row.append(cell)

        cell = document.createElement('td')
        cell.textContent = contactor.message
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