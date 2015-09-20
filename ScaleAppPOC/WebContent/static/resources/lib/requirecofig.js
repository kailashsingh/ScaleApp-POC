require.config({
	baseUrl : ".",
	urlArgs : "bust=" + (new Date()).getTime(),
	paths : {
		"scaleApp" : 'resources/lib/scaleApp',
		"text" : 'resources/lib/text',
		"jquery" : "resources/lib/jquery"
	},
	shim : {
		"jquery" : {
			exports : '$'
		}
	}
});