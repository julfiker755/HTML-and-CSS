const btn=document.querySelector(".mobile-icon");
btn.addEventListener("click",function(){
    this.querySelector("i").classList.toggle("fa-times")
    const add=document.querySelector(".nav-lilst");
    add.classList.toggle("mobile");
})