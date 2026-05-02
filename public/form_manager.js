const req = new Request()

// ── Contact ──────────────────────────────────────────────────────────────────
;(function () {
    const contact_list = document.querySelector('#contact_list tbody')
    if (contact_list) {
        req.get('api.php?name=getContact', function (response) {
            for (const item of response.contact) printContact(item)
        })
    }

    const contactForm = document.getElementById('ContactSubmitHandler')
    if (contactForm) {
        contactForm.onsubmit = function (event) {
            event.preventDefault()
            if (!document.getElementById('subscription_check').checked) {
                document.getElementById('alert').textContent = 'Please check the checkbox!'
                return
            }
            const form = this
            req.post(this.getAttribute('action'), new FormData(this), function (response) {
                if (response.hasOwnProperty('entity')) {
                    printContact(response.entity)
                    form.reset()
                    document.getElementById('alert').textContent = ''
                    const success = document.getElementById('contact_success')
                    if (success) success.style.display = 'block'
                }
            })
        }
    }

    function printContact(item) {
        if (!contact_list) return
        const row = document.createElement('tr')
        const del = makeDeleteBtn('api.php?name=delete', item.id, deleteHandler)

        appendCells(row, [item.name, item.email, item.message])
        const cell = document.createElement('span')
        cell.append(del)
        row.append(cell)
        contact_list.append(row)
    }

    function deleteHandler(event) {
        event.preventDefault()
        const data = new FormData()
        data.append('id', this.dataset.id)
        const btn = this
        req.post(this.getAttribute('href'), data, function () { btn.closest('tr').remove() })
    }
})()

// ── Subscribers ───────────────────────────────────────────────────────────────
;(function () {
    const subscribe_list = document.querySelector('#subscribe_list tbody')
    if (subscribe_list) {
        req.get('api.php?name=getSubscribers', function (response) {
            for (const item of response.subscribers) printSubscriber(item)
        })
    }

    const subForm = document.getElementById('SubscribersSubmitHandler')
    if (subForm) {
        subForm.onsubmit = function (event) {
            event.preventDefault()
            const form = this
            req.post(this.getAttribute('action'), new FormData(this), function (response) {
                if (response.hasOwnProperty('entity')) {
                    printSubscriber(response.entity)
                    form.reset()
                }
            })
        }
    }

    function printSubscriber(item) {
        if (!subscribe_list) return
        const row = document.createElement('tr')
        const del = makeDeleteBtn('api.php?name=delete_subscriber', item.id, deleteHandler)

        appendCells(row, [item.email])
        const cell = document.createElement('span')
        cell.append(del)
        row.append(cell)
        subscribe_list.append(row)
    }

    function deleteHandler(event) {
        event.preventDefault()
        const data = new FormData()
        data.append('id', this.dataset.id)
        const btn = this
        req.post(this.getAttribute('href'), data, function () { btn.closest('tr').remove() })
    }
})()

// ── Images ────────────────────────────────────────────────────────────────────
;(function () {
    const img_container = document.querySelector('.img_container')
    const image_list    = document.querySelector('#image_list tbody')
    const in_shop       = document.querySelector('.in_shop')

    if (image_list || img_container || in_shop) {
        const category = in_shop ? in_shop.dataset.category : null
        const url = category
            ? 'api.php?name=getImages&category=' + encodeURIComponent(category)
            : 'api.php?name=getImages'
        req.get(url, function (response) {
            for (const item of response.addImage) printImageData(item)
        })
    }

    const addImageForm = document.querySelector('#img_data')
    if (addImageForm) {
        addImageForm.onsubmit = function (event) {
            event.preventDefault()
            const form = this
            req.post(this.getAttribute('action'), new FormData(this), function (response) {
                if (response.hasOwnProperty('entity')) {
                    printImageData(response.entity)
                    form.reset()
                    const preview = document.getElementById('upload_preview')
                    if (preview) { preview.src = ''; preview.style.display = 'none' }
                }
            })
        }
    }

    const fileInput   = document.getElementById('fileToUpload')
    const uploadForm  = document.getElementById('upload_form')
    const uploadStatus = document.getElementById('upload_status')

    if (fileInput) {
        fileInput.onchange = function () {
            const file = this.files[0]
            if (!file) return
            const preview = document.getElementById('upload_preview')
            const reader  = new FileReader()
            reader.onload = function (e) {
                if (preview) { preview.src = e.target.result; preview.style.display = 'block' }
            }
            reader.readAsDataURL(file)
        }
    }

    if (uploadForm) {
        uploadForm.onsubmit = function (e) {
            e.preventDefault()
            const file = fileInput && fileInput.files[0]
            if (!file) { if (uploadStatus) uploadStatus.textContent = 'Please select a file first.'; return }

            if (uploadStatus) { uploadStatus.style.color = '#888'; uploadStatus.textContent = 'Uploading...' }

            const formData = new FormData()
            formData.append('fileToUpload', file)

            req.post('Uploads.php', formData, function (response) {
                const imageInput = document.getElementById('image')
                if (imageInput) imageInput.value = response.filename
                if (uploadStatus) { uploadStatus.style.color = 'green'; uploadStatus.textContent = '✓ Uploaded: ' + response.filename }
            })
        }
    }

    function printImageData(image_data) {
        const price = parseFloat(image_data.price) > 0
            ? '€' + parseFloat(image_data.price).toFixed(2)
            : 'Contact for price'

        if (in_shop) {
            const img_box   = document.createElement('div')
            img_box.classList.add('img_box')

            const img_link  = document.createElement('a')
            img_link.href   = 'product.php?id=' + image_data.id
            img_link.classList.add('img_link', 'quick')

            const img_el    = document.createElement('img')
            img_el.src      = './uploads/' + image_data.image
            img_el.alt      = image_data.title
            img_el.classList.add('img_prewiev')

            const quick_view = document.createElement('div')
            quick_view.classList.add('quick_view')
            quick_view.textContent = 'View'

            const info      = document.createElement('div')

            const title     = document.createElement('h3')
            title.classList.add('h3_darck')
            title.textContent = image_data.title

            const desc      = document.createElement('p')
            desc.classList.add('p_update')
            desc.textContent = image_data.short_description

            const priceEl   = document.createElement('p')
            priceEl.classList.add('product_price_small')
            priceEl.textContent = price

            const cartBtn   = document.createElement('button')
            cartBtn.classList.add('btn_accent', 'btn_small')
            cartBtn.textContent = image_data.category === 'print' ? 'Order Print' : 'Add to Cart'
            cartBtn.onclick = function (e) {
                e.preventDefault()
                addToCart(image_data.id, image_data.title, image_data.price, image_data.image)
            }

            in_shop.appendChild(img_box)
            img_box.appendChild(img_link)
            img_link.appendChild(img_el)
            img_link.appendChild(quick_view)
            img_link.appendChild(info)
            info.appendChild(title)
            info.appendChild(desc)
            info.appendChild(priceEl)
            info.appendChild(cartBtn)
        }

        if (img_container) {
            const img_box  = document.createElement('div')
            img_box.classList.add('img_box')

            const img_link = document.createElement('a')
            img_link.href  = 'product.php?id=' + image_data.id
            img_link.classList.add('img_link')

            const img_el   = document.createElement('img')
            img_el.src     = './uploads/' + image_data.image
            img_el.alt     = image_data.title
            img_el.classList.add('img_prewiev')

            const img_info = document.createElement('div')
            img_info.classList.add('img_info')

            const title    = document.createElement('h3')
            title.textContent = image_data.title

            const desc     = document.createElement('p')
            desc.textContent = image_data.short_description

            img_container.appendChild(img_box)
            img_box.appendChild(img_link)
            img_link.appendChild(img_el)
            img_link.appendChild(img_info)
            img_info.appendChild(title)
            img_info.appendChild(desc)
        }

        if (image_list) {
            const row = document.createElement('tr')
            const del = makeDeleteBtn('api.php?name=delete_image', image_data.id,
                function (event) {
                    event.preventDefault()
                    const data = new FormData()
                    data.append('id', this.dataset.id)
                    const btn = this
                    req.post(this.getAttribute('href'), data, function () { btn.closest('tr').remove() })
                }
            )

            const thumb = document.createElement('img')
            thumb.src   = './uploads/' + image_data.image
            thumb.style.cssText = 'width:60px;height:60px;object-fit:cover;'

            const thumbCell = document.createElement('td')
            thumbCell.append(thumb)

            const priceText = parseFloat(image_data.price) > 0
                ? '€' + parseFloat(image_data.price).toFixed(2) : '—'

            appendCells(row, [image_data.id])
            row.append(thumbCell)
            appendCells(row, [
                image_data.title,
                image_data.category === 'original' ? 'Original' : 'Print',
                priceText,
                image_data.short_description
            ])
            const cell = document.createElement('span')
            cell.append(del)
            row.append(cell)
            image_list.append(row)
        }
    }
})()

// ── Helpers ───────────────────────────────────────────────────────────────────
function makeDeleteBtn(href, id, handler) {
    const btn = document.createElement('a')
    btn.href  = href
    btn.classList.add('btn_accent', 'displ_block')
    btn.textContent  = 'delete'
    btn.dataset.id   = id
    btn.onclick      = handler
    return btn
}

function appendCells(row, values) {
    for (const v of values) {
        const cell = document.createElement('td')
        cell.textContent = v
        row.append(cell)
    }
}
