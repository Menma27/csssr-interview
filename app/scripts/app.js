import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import autosize from 'autosize';
import '../blocks/javascript-level/javascript-level';
// import '../blocks/about-words/about-words';

$(() => {
	svg4everybody();
});

autosize(document.querySelector('textarea'));
