// initialize the application
require([ 'scaleApp', 'Plugins/AjaxPlugin', 'Plugins/RouterPlugin',
		'CustomSandbox' ],
		function(sa, ajaxPlugin, routerPlugin, customSandbox) {

			// creata Application Core instance with CustomSandbox
			var core = window.app = new sa.Core(customSandbox);
			core.use(ajaxPlugin);
			core.use(routerPlugin);

			// listen to the start event
			core.on("start", function(module) {
				log("debug", "Try to start module '" + module + "'");

				require([ "modules/" + module ], function(m) {
					createContainer(module);
					// register and start the module
					core.register(module, m).start(
							module,
							function(err) {
								if (err) {
									log("error", err);
								} else {
									log("info", "sucessfully started '"
											+ module + "'");
								}
							})
				});

			});

			// listen to the stop event
			core.on("stop", function(module) {
				log("debug", "Try to stop module '" + module + "'");

				core.stop(module, function(err) {
					if (err) {
						log("error", err)
					} else {
						deleteContainer(module);
						log("info", "stopped module '" + module + "'");
					}
				});

			});

			// define a simple logger
			var log = function(type, msg) {
				// if the log module is running,
				// the messages can be displayed
				core.emit("log/" + type, msg);
			}

			// create dom container dynamically
			var createContainer = function(module) {
				if (!document.getElementById(module)) {
					var c = document.createElement("div");
					c.setAttribute('id', module);
					document.getElementsByTagName("body")[0].appendChild(c);
				}
			};

			// remove dom container dynamically
			var deleteContainer = function(module) {
				document.getElementById(module).remove();
			};

			// start 'Log' & 'Control' module by default
			// core.emit("start", "Log");
			core.emit("start", "Control");
		});
