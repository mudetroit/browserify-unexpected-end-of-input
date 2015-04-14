_.extend(App, (function(){
	return { init: function(){
		React.render(new App.TodoSection(), document.getElementById('body'));
	}}
}))

window.addEventListener('load', function() { App.init(); }, false).
