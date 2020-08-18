

function convert_Celsius() {
  var data = document.getElementById("data").value ;
  var parsed = parseFloat(data) ; 
  var rez = (9*parsed+(32*5))/5 ;
  document.getElementById("rez").value = parseFloat(rez).toPrecision(4);
}

function convert_Fahrenheit(){
   var data = document.getElementById("data").value ;
  var parsed = parseFloat(data) ; 
  var rez = (5*(parsed-32))/9 ;
  document.getElementById("rez").value = parseFloat(rez).toPrecision(4);
}


function retry(){
	document.getElementById("data").value = " " ;
	document.getElementById("rez").value = "Result" ;
}