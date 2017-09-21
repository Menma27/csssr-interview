import $ from 'jquery';

$(() => {
	const textarea = document.querySelector('textarea');

	const autosize = () => {
		const el = this;
		setTimeout(() => {
			el.style.cssText = 'height:auto; padding:0';
			el.style.cssText = '-moz-box-sizing:content-box';
			el.style.cssText = 'height:' + el.scrollHeight + 'px';
		}, 0);
	};
	textarea.addEventListener('keydown', autosize);
});
