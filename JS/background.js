const image = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];

const imageChoice = image[Math.floor(Math.random()*image.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${imageChoice}`;
document.body.appendChild(bgImage);
