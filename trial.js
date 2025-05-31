let bt=document.querySelector("#btn");
bt.addEventListener("click",()=>{
    bt.style.backgroundColor="red";
})
bt.removeEventListener("click",()=>{
    bt.style.backgroundColor="red";
})