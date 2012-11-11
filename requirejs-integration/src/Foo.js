define(['toolkit/toolkit'], function(toolkit) {
	
	function Foo() {

	}

	Foo.prototype.bar = function(arg) {
		
		if (toolkit.isUndefined(arg))
			console.log('OMG!');
		else
			console.log("phew!");
	};

	return Foo;
});