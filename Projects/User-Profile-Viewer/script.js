const introTap= document.querySelector(".intro");
const emptyText = document.querySelector(".empty-text");
const socials= document.querySelectorAll(".socialLinks");
const closeBtn=document.querySelector(".closeBtn");
const frontName= document.querySelector(".front-name");
const circleContent = document.querySelector(".circle-content");
const emptyTextUp= document.querySelector(".empty-text-up");
let flag= false;


function flip(event){
    emptyText.style.opacity="0";
    emptyTextUp.style.opacity="0";
    closeBtn.style.opacity="1";
    introTap.classList.add("open");
    if(flag){
        introTap.classList.remove("close");
    }
    frontName.style.opacity="0";
    circleContent.style.opacity= "1";
    socials.forEach((link) =>{
        if(flag){
            link.classList.remove("hide")

        }
        link.classList.add("show")
    })
    flag= false;
}

introTap.addEventListener('click', flip);

function flipBack(event){
    setTimeout(()=>{
        emptyText.style.opacity="1";
        emptyTextUp.style.opacity="1";

    }, 600);
    closeBtn.style.opacity="0";
    introTap.classList.add("close");
    introTap.classList.remove("open");
    setTimeout(()=>{
        frontName.style.opacity= "1";
    }, 300);
    circleContent.style.opacity= "0";
    socials.forEach((link) =>{
        link.classList.remove("show")
        link.classList.add("hide")
    })
    flag= true;
}

closeBtn.addEventListener('click', flipBack);