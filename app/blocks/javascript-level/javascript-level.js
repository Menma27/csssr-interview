import $ from 'jquery';
import 'jquery-ui';

$(() => {
	const values = [0, 19.6, 48.8, 100];

	const findNearest = (includeLeft, includeRight, value) => {
		let nearest = null;
		let diff = null;
		for (let i = 0; i < values.length; i++) {
			if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
				const newDiff = Math.abs(value - values[i]);
				if (diff === null || newDiff < diff) {
					nearest = values[i];
					diff = newDiff;
				}
			}
		}
		return nearest;
	};

	const slider = $('#slider').slider({
		value: 48.8,
		slide(event, ui) {
			const includeLeft = event.keyCode !== $.ui.keyCode.RIGHT;
			const includeRight = event.keyCode !== $.ui.keyCode.LEFT;
			slider.slider('option', 'value', findNearest(includeLeft, includeRight, ui.value));
			return false;
		}
	});

	// render() {
	// 	if (this.$el.length) {
	// 		this
	// 			.get()
	// 			.init();
	// 	}
	// }
});
