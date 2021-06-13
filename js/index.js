// Page Down on Front page
document.querySelector(".arrow-up").addEventListener('click',()=>{
    document.getElementById("about").scrollIntoView();
})


// Adding multiple images in gallery along with details
galleryObj = document.querySelectorAll(".gallery-object")[0];
articles = [
    {
      "id": 1,
      "title": "Incredible Living Room – 3 bhk apartment",
      "area": 286,
      "type": "Residential Interior"
    },
    {
      "id": 2,
      "title": "Elegant Classic Bedroom ",
      "area": 26,
      "type": "Residential Interior"
    },
    {
      "id": 3,
      "title": "2 BHK Apartment – New Delhi",
      "area": 96,
      "type": "Residential Interior"
    },
    {
      "id": 4,
      "title": "Luxury Apartment",
      "area": 200,
      "type": "Residential Interior"
    },
    {
      "id": 5,
      "title": "Minimal Bedrooom",
      "area": 30,
      "type": "Residential Interior"
    },
    {
      "id": 6,
      "title": "Beige Living area with Kitchen",
      "area": null,
      "type": "Residential Interior"
    },
    {
      "id": 7,
      "title": "Luxury Dinning Area",
      "area": 80,
      "type": "Residential Interior"
    },
    {
      "id": 8,
      "title": "Modern Bedoom  ",
      "area": 30,
      "type": "Residential Interior"
    },
    {
      "id": 9,
      "title": "Yellow Themed Restaurant – New Delhi",
      "area": 400,
      "type": "Commercial Interior"
    },
    {
      "id": 10,
      "title": "Rustic Cafe – Mumbai",
      "area": 350,
      "type": "Commercial Interior"
    },
    {
      "id": 11,
      "title": "Elegant Bar - Mumbai",
      "area": 300,
      "type": "Commercial Interior"
    },
    {
      "id": 12,
      "title": "Exquisite Bathroom",
      "area": null,
      "type": "Residential Interior"
    },
    {
      "id": 13,
      "title": "2BHK Apartment, Lined Edison, Mumbai",
      "area": 86,
      "type": "Residential Interior"
    },
    {
      "id": 14,
      "title": "Menon Residence, Mumbai",
      "area": 85,
      "type": "Residential Interior"
    },
    {
      "id": 15,
      "title": "Dutta Residence, Mumbai",
      "area": 86,
      "type": "Residential Interior"
    },
    {
      "id": 16,
      "title": "4 BHK Residence, Mumbai",
      "area": 400,
      "type": "Residential Interior"
    },
    {
      "id": 17,
      "title": "Bar For Luxuroius Penthouse, New Delhi",
      "area": 210,
      "type": "Residential Interior"
    },
    {
      "id": 18,
      "title": "Shah Residence, Mumbai",
      "area": 110,
      "type": "Residential Interior"
    },
    {
      "id": 19,
      "title": "Shardul Residence, Mumbai",
      "area": 90,
      "type": "Residential Interior"
    },
    {
      "id": 20,
      "title": "3 BHK Apartment, Mumbai",
      "area": 80,
      "type": "Residential Interior"
    },
    {
      "id": 21,
      "title": "Exclusive House Exterior",
      "area": 91,
      "type": "Architecture Design"
    },
    {
      "id": 22,
      "title": "Triveni Marbles, Agra",
      "area": 100,
      "type": "Architecture Design"
    },
    {
      "id": 23,
      "title": "3 BHK Apartment, Gurugram",
      "area": 140,
      "type": "Residential Interior"
    },
    {
      "id": 24,
      "title": "3 BHK Apartment, Gurugram",
      "area": 110,
      "type": "Residential Interior"
    },
    {
      "id": 25,
      "title": "3 BHK Apartment, Vasant Kunj",
      "area": 130,
      "type": "Residential Interior"
    },
    {
      "id": 26,
      "title": "Mohit J Residence, Mumbai",
      "area": 84,
      "type": "Architecture Design"
    },
    {
      "id": 27,
      "title": "Jungle Themed Café, Saket",
      "area": 80,
      "type": "Commercial Interior"
    },
    {
      "id": 28,
      "title": "Kids Nursery, Delhi",
      "area": 285,
      "type": "Commercial Interior"
    },
    {
      "id": 29,
      "title": "Chhabra Farmhouse",
      "area": 400,
      "type": "Residential Interior"
    },
    {
      "id": 30,
      "title": "Palam Vihar Residence",
      "area": 267,
      "type": "Residential Interior"
    },
    {
      "id": null,
      "title": "",
      "area": null,
      "type": ""
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
  
document.querySelectorAll('.gallery-object').forEach( galleryObj => {
    galleryObj.addEventListener('click',(event)=>{
        console.log(galleryObj);
        
        // Adding the IMAGE LIGHT BOX
        const lightBox = document.createElement('div');
        lightBox.id = 'lightbox'
        
        
        document.body.appendChild(lightBox);


        document.querySelector("#lightbox").classList.add("active");
    })
});
