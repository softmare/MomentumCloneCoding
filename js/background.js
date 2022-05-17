const images = ["dog.jpg", "cat.jpg", "flower.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `imgs/${chosenImage}`;

document.body.appendChild(bgImage);