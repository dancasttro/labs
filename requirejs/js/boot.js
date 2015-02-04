(function(undefined){
	'use strict';

	require.config({
		baseUrl: './js',
		paths: {
			jquery: [
				'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
				'vendor/jquery'
			],
			lodash: 'vendor/lodash'
		}
	});

	require([ 'vendor/jquery', 'lodash' ], function($, _) {
		// console.log('jQuery Carregado!!!', $( document ));
		require([ 'App' ]);
	});

})();
