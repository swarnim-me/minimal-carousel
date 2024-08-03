import "../css/carousel.css";

import background1 from "../assets/images/bg1.jpg";
import background2 from "../assets/images/bg2.jpg";
import background3 from "../assets/images/bg7.jpg";
import background4 from "../assets/images/bg4.jpg";

class ImageCarousel {
	constructor() {
		this.carouselImagesEle = document.querySelector(".carousel-images");
		this.images = [background1, background2, background3, background4];
		this.loadImages();
	}

	loadImages() {
		this.images.forEach((image, index) => {
			const imageEle = document.createElement("img");
			imageEle.setAttribute("src", image);
			imageEle.classList.add("carousel-image");
			if (index == 2) imageEle.classList.add("active");
			this.carouselImagesEle.appendChild(imageEle);
		});
	}
}

export default new ImageCarousel();
