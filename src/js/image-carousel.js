import "../css/carousel.css";

import background1 from "../assets/images/bg1.jpg";
import background2 from "../assets/images/bg2.jpg";
import background3 from "../assets/images/bg7.jpg";
import background4 from "../assets/images/bg4.jpg";
import background5 from "../assets/images/bg5.jpg";

class ImageCarousel {
	constructor() {
		this.carouselImagesEle = document.querySelector(".carousel-images");
		this.leftArrow = document.querySelector(".left-arrow");
		this.rightArrow = document.querySelector(".right-arrow");
		this.IMAGE_WIDTH = 400;
		this.multiplier = 0;
		this.activeIndex = 2;
		this.images = [
			background1,
			background2,
			background3,
			background4,
			background5,
		];
		this.loadImages();
		this.bindEvents();
	}

	loadImages() {
		this.images.forEach((image, index) => {
			const imageEle = document.createElement("img");
			imageEle.setAttribute("src", image);
			imageEle.classList.add("carousel-image");
			imageEle.style.width = this.IMAGE_WIDTH + "px";
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
			this.updateActiveIndex(newIndex, value);
		}
	};

	getActiveImages = () =>
		Array.from(document.querySelectorAll(".carousel-image"));

	updateActiveIndex = (newIndex, direction) => {
		this.activeIndex = newIndex;
		const imagesEle = this.getActiveImages();
		imagesEle.forEach((imageEle, index) => {
			if (index === newIndex) imagesEle[index].classList.add("active");
			else imagesEle[index].classList.remove("active");
		});
		if (direction < 0) this.multiplier -= 1;
		else this.multiplier += 1;
		this.carouselImagesEle.style.transform = `translateX(${
			-1 * this.IMAGE_WIDTH * this.multiplier
		}px)`;
		// this.multiplier = Math.max(0, this.multiplier + direction * -1);
		// if (direction < 0) this.multiplier += 1;
		// else this.multiplier -= 1;
	};
}

export default new ImageCarousel();
