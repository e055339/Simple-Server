let currentSlide = 0;
const slides = document.querySelectorAll('.slides > div');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = 'none'));
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

showSlide(currentSlide); // 初始化顯示第一張圖片
