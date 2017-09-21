import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import autosize from 'autosize';
import '../blocks/javascript-level/javascript-level';
// import '../blocks/about-words/about-words';

$(() => {
	svg4everybody();
});

setTimeout(() => { // Небольшая задержка для подзагрузки
	document.getElementById('textarea').value = document.getElementById('textarea').value.replace(/\n/g, ' ');
	autosize(document.getElementById('textarea'));
}, 1);
