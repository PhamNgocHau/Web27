var m = prompt("nhập m:")
var n = prompt("nhập n:")
var k = prompt("nhập k:")
s=0;
for (var i = n; i <= m; i++) {
	if(i%k ==0){
		s=s+i;
	}
}
document.write(s);