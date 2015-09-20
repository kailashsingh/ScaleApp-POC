define([], function() {

	return function(core, instanceId, options, moduleId) {

		this.ajaxGet = function(url, callback) {
			core.ajaxGet(url, callback);
		}

		this.ajaxPost = function(url, data, callback) {
			core.ajaxPost(url, data, callback);
		}

		this.navigate = function(hash) {
			core.navigate(hash);
		}

		// e.g. provide the Mediator's methods 'on', 'emit', etc.
		core._mediator.installTo(this);

		this.id = instanceId;

		return this;
	};
});