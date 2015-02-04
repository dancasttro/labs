(function(doc, undefined){
	'use strict';

	function App() {
		var $public = {};
		var $private = {};

		$public.init = function init() {
			$private.initEvents();
		};

		$private.initEvents = function initiEvents() {
			doc.querySelector('[data-js="form"]')
				.addEventListener('submit', $private.handleFormSubmit, false);
		};

		$private.handleFormSubmit = function handleFormSubmit() {
			debugger;
			console.log('Envio Formulário');
		};

		return $public;
	}

	doc.addEventListener('DOMContentLoaded', function() {
		App().init();
	}, false);

})(document);
