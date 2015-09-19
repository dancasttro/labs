;(function() {
	'use strict';

	var context = new (window.AudioContext || window.webkitAudioContext)();

	// window.addEventListener('load', init, false);


	// function init () {
	// 	try{
	// 		window.AudioContext = window.AudioContext || window.webkitAudioContext;
	// 		context = new AudioContext();
	// 	}catch(e){
	// 		alert('Não tem suporte');
	// 	}
	// }

	var oscillator = context.createOscillator();

	// oscillator.type = 'square';
	oscillator.frequency.value = 3000;
	
	oscillator.start();
	
}());
