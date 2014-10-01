$(document).ready(function() {

	var card = $('.card'),
		cardWrapper = $('.cardWrapper'),
		front = $('.front'),
		back = $('.back'),
		btnOn = $('.btn-on'),
		btnOff = $('.btn-off'),
		cardFace = $('.cardFace');

	TweenMax.staggerTo(cardWrapper, 1, {css:{left:0}}, 0.7);


	TweenMax.set(cardWrapper, {perspective:800});
	TweenMax.set(card, {transformStyle:"preserve-3d"});
	TweenMax.set(back, {rotationY:-180});
	TweenMax.set([back, front], {backfaceVisibility:"hidden"});

	cardWrapper.hover(
	    function(){
	    	TweenMax.to($(this).find(card), 0.5, {scaleX: 1.1, scaleY: 1.1});
	    	TweenMax.to($(this).find(cardFace), 0.5, {css:{boxShadow: "0 0 40px #777"}, ease:Back.easeOut});
//	    	TweenMax.to(cardFace, 0.5, {boxShadow: "0 0 40px #777"});
	},
		function(){
	    	TweenMax.to($(this).find(card), 0.5, {scaleX: 1, scaleY: 1});
	    	TweenMax.to($(this).find(cardFace), 0.5, {css:{boxShadow: "none"}});
	    	// TweenMax.to(cardFace, 0.5, {boxShadow: "none"});
		}
	);

	btnOn.on('click', btnOnClick);
	btnOff.on('click', btnOffClick);

	function btnOnClick(e) {
		e.preventDefault();
		TweenMax.to(card, 1.2, {rotationY:180, ease:Back.easeOut});
		btnOn.hide();
	}

	function btnOffClick(e) {
		e.preventDefault();
	    TweenMax.to(card, 1.2, {rotationY:0, ease:Back.easeOut});
	    btnOn.show();
	}


	//a nice little intro;)
	// TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);

	/* learn more about GSAP JS:
	http://www.greensock.com/gsap-js/

	more codepen samples:
	http://codepen.io/collection/jmHAn

	basics:
	http://codepen.io/collection/ifybJ

	*/
});
