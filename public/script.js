
Dropdown_menu:{ 

    let dropdown = document.querySelector('.dropdown')
    let drop_active_cont = document.querySelector('.drop_active_cont')
    let underline_shop = document.querySelector('.underline_shop')
    let btn_drop = document.querySelector('.btn_drop')
    let drop_box = document.querySelector('.drop_box')
    let drop_box_mob = document.querySelector('.drop_box_mob')
    let icon_open = document.querySelector('.icon_open')

    drop_box_mob_opens_on_hover: {

        icon_open.onmouseover = function(event){
            event.target.classList.contains('drop_box_mob')
            drop_box_mob.style.display ='flex'
        }
        drop_box_mob.onmouseleave = function(event){
            event.target.classList.contains('drop_box_mob')
            drop_box_mob.style.display ='none'

        }
    }
    dropdown_menu_full_screen: {

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
    }
}
open_close_mobile_menu: {

    let mobile_nav = document.querySelector('.small_screen_main')
    let hiden_menu = document.querySelector('.hiden_menu')
    let close_btn = document.querySelector('.close')

    hiden_menu.onclick = function(event){
        mobile_nav.style.display ='flex'
    }
    close_btn.onclick = function(event){
        mobile_nav.style.display ='none'
    }
}
search_expend: {

    let search_icon = document.querySelector('.search')
    let search_expend = document.querySelector('.search_expend')
    let search_close = document.querySelector('.close__dark') 

    search_icon.onclick = function(event){
        search_expend.style.display = 'flex'
    }
    search_close.onclick = function(event){
        search_expend.style.display = 'none'
    }

}
