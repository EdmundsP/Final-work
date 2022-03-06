/* .show klasi ar js jāpiešķi
.drop_box nospiezot uz .btn_drop pogas */

let btn_drop = document.querySelector('.btn_drop')
let drop_box = document.querySelector('.drop_box')

btn_drop.onmouseover = function(event){
    drop_box.classList.add('show')
}
drop_box.onmouseleave = function(event){
    drop_box.classList.remove('show')
    }
 // pazūd hover no btn_drop kad uzbraucu uz drop box
//nepazūd menu ja no btn_drop nobrauc neuzbraucot drop_box