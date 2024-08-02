

let oneImgBox = document.getElementById("oneImgBox");
let oneImg = document.getElementById("oneImg");
let currentIndex = 0;
let autoSlideInterval;
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image11.jpg",
  "images/image12.jpg",
  "images/image13.jpg",
  "images/image14.jpg",
  "images/image15.jpg",
  "images/image16.jpg",
  "images/image17.jpg",
  "images/image18.jpg",
];

function openOneImg(src, index) {
  oneImgBox.style.display = "flex";
  oneImg.src = src;
  currentIndex = index;
  oneImg.classList.add("fade-in");
  setTimeout(() => {
    oneImg.classList.remove("fade-in");
    oneImg.classList.add("show");
  }, 10); 
  startAutoSlide();
}

function closeOneImg() {
  oneImgBox.style.display = "none";
  stopAutoSlide();
}

function prevImg() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  oneImg.src = images[currentIndex];
  oneImg.classList.add("fade-in");
  setTimeout(() => {
    oneImg.classList.remove("fade-in");
    oneImg.classList.add("show");
  }, 10);
  startAutoSlide();
}

function nextImg() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  oneImg.src = images[currentIndex];
  oneImg.classList.add("fade-in");
  setTimeout(() => {
    oneImg.classList.remove("fade-in");
    oneImg.classList.add("show");
  }, 10);
  startAutoSlide();
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextImg, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}
