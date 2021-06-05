document.querySelector(".arrow-up").addEventListener('click',()=>{
    document.getElementById("about").scrollIntoView();
})
// Adding multiple mock images in gallery
galleryObj = document.querySelectorAll(".gallery-object")[0];
for(let i=0;i<10;i++){
    galleryObjElement = galleryObj.cloneNode(true);
    document.querySelector(".gallery").appendChild(galleryObjElement);
}