// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname){
//    for(tablink of tablinks){
//        tablink.classList.remove("active-link")
//    }
//    for(tabcontent of tabcontents){
//        tablink.classList.remove("active-tab");
//    }
//    Event.currentTarget.classListadd("active-link");
//    document.getElementsById(tabname). classList.add("active-tab");
// }


let skills = document.getElementById("skills");
let experience = document.getElementById("experience");
let education = document.getElementById("education");

experience.addEventListener('click' , () => {
    skills.style.display = 'hide';  
})

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
sidemeu.style.right="0";
}

function closemenu(){
sidemeu.style.right= "-200px"
}