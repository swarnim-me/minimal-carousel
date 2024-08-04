import "../css/carousel.css";

import background1 from "../assets/images/bg1.jpg";
import background2 from "../assets/images/bg2.jpg";
import background3 from "../assets/images/bg7.jpg";
import background4 from "../assets/images/bg4.jpg";

class ImageCarousel {
	constructor() {
		this.carouselImagesEle = document.querySelector(".carousel-images");
		this.leftArrow = document.querySelector(".left-arrow");
		this.rightArrow = document.querySelector(".right-arrow");
		this.activeIndex = 2;
		this.images = [background1, background2, background3, background4];
		this.loadImages();
		this.bindEvents();
	}

	loadImages() {
		this.images.forEach((image, index) => {
			const imageEle = document.createElement("img");
			imageEle.setAttribute("src", image);
			imageEle.classList.add("carousel-image");
			if (index == this.activeIndex) imageEle.classList.add("active");
			this.carouselImagesEle.appendChild(imageEle);
		});
	}
	bindEvents() {
		this.leftArrow.addEventListener("click", () => this.shiftCarousel(-1));
		this.rightArrow.addEventListener("click", () => this.shiftCarousel(1));
	}

	shiftCarousel = (value) => {
		const newIndex = this.activeIndex + value;
		if (newIndex >= 0 && newIndex < this.images.length) {
			this.updateActiveIndex(newIndex);
		}
	};

	getActiveImages = () =>
		Array.from(document.querySelectorAll(".carousel-image"));

	updateActiveIndex = (value) => {
		this.activeIndex = value;
		const imagesEle = this.getActiveImages();
		imagesEle.forEach((imageEle, index) => {
			console.log("HEY");
			if (index === value) imagesEle[index].classList.add("active");
			else imagesEle[index].classList.remove("active");
		});
	};
}

export default new ImageCarousel();
