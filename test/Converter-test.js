var assert = require("assert"),
	Converter = require("../src/Converter");

describe('a convert object', function(){
	it('should convert 1 to I', function(){
		var converter = new Converter();
		assert.equal('I', converter.convert(1));
  	});

	it('should should convert 5 to V', function(){
		var converter = new Converter();
		assert.equal('V', converter.convert(5));
	});

	it('should should convert 2 to II', function(){
		var converter = new Converter();
		assert.equal('II', converter.convert(2));
	});	
});