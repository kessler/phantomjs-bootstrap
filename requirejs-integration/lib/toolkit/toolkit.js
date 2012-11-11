define([], function() {

	var toolkit = {
		isUndefined: function(something) {
			return typeof(something) !== 'undefined';
		}
	};

	return toolkit;	
});