const images = ["dog.jpg", "cat.jpg", "flower.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `imgs/${chosenImage}`;

document.body.style.background = `url(${bgImage.src})`;
document.body.style.backgroundSize = "auto";
document.body.style.backgroundRepeat = "no-repeat";

