function clickID(){
	var the_p = document.getElementById('the_p')
	// alert(the_p.innerHTML);
	the_p.innerHTML = "Web 26"
}
function clickClass(){
	var class_mb = document.getElementsByClassName('mb');
	class_mb[0].style.color = 'red';
}
function clickTags(){
	var tags_span = document.getElementsByTagName('span')
	tags_span[0].style.color='blue';
}