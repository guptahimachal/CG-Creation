document.querySelector(".arrow-up").addEventListener('click',()=>{
    document.getElementById("about").scrollIntoView();
})
// Adding multiple mock images in gallery
galleryObj = document.querySelectorAll(".gallery-object")[0];
TotalImages = 8;
for(let i=0;i<TotalImages-1;i++){
    galleryObjElement = galleryObj.cloneNode(true);
    document.querySelector(".gallery").appendChild(galleryObjElement);
}
// Adding img src to images
galleryImages = document.querySelectorAll(".gallery-object img");
for(let i=0;i<TotalImages;i++){
    galleryImages[i].src = `./images/${i+1}.png`;
}



// ADDING THE RIGHT HORIZONTAL BAR WITH RESPONSIVE LENGTH
// according to image title
// Done by appendin a new style sheet    
function addHorizontalBar() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' ';

    // Width of the gallery object
    // Our required length will be = (W - 2*20 - 40 - 5 - t )px
    // W : galleryObjWidth
    // 2*20 : for (thin-line) border width 
    //   40 : Image h5 is 40px from that thin line 
    //    5 : 5px gap on the right of h5 and line 
    //    t : width of h5
    galleryObjWidth = galleryObj.clientWidth;
    imageTitles = document.querySelectorAll(".image-title h5");
    imageTitles.forEach((element,i) => {
        style.innerHTML += `.image-title h5:nth-child(${i+1})::after{
            width: ${galleryObjWidth-85-element.clientWidth}px;
        }`
});
// Finally adding the prepared CSS
document.getElementsByTagName('head')[0].appendChild(style);
}
window.onload = addHorizontalBar;