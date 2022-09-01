window.onload = function() {
	
	var submit = document.getElementById("sub");
	var outPut = document.getElementById("output");
	
	submit.addEventListener("click", function() {
		var x1 = document.getElementById("x1").value;
		var y1 = document.getElementById("y1").value;
		var x2 = document.getElementById("x2").value;
		var y2 = document.getElementById("y2").value;
		
		outPut.value = Math.sqrt( Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2) );
	});
}