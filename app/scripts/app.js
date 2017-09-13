import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import autosize from 'autosize';

$(() => {
	svg4everybody();
});

autosize(document.querySelector('textarea'));
