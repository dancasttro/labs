window.onload = function() {
	// Criando um elemento
	var div = document.createElement('div');
	// Adicionando atributo
	div.setAttribute('class', 'node');
	// Criando texto
	var text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa vel sunt a iusto hic ipsam consequuntur eos! Eaque modi, enim quis libero velit inventore voluptas ex earum rerum in omnis!');
	// Preenchendo o elemento criado com um texto
	div.appendChild(text);
	// Selecinando o container
	var container  = document.getElementById('container');
	// Inserindo o elemento no container
	container.appendChild(div);
}
