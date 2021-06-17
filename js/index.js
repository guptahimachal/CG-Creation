// Page Down on Front page
document.querySelector(".arrow-up").addEventListener('click',()=>{
    document.getElementById("about").scrollIntoView();
})
document.querySelector("#about-link").addEventListener('click',()=>{
	console.log("a")
    document.getElementById("about").scrollIntoView();
})

// Adding multiple images in gallery along with details
galleryObj = document.querySelectorAll(".gallery-object")[0];
articles = [
    {
      "id": 1,
      "title": "Living Room – 3 BHK Apartment",
      "area": 286,
      "type": "Residential Interior"
    },
    {
      "id": 2,
      "title": "Kids Room, Delhi",
      "area": 28,
      "type": "Residential Interior"
    },
    {
      "id": 3,
      "title": "Elegant Classic Bedroom ",
      "area": 26,
      "type": "Residential Interior"
    },
    {
      "id": 4,
      "title": "2 BHK Apartment – New Delhi",
      "area": 96,
      "type": "Residential Interior"
    },
    {
      "id": 5,
      "title": "Luxury Apartment",
      "area": 200,
      "type": "Residential Interior"
    },
    {
      "id": 6,
      "title": "Minimal Bedrooom",
      "area": 30,
      "type": "Residential Interior"
    },
    {
      "id": 7,
      "title": "Beige Living area with Kitchen",
      "area": 50,
      "type": "Residential Interior"
    },
    {
      "id": 8,
      "title": "Luxury Dinning Area",
      "area": 80,
      "type": "Residential Interior"
    },
    {
      "id": 9,
      "title": "Modern Bedoom  ",
      "area": 30,
      "type": "Residential Interior"
    },
    {
      "id": 10,
      "title": "Themed Restaurant –  Delhi",
      "area": 400,
      "type": "Commercial Interior"
    },
    {
      "id": 11,
      "title": "Rustic Cafe – Mumbai",
      "area": 350,
      "type": "Commercial Interior"
    },
    {
      "id": 12,
      "title": "Elegant Bar - Mumbai",
      "area": 300,
      "type": "Commercial Interior"
    },
    {
      "id": 13,
      "title": "Exquisite Bathroom",
      "area": 15,
      "type": "Residential Interior"
    },
    {
      "id": 14,
      "title": "2BHK , Lined Edison, Mumbai",
      "area": 86,
      "type": "Residential Interior"
    },
    {
      "id": 15,
      "title": "Menon Residence, Mumbai",
      "area": 85,
      "type": "Residential Interior"
    },
    {
      "id": 16,
      "title": "Dutta Residence, Mumbai",
      "area": 86,
      "type": "Residential Interior"
    },
    {
      "id": 17,
      "title": "4 BHK Residence, Mumbai",
      "area": 400,
      "type": "Residential Interior"
    },
    {
      "id": 18,
      "title": "Bar For  Penthouse, New Delhi",
      "area": 210,
      "type": "Residential Interior"
    },
    {
      "id": 19,
      "title": "Shah Residence, Mumbai",
      "area": 110,
      "type": "Residential Interior"
    },
    {
      "id": 20,
      "title": "Shardul Residence, Mumbai",
      "area": 90,
      "type": "Residential Interior"
    },
    {
      "id": 21,
      "title": "3 BHK Apartment, Mumbai",
      "area": 80,
      "type": "Residential Interior"
    },
    {
      "id": 22,
      "title": "Exclusive House Exterior",
      "area": 91,
      "type": "Architecture Design"
    },
    {
      "id": 23,
      "title": "Triveni Marbles, Agra",
      "area": 100,
      "type": "Architecture Design"
    },
    {
      "id": 24,
      "title": "3 BHK Apartment, Gurugram",
      "area": 140,
      "type": "Residential Interior"
    },
    {
      "id": 25,
      "title": "3 BHK Apartment, Gurugram",
      "area": 110,
      "type": "Residential Interior"
    },
    {
      "id": 26,
      "title": "3 BHK Apartment, Vasant Kunj",
      "area": 130,
      "type": "Residential Interior"
    },
    {
      "id": 27,
      "title": "Mohit J Residence, Mumbai",
      "area": 84,
      "type": "Architecture Design"
    },
    {
      "id": 28,
      "title": "Jungle Themed Café, Saket",
      "area": 80,
      "type": "Commercial Interior"
    },
    {
      "id": 29,
      "title": "Kids Nursery, Delhi",
      "area": 285,
      "type": "Commercial Interior"
    },
    {
      "id": 30,
      "title": "Chhabra Farmhouse",
      "area": 400,
      "type": "Residential Interior"
    },
    {
      "id": 31,
      "title": "Palam Vihar Residence",
      "area": 267,
      "type": "Residential Interior"
    }
];
// Adding details of First image
galleryObj.querySelector(".title").innerHTML = articles[0]['title'];
galleryObj.querySelector(".area").innerHTML = articles[0]['area'];
galleryObj.querySelector(".type").innerHTML = articles[0]['type'];
TotalImages = articles.length;
// Adding Remaining Gallery item details and HTML 
for(let i=0;i<TotalImages-1;i++){
    galleryObjElement = galleryObj.cloneNode(true);
    galleryObjElement.querySelector(".title").innerHTML = articles[i+1]['title'];
    galleryObjElement.querySelector(".area").innerHTML = articles[i+1]['area'];
    galleryObjElement.querySelector(".type").innerHTML = articles[i+1]['type'];
    galleryObjElement.dataset.id = i+2;
    document.querySelector(".gallery").appendChild(galleryObjElement);
}
// Adding img source to Remaining Gallery item 
galleryImages = document.querySelectorAll(".gallery-object img");
for(let i=0;i<TotalImages;i++){
    galleryImages[i].src = `./images/THUMBNAILS/${i+1}/1.jpg`;
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
        style.innerHTML += `.gallery .gallery-object:nth-child(${i+1}) h5::after{
            width: ${galleryObjWidth-85-element.clientWidth}px;
        }`
});
// Finally adding the prepared CSS
document.getElementsByTagName('head')[0].appendChild(style);
}
window.onload = addHorizontalBar;

