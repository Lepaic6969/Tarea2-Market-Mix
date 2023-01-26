//TODO: Traer el cuadro escondido y el árrafo que deseas esconder y  hacer aparecer.
const $hidden=document.querySelector(".hidden");
const $p=document.querySelector(".container-description-p");
const $name=document.querySelector(".name");


document.addEventListener("mouseover",(e)=>{
    if(e.target.matches(".container-img img")){
        $hidden.classList.add("is-active");
        $p.classList.remove("is-active");
        $name.classList.add("name-is-active");
    }
})
document.addEventListener("mouseout",(e)=>{
    if(e.target.matches(".container-img img")){
        $hidden.classList.remove("is-active");
        $p.classList.add("is-active");
        $name.classList.remove("name-is-active")
    }
})

/*const $img=document.querySelector(".container-img img");
$img.addEventListener("mouseover",(e)=>{
        $hidden.classList.add("is-active");
        $p.classList.remove("is-active");
        $name.classList.add("name-is-active");  
})
$img.addEventListener("mouseout",(e)=>{
        $hidden.classList.remove("is-active");
        $p.classList.add("is-active");
        $name.classList.remove("name-is-active") 
})*/