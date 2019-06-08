var n=prompt("nhập n:")
var s=0;
var giaithua=1;
for (var i = 1 ; i <= n; i++) {
	giaithua = giaithua*i;
	s=s+(i/giaithua);
}
document.write(s);