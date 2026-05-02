// ── Dropdown menu ─────────────────────────────────────────────────────────────
;(function () {
    const dropdown        = document.querySelector('.dropdown')
    const drop_active_cont = document.querySelector('.drop_active_cont')
    const underline_shop  = document.querySelector('.underline_shop')
    const drop_box        = document.querySelector('.drop_box')
    const drop_box_mob    = document.querySelector('.drop_box_mob')
    const icon_open       = document.querySelector('.icon_open')

    if (icon_open && drop_box_mob) {
        icon_open.onmouseover  = function () { drop_box_mob.style.display = 'flex' }
        drop_box_mob.onmouseleave = function () { drop_box_mob.style.display = 'none' }
    }

    if (dropdown && drop_box) {
        dropdown.onmouseover = function () {
            drop_box.style.display = 'flex'
            if (drop_active_cont) drop_active_cont.style.display = 'flex'
        }
        dropdown.onmouseleave = function () {
            drop_box.style.display = 'none'
            if (drop_active_cont) drop_active_cont.style.display = 'none'
        }
        drop_box.onmouseover  = function () { if (underline_shop) underline_shop.classList.remove('underline_shop') }
        drop_box.onmouseleave = function () { if (underline_shop) underline_shop.classList.add('underline_shop') }
    }
})()

// ── Mobile menu ───────────────────────────────────────────────────────────────
;(function () {
    const mobile_nav = document.querySelector('.small_screen_main')
    const hiden_menu = document.querySelector('.hiden_menu')
    const close_btn  = document.querySelector('.close')

    if (hiden_menu) hiden_menu.onclick = function (e) { e.preventDefault(); if (mobile_nav) mobile_nav.style.display = 'flex' }
    if (close_btn)  close_btn.onclick  = function (e) { e.preventDefault(); if (mobile_nav) mobile_nav.style.display = 'none' }
})()

// ── Search expand ─────────────────────────────────────────────────────────────
;(function () {
    const search_icon   = document.querySelector('.search')
    const search_expend = document.querySelector('.search_expend')
    const search_close  = document.querySelector('.close__dark')

    if (search_icon)  search_icon.onclick  = function (e) { e.preventDefault(); if (search_expend) search_expend.style.display = 'flex' }
    if (search_close) search_close.onclick = function (e) { e.preventDefault(); if (search_expend) search_expend.style.display = 'none' }
})()

// ── Shopping Cart (localStorage) ─────────────────────────────────────────────
function getCart() {
    try { return JSON.parse(localStorage.getItem('cart') || '[]') } catch (e) { return [] }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function addToCart(id, title, price, image) {
    const cart     = getCart()
    const existing = cart.find(function (item) { return item.id === id })
    if (existing) {
        existing.qty += 1
    } else {
        cart.push({ id: id, title: title, price: parseFloat(price) || 0, image: image, qty: 1 })
    }
    saveCart(cart)
    updateCartCount()
    openCart()
}

function removeFromCart(id) {
    saveCart(getCart().filter(function (item) { return item.id !== id }))
    updateCartCount()
    renderCart()
}

function updateCartCount() {
    const count  = getCart().reduce(function (sum, item) { return sum + item.qty }, 0)
    const badge  = document.getElementById('cart_count')
    if (!badge) return
    badge.textContent  = count
    badge.style.display = count > 0 ? 'flex' : 'none'
}

function openCart() {
    const drawer  = document.getElementById('cart_drawer')
    const overlay = document.getElementById('cart_overlay')
    if (drawer)  drawer.classList.add('open')
    if (overlay) overlay.classList.add('open')
    renderCart()
}

function closeCart() {
    const drawer  = document.getElementById('cart_drawer')
    const overlay = document.getElementById('cart_overlay')
    if (drawer)  drawer.classList.remove('open')
    if (overlay) overlay.classList.remove('open')
}

function renderCart() {
    const cart      = getCart()
    const container = document.getElementById('cart_items')
    const totalEl   = document.getElementById('cart_total')
    if (!container) return

    if (cart.length === 0) {
        container.innerHTML = '<p class="p_update" style="padding:1.5rem 1rem;">Your cart is empty.</p>'
        if (totalEl) totalEl.textContent = '€0.00'
        return
    }

    container.innerHTML = ''
    let total = 0
    for (const item of cart) {
        total += item.price * item.qty
        const row = document.createElement('div')
        row.classList.add('cart_item')
        row.innerHTML =
            '<img src="./uploads/' + item.image + '" alt="' + item.title + '" class="cart_item_img">' +
            '<div class="cart_item_info">' +
                '<p class="cart_item_title">' + item.title + '</p>' +
                '<p class="cart_item_price">€' + item.price.toFixed(2) + ' &times; ' + item.qty + '</p>' +
            '</div>' +
            '<button class="cart_item_remove" onclick="removeFromCart(' + item.id + ')" aria-label="Remove">&times;</button>'
        container.append(row)
    }
    if (totalEl) totalEl.textContent = '€' + total.toFixed(2)
}

;(function () {
    const cart_open    = document.getElementById('cart_open')
    const cart_close   = document.getElementById('cart_close')
    const cart_overlay = document.getElementById('cart_overlay')

    if (cart_open)    cart_open.onclick    = function (e) { e.preventDefault(); openCart() }
    if (cart_close)   cart_close.onclick   = function (e) { e.preventDefault(); closeCart() }
    if (cart_overlay) cart_overlay.onclick = closeCart

    updateCartCount()
})()
