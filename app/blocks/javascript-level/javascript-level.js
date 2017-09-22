import $ from 'jquery';
import 'jquery-ui';

$(() => {
	const values = [0, 19.3, 48.5, 99.4];

	const findNearest = value => {
		let nearest = null;
		let diff = null;
		for (let i = 0; i < values.length; i++) {
			const newDiff = Math.abs(value - values[i]);
			if (diff === null || newDiff < diff) {
				nearest = values[i];
				diff = newDiff;
			}
		}
		return nearest;
	};

	const slider = $('#slider').slider({
		min: 0,
		max: 100,
		value: 48.5,
		step: 0.1,
		slide(event, ui) {
			$( '#input-slider' ).attr('value', ui.value);
			$(ui.value).val($('#input-slider').val());
			slider.slider('option', 'value', findNearest( ui.value));
			return false;
		}
	});
});
