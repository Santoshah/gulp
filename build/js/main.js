app.filter("gender", function() {
	return function(gender){
		switch(gender) {
			case 1:
			return "Male";
			case 2:
			return "Female";
			case 3:
			return "Third Gender";
			case 4:
			// return "fourth Gender";
		} 
	}
});
$(document).ready(function() {
	$("div").click(function(alpha){
		// alpha.preventDefault();
		window.location.href("http://google.com")
	})
});
	var employees = [
		{ name: "Santosh", age:25, emp_id:23 },
		{ name: "jyoti", age:93, emp_id:97 },
		{ name: "abhishe", age:99, emp_id:96 },
		{ name: "Amir", age:77, emp_id:16 }
	]



var newemp = employees;

	var i, text;


	text = "<ul id='newid'>";
	for(i=0; i<newemp.length; i++) {
		var newage = newemp[i].age.toString().split("").reverse().join("");	
		text+= "<li>"+newemp[i].name+"<br>"+newemp[i].emp_id + "<br>" + newage + "</li>"
	}
	text += "</ul>";
	document.getElementById("list_emp").innerHTML = text;



var count = 10;
var counterIncrement = -1;
var counter = setInterval(timer, 500); 

function timer() {
  count = count+counterIncrement;

  if (count == 0) {
       window.clearInterval(counter)
    }
	console.log(count);

}