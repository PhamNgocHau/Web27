for (var i = 0; i < 7; i++) {
	for (var j = 0; j < 7; j++) {
		document.write(" * ")	
	}
	document.write("<br>")

}
document.write("<br>")

for(var i=0 ;i <7; i++ ){
	for( var j=i ;j<7 ;j++){
		document.write(" * ")
	}
	document.write("<br>")
}
document.write("<br>")

for(var i=0 ;i <7;i++){
	for( var j=0 ;j<=i ;j++){
	document.write(" * ")
	}
	document.write("<br>")
}
document.write("<br>")

for(var i=0 ;i <7;i++){
	for( var j=0 ;j<=i ;j++){
	 if(i==0||i==6){
	 	document.write("*")
	}
	}
document.write("<br>")
}