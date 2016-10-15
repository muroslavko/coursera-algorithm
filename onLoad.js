window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');
		var resultDisplayArea = document.getElementById('resultDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					fileDisplayArea.innerText = reader.result;
					let result = reader.result.split('\n').map((item) => {
						return item.split(' ');
					});	
					let n = result[0][0];
					result.shift();
					resultDisplayArea.innerText = Main.start(n, result);
					debugger;
				}

				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
}
