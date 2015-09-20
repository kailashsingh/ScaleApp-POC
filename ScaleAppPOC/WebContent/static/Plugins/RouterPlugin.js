define([], function() {

	return function(core) {
		core.navigate = function(hash) {
			// update hash in url
			core.emit('log/info', 'Navigating...')
		}
	};
});