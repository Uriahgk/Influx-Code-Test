const frame90 = document.querySelectorAll("#frame-90 > .cardselector");
frame90.forEach(each=>{
    each.onclick = function(){
        frame90.forEach((f) => f.classList.remove("active")) 
        each.classList.add("active")
        }
});