articleCount = [
    [ '1', 4 ],  [ '2', 2 ],  [ '3', 3 ], 
    [ '4', 2 ],  [ '5', 4 ],  [ '6', 5 ], 
    [ '7', 5 ],  [ '8', 2 ],  [ '9', 2 ],
    [ '10', 2 ], [ '11', 5 ], [ '12', 1 ],
    [ '13', 1 ], [ '14', 2 ], [ '15', 4 ],
    [ '16', 2 ], [ '17', 2 ], [ '18', 1 ],
    [ '19', 2 ], [ '20', 2 ], [ '21', 2 ],
    [ '22', 2 ], [ '23', 2 ], [ '24', 4 ],
    [ '25', 6 ], [ '26', 2 ], [ '27', 2 ],
    [ '28', 2 ], [ '29', 2 ], [ '30', 6 ],
    [ '31', 5 ]
  ]

  

// Adding the IMAGE LIGHT BOX

lightBox = document.querySelector("#lightbox");
imgView = lightBox.querySelector("img");

var curArticle;
var curSubArticle;
var totalsubArticle;  
document.querySelectorAll('.gallery-object').forEach( galleryObj => {
    galleryObj.addEventListener('click',(event)=>{
        curArticle = galleryObj.dataset.id;
		curSubArticle = 1;
        totalsubArticle = articleCount[curArticle-1][1];
		document.querySelector(".display .cur").innerHTML = curSubArticle;
		document.querySelector(".display .total").innerHTML = totalsubArticle;
        imgView.src = "./images/THUMBNAILS/" + curArticle + "/1.jpg";        
        document.querySelector("#lightbox").classList.add("active");


    })
});

function nextSubArticle() {
	if(curSubArticle == totalsubArticle)
		return;
	curSubArticle++;
	document.querySelector(".display .cur").innerHTML = curSubArticle;
	imgView.src = "./images/THUMBNAILS/" + curArticle + "/"+ curSubArticle +".jpg";
}
function prevSubArticle() {
	if(curSubArticle == 1)
		return;
	curSubArticle--;
	document.querySelector(".display .cur").innerHTML = curSubArticle;
	imgView.src = "./images/THUMBNAILS/" + curArticle + "/"+ curSubArticle +".jpg";
}
document.querySelector(".slider-btns.right").addEventListener('click',nextSubArticle);
document.querySelector(".slider-btns.left").addEventListener('click',prevSubArticle);
window.addEventListener('keydown' , (event)=>{
	if(event.keyCode == 39)
		nextSubArticle();
})
window.addEventListener('keydown' , (event)=>{
	if(event.keyCode == 37)
		prevSubArticle();
})



// Exiting Image Lightbox on escape and click on close btn
window.addEventListener('keydown' , (event)=>{
  if(event.keyCode == 27)
  document.querySelector("#lightbox").classList.remove("active");
})
document.querySelector(".close").addEventListener('click', ()=>{
//   document.querySelector("#lightbox").classList.add("inactive");
  document.querySelector("#lightbox").classList.remove("active");
});


document.querySelector("#facebook").addEventListener('click',()=>{
	window.open('https://www.facebook.com/CGCreationn/');
});
document.querySelector("#instagram").addEventListener('click',()=>{
	window.open('https://www.instagram.com/urbandesign.lab/');
});
document.querySelector("#pinterest").addEventListener('click',()=>{
	window.open('https://pin.it/2jEajPq');
});