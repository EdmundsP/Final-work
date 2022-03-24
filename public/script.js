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
    delete_btn.classList.add('delete')
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

        cell = document.createElement('td')
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


//1.Dropdown menu ********************************
let dropdown = document.querySelector('.dropdown')
let drop_active_cont = document.querySelector('.drop_active_cont')
let underline_shop = document.querySelector('.underline_shop')
let btn_drop = document.querySelector('.btn_drop')
let drop_box = document.querySelector('.drop_box')
let drop_box_mob = document.querySelector('.drop_box_mob')
let icon_open = document.querySelector('.icon_open')
//let drop_content = document.querySelector('.drop_content')


//drop box mob opens on hover
 icon_open.onmouseover = function(event){
    event.target.classList.contains('drop_box_mob')
    drop_box_mob.style.display ='flex'
}
drop_box_mob.onmouseleave = function(event){
    event.target.classList.contains('drop_box_mob')
    drop_box_mob.style.display ='none'

}

// dropdown menu on fule screen
dropdown.onmouseover = function(event){
    event.target.classList.contains('btn_drop')
    drop_box.style.display ='flex'
    drop_active_cont.style.display ='flex' 
}
dropdown.onmouseleave = function(event){
    event.target.classList.contains('btn_drop')
    drop_box.style.display ='none'
    drop_active_cont.style.display ='none' 
}
drop_box.onmouseover = function(){
    underline_shop.classList.remove('underline_shop')
}
drop_box.onmouseleave = function(){
    underline_shop.classList.add('underline_shop')
}
// japieregulē drop_active_cont un btn_drop stilu 

//2. open mobile menu and close mobile menu 
let mobile_nav = document.querySelector('.small_screen_main')
let hiden_menu = document.querySelector('.hiden_menu')
let close_btn = document.querySelector('.close')

hiden_menu.onclick = function(event){
    mobile_nav.style.display ='flex'
}
close_btn.onclick = function(event){
    mobile_nav.style.display ='none'
}

// search expend*** 

let search_icon = document.querySelector('.search')
let search_expend = document.querySelector('.search_expend')
let search_close = document.querySelector('.close__dark') 

search_icon.onclick = function(event){
    search_expend.style.display = 'flex'
}
search_close.onclick = function(event){
    search_expend.style.display = 'none'
}