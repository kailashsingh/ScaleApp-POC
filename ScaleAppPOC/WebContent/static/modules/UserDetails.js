define([ 'resources/lib/knockout', 'text!modules/UserDetailsTmpl.html',
		'modules/model/User' ], function(ko, template, User) {

	return function(sandbox) {

		// boot your module
		this.init = function(opts, done) {

			this.user = new User();

			// create references
			this.container = document.getElementById('UserDetails');
			this.container.innerHTML = template;

			// applying binding
			ko.applyBindings(this, this.container);
		}.bind(this);

		// shutdown your module
		this.destroy = function() {
			// clean your container
			this.container.innerHTML = '';
		}.bind(this);

		this.save = function() {
			sandbox.emit("user/add", 1);
			sandbox.ajaxPost("user/add", this.user, function() {
				sandbox.emit("log/info", "User saved succesfully");
			})
		}.bind(this);

		// return public module API
		return {
			init : this.init,
			destroy : this.destroy
		};

	};
});