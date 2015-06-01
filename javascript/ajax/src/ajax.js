;(function(root, factory){
    'use strict';

    /* istanbul ignore next */
    if(typeof define === 'function' && define.amd){
        define( 'Ajax', factory);
    }
    else if (typeof exports === 'object'){
        exports = module.exports = factory();
    }
    else {
        root.Ajax = factory();
    }
})(this, function(){
    'use strict';

    function Ajax() {
        var $public = {};
        var $private = {};


        $public.get = function() {
        	
        }

        $public.post = function() {
        	
        }

        $public.put = function() {
        	
        }

        $public.delete = function() {
        	
        }

        return $public;
    }

    return Ajax;
})
