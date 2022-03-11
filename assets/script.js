window.onload = () =>{
    var collapse = document.getElementById("collapse");
    var nav = document.getElementById("nav");
    if (collapse){
collapse.addEventListener("click", ()=>{
    console.log("collapse");
    if(nav.style.display === "block"){
        nav.style.display = "none"
    }else{
        nav.style.display = "block";
    }  
})
if(nav){
nav.addEventListener("mouseleave", ()=>{
    nav.style.display = "none"
})
}
    }
}