import {ScrollToSmooth, easeOutQuint} from 'scrolltosmooth/dist/scrolltosmooth.esm';

const setupMenuActiveIndex = () => {
	const navy: any = document.getElementById("menu");

	Array.from(document.getElementsByClassName("menu-item")).forEach(
		(item: any, index) => {
			item.onmouseover = () => {
				navy.dataset.activeIndex = index;
			};
		}
	);
}

const setupScrollSmooth = () => {
	const scrollToSmoothSettings = {
		container: document,
		targetAttribute: 'href',
		topOnEmptyHash: true,
		offset: null,
		duration: 800,
		durationRelative: true,
		durationMin: 300,
		durationMax: 5000,
		easing: easeOutQuint,
		onScrollStart: null,
		onScrollUpdate: null,
		onScrollEnd: null
	};
	
	const smoothScroll = new ScrollToSmooth('a', scrollToSmoothSettings);
	smoothScroll.init();
}

setupMenuActiveIndex();
setupScrollSmooth();

