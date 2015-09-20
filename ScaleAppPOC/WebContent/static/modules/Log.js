define(function() {

	// create the Log module
	return function(sandbox) {

		// creat log method
		this.log = function(msg, channel) {
			console[channel.substring(channel.indexOf('/') + 1, channel.length)]
					(msg);
		}.bind(this);

		// // boot your module
		this.init = function() {
			// listen to log events
			sandbox.on([ "log/log", "log/debug", "log/info", "log/warn" ], this.log);
		}.bind(this);

		// shutdown your module
		this.destroy = function() {
			sandbox.off(this.log);
			console.clear();
		}.bind(this);

		// return public module API
		return {
			init : this.init,
			destroy : this.destroy
		};

	};

});
