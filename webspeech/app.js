(function($) {

	var $btn = $('#btn'),
		$result = $('#result'),
		words = null;
	if('webkitSpeechRecognition' in window){
		var recognition = new webkitSpeechRecognition();
		recognition.lang = 'pt-BR';
		recognition.continuos = false;
		recognition.interimResults = true;

		$btn.on('click', function(e) {
			e.preventDefault();
			$btn.removeClass('btn-primary');
			recognition.start();
		});

		recognition.onresult = function(event){
			$result.text('');
			for(var i = event.resultIndex; i < event.results.length; i++){
				var transcript = event.results[i][0].transcript;
				transcript = transcript.replace('point ', '.');
				if(event.results[i].isFinal){
					$result.text(transcript);
					recognition.stop();
					$btn.addClass('btn-primary');
					words = transcript.split(' ');
					if(words[0] == 'buscar'){
						window.location.replace('https://www.google.com/search?q=' + transcript.replace('buscar',''), '_blank');
					}
					// console.log(words);
					return true;
				}else{
					$result.text($('#result').text() + transcript);
				}
			}
			console.log(event);
		}
	}else{
		$btn.hide();
	}


})(jQuery);
