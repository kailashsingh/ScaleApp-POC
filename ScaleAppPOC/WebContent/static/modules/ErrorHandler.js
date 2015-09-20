define(function() {

	// create the Error Handler module
	return function(sandbox) {

		// // boot your module
		var init = function() {
			// listen to log events
			sandbox.on([ "log/error" ], function(msg) {
				console.error(msg);
				// Push it to Server
			});

		};

		// shutdown your module
		var destroy = function() {

		};

		// return public module API
		return {
			init : init,
			destroy : destroy
		};

	};

});
