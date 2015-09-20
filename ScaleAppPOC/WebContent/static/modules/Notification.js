define([ 'resources/lib/knockout', 'text!modules/NotificationTmpl.html' ],
		function(ko, template) {

			return function(sandbox) {

				// boot your module
				this.init = function(opts, done) {
					this.messages = ko.observableArray([]);

					// listen to log events
					sandbox.on([ "log/log", "log/debug", "log/info",
							"log/warn", "log/error", "user/add" ],
							function(msg) {
								this.messages.push(msg);
							}.bind(this));
					// create references
					this.container = document.getElementById('Notification');
					this.container.innerHTML = template;

					// applying binding
					ko.applyBindings(this, this.container);
				}.bind(this);

				// shutdown your module
				this.destroy = function() {
					// clean your container
					this.container.innerHTML = '';
				}.bind(this);

				this.clear = function() {
					this.messages.removeAll();
				}.bind(this);

				// return public module API
				return {
					init : this.init,
					destroy : this.destroy
				};

			};
		});