const burMenu = document.getElementById("bur");
const everyElse = document.getElementById("main_cont");
const list = document.getElementById("down");

burMenu.addEventListener("click", () =>{
    console.log(everyElse, list)
    if(everyElse.style.display === 'none') {
        list.style.display = 'block';
        everyElse.style.display = 'none';
    } else {
        everyElse.style.display = 'none';
        list.style.display = 'block';
    }
})

const listBur = document.getElementById("listForBut");

burMenu.addEventListener("click", () =>{
    if(everyElse.style.display === 'none'){
        listBur.style.display = 'block';
    }else{
        listBur.style.display === 'none';
    }
})