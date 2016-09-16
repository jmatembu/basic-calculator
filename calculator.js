(function(window) {
	var calculator = {},
		screen = document.getElementById('screen'),
		clearScr = document.getElementById('clearScreen');

	calculator.clear = function(element) {
		return element.value = "";
	}

	clearScr.addEventListener('click', function() {
		alert('Hello');
	});

	

})(window);