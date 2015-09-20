define([ 'resources/lib/knockout', 'text!modules/DashboardTmpl.html' ],
		function(ko, template) {

			return function(sandbox) {

				// boot your module
				this.init = function(opts, done) {
					this.count = ko.observable(0);

					// listen to user events
					sandbox.on([ "user/add" ], function(value) {
						this.count(this.count() + value);
					}.bind(this));

					// create references
					this.container = document.getElementById('Dashboard');
					this.container.innerHTML = template;

					// applying binding
					ko.applyBindings(this, this.container);
				}.bind(this);

				// shutdown your module
				this.destroy = function() {
					// clean your container
					this.container.innerHTML = '';
				}.bind(this);

				this.reset = function() {
					this.count(0);
				}.bind(this);

				// return public module API
				return {
					init : this.init,
					destroy : this.destroy
				};

			};
		});