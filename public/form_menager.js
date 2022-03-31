const req = new Request()

Contact:{

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
                        for (let textarea of form.getElementById('input_message')) {
                            console.log('test')
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
}

Subscribers:{

    const subscribe_list = document.querySelector('#subscribe_list tbody')
    if(subscribe_list != null){
        req.get('api.php?name=getSubscribers', function(response){
            for(let subscriber of response.subscribers){ 
                printSubscriber(subscriber)
            }
        })
    } 
    
    const SubscribersSubmitHandler = document.querySelector('form')
    if (SubscribersSubmitHandler != null){
        SubscribersSubmitHandler.onsubmit = function (event){
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
}

AddImage: {


    const img_container = document.querySelector('.img_container')
    const image_list = document.querySelector('#image_list tbody')


    if (image_list != null || img_container != null){
        req.get('api.php?name=getImages', function(response){
            for(let image_data of response.addImage){ 
                printImageData(image_data)
            }
        })
    }



    const AddImageHandler = document.querySelector('#img_data')
    if (AddImageHandler != null){
        AddImageHandler.onsubmit = function (event){
            event.preventDefault()
                const url = this.getAttribute('action') //"api.php?name=ImageData"
                let form = this
                req.post(url, new FormData(this), function(response){
                    if (response.hasOwnProperty('entity')) {
                        printImageData(response.entity)
                        for (let input of form.querySelectorAll('input')) {
                            input.value = '';
                        }
                        for (let textarea of form.querySelectorAll('textarea')) {
                            textarea.value = '';
                        }
                        
                    }
            })
        }
    }

    function printImageData(image_data) {
    
            if(image_list !=null){
            
    
                const row = document.createElement('tr')
                const delete_btn = document.createElement('a')
                delete_btn.setAttribute('href', 'api.php?name=delete_image')
                delete_btn.classList.add('btn_accent', 'displ_block')
                delete_btn.textContent = 'delete'
                delete_btn.dataset.id = image_data.id
                delete_btn.onclick = deleteHandler
                


                let cell = document.createElement('td')
                cell.textContent = image_data.id
                row.append(cell)

                cell = document.createElement('td')
                cell.textContent = image_data.image
                row.append(cell)

                cell = document.createElement('td')
                cell.textContent = image_data.title
                row.append(cell)

                cell = document.createElement('td')
                cell.textContent = image_data.short_description
                row.append(cell)

                cell = document.createElement('td')
                cell.textContent = image_data.description
                row.append(cell)

                cell = document.createElement('span')
                cell.append(delete_btn)
                row.append(cell)

                image_list.append(row)
            }


            function deleteHandler(event) {
            event.preventDefault()
            let file_path = image_data.image
             if(file_path){
                const file_path_cont = document.createElement('div')
                file_path_cont.classList.add('file_path_cont')
                img_container.appendChild(file_path_cont)
                file_path_cont.textContent = file_path
                }
                const url = this.getAttribute('href')
                const data = new FormData()
                data.append('id', this.dataset.id)
                const btn = this

                req.post(url, data, function (response) {
                    btn.parentNode.parentNode.remove()
                })
                 
             
            }
          
            if(image_list !=null){
                
                document.getElementById('fileToUpload').onchange = function (event){
                    const file = this.files[0]
                    const preview = document.querySelector('img')
                    document.getElementById("image").value = this.files[0].name
                    
                    const reader = new FileReader()
                  
                    reader.addEventListener("load", function () {
                      preview.src = reader.result
                    }, false)
                  
                    if (file) {
                      reader.readAsDataURL(file)
                      
                    }
                }
                  

           
            

                document.getElementById("creat").onclick = function(){

                    const img_box = document.createElement('div')
                    
                    img_box.classList.add('img_box')
                
                    const img_link = document.createElement('a')
                    img_link.setAttribute('href', './gallery.html')
                    img_link.classList.add('img_link')
                
                    const img_prewiev = document.createElement('img')
                    img_prewiev.setAttribute('src', '#')
                    img_prewiev.src = './uploads/' + document.getElementById("image").value
                   
                    img_prewiev.classList.add('img_prewiev')
                
                    const img_info = document.createElement('div')
                    img_info.classList.add('img_info')
                
                    const title = document.createElement('h3')
                    title.textContent = document.getElementById("image_title").value
                  
                
                    const description = document.createElement('p')
                    description.textContent = document.getElementById("image_short_description").value
                   
                    
                    const img_container = document.querySelector('.img_container')
                    img_container.appendChild(img_box)
                    img_box.appendChild(img_link)
                    img_link.appendChild(img_prewiev)
                    img_link.appendChild(img_info)
                    img_info.appendChild(title)
                    img_info.appendChild(description)
                
                }
            }
           

            if (img_container != null){

                const img_box = document.createElement('div')
                    
                img_box.classList.add('img_box')
            
                const img_link = document.createElement('a')
                img_link.setAttribute('href', './gallery.html')
                img_link.classList.add('img_link')
            
                const img_prewiev = document.createElement('img')
                img_prewiev.setAttribute('src', '#')
                img_prewiev.src = './uploads/' + image_data.image
                img_prewiev.classList.add('img_prewiev')
            
                const img_info = document.createElement('div')
                img_info.classList.add('img_info')
            
                const title = document.createElement('h3')
                title.textContent = image_data.title
            
                const description = document.createElement('p')
                description.textContent = image_data.short_description
                
                const img_container = document.querySelector('.img_container')
                img_container.appendChild(img_box)
                img_box.appendChild(img_link)
                img_link.appendChild(img_prewiev)
                img_link.appendChild(img_info)
                img_info.appendChild(title)
                img_info.appendChild(description)

            }
        }
    }



