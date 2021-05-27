window.addEventListener("load", () => {
    var menu=document.getElementById("hamburguesa");
    options=document.querySelectorAll("div.barraN");
    menu.addEventListener("click", ()=>{
        options.forEach(element => {
           element.classList.toggle("deploy");
        });
    })
})