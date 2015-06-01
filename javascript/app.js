// window.onload = function() {
// 	// Criando um elemento
// 	var div = document.createElement('div');
// 	// Adicionando atributo
// 	div.setAttribute('class', 'node');
// 	// Criando texto
// 	var text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa vel sunt a iusto hic ipsam consequuntur eos! Eaque modi, enim quis libero velit inventore voluptas ex earum rerum in omnis!');
// 	// Preenchendo o elemento criado com um texto
// 	div.appendChild(text);
// 	// Selecinando o container
// 	var container  = document.getElementById('container');
// 	// Inserindo o elemento no container
// 	container.appendChild(div);
// }


(function(){
	'use strict';

	var cart = $('.cart');
	var btn = $("#btn");


	// function init() {
		
		// btn.addEventListener('click', function() {
		// 	if (cart.classList) {
		// 		cart.classList.add(foo);
		// 	}
		// 	else {
		// 		cart.foo += ' ' + foo;
		// 	}
		// });
	// }


	btn.on("click", myFunction);

	function myFunction() {
	    cart.addClass('foo')
	}

	// init();
	// function abreCart() {
	// 	if (cart.classList) {
	// 		cart.classList.add(foo);
	// 	}
	// 	else {
	// 		cart.foo += ' ' + foo;
	// 	}
	// }
})();
