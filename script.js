/* .show klasi ar js jāpiešķi
.drop_box nospiezot uz .btn_drop pogas */
//1.
let btn_drop = document.querySelector('.btn_drop')
let drop_box = document.querySelector('.drop_box')

btn_drop.onmouseover = function(event){
    drop_box.style.display ='flex'
}
drop_box.onmouseleave = function(event){
    drop_box.style.display ='none'
    }



 // pazūd hover no btn_drop kad uzbraucu uz drop box
//nepazūd menu ja no btn_drop nobrauc neuzbraucot drop_box

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