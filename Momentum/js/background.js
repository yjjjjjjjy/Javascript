const images=["0.webp","1.webp","2.webp"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;

//append는 맨뒤, prepend는 맨위
document.body.appendChild(bgImage);


