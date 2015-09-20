define([ 'jquery' ], function($) {

	return function(core) {
		core.ajaxGet = function(url, callback) {
			$.ajax({
				method : "GET",
				url : url
			}).done(function() {
				callback && callback()
			});
		}
		core.ajaxPost = function(url, data, callback) {
			$.ajax({
				method : "POST",
				url : url,
				data : data
			}).done(function() {
				callback && callback()
			});
		}
	};
});