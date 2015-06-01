;(function(root, factory){
    'use strict';

    if(typeof define === 'function' && define.amd) {
        define(function () {
            require(['Ajax']);
        });
    } else if (typeof exports === 'object') {
        exports= module.exports = factory( require ( 'chai').should(), require('../src/ajax'));
    } else {
        root.Ajax = factory( root.chai.should(), root.Ajax);
    }

})(this, function( should, Ajax){
    'use strict';

    describe('Test module interface', function(){
        it('Should have `get` method', function(){
            var ajax = new Ajax();
            ajax.should.have.property('get');
        })
        it('Should have `post` method', function() {
        	var ajax = new Ajax();
        	ajax.should.have.property('post');
        })
        it('Should have `put` method', function() {
        	var ajax = new Ajax();
        	ajax.should.have.property('put');
        })
        it('Should have `delete` method', function() {
        	var ajax = new Ajax();
        	ajax.should.have.property('delete');
        })
    });
});
