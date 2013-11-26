

module.exports = function( ) {
	"use strict";

	this.convert = function( number ) {
		var ret = '';
		if(number < 3 ){
			for (var i = 0; i < number; i++) {
				ret += 'I';
			};
			return ret;
		}
		if( number == 1 ) {
			return 'I';
		} 
		else  {
			return 'V';
		}
		
	};
};