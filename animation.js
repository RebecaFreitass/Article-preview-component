const btn = document.querySelector("#img-share")
const active = document.querySelector(".active-component")

btn.addEventListener('click',() =>{
    console.log("tamo ae")
    showComponent()

});

function showComponent(){
    active.style.display ='flex'
}
