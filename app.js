const inputs = document.querySelectorAll(".input-field");
const toggleBtn = document.querySelectorAll(".toggle");
const boxElement = document.querySelector(".box");
const bullets = document.querySelectorAll(".bullets span")
const images = document.querySelectorAll(".image");
const textSlider = document.querySelector(".text-group");

for (const input of inputs) {
  input.addEventListener("focus", () => input.classList.add("active"));
  input.addEventListener("blur", () => {
    if (input.value == "") {
      input.classList.remove("active");
    }
  });
}
for (const tgl of toggleBtn) {
  tgl.addEventListener("click", () => {
    boxElement.classList.toggle("sign-up-mode");
  });
}

function moveSlider() {
  const index = this.dataset.value;
  const currentImage = document.querySelector(`.img-${index}`);

  for(const image of images) {
    image.classList.remove('show');
  }
  currentImage.classList.add('show');

  for(const bullet of bullets) {
    bullet.classList.remove('active');
  }
  this.classList.add('active');

  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
}

for (const bullet of bullets) {
  bullet.addEventListener('click', moveSlider);
}