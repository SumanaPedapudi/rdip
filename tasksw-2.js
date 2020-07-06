
function cr() {
	// body...
	document.getElementById('box').value = " ";
	document.getElementById('b1').value = " ";
	document.getElementById('b2').value = " ";
	return document.getElementById('box').value;
	return document.getElementById('b1').value;
	return document.getElementById('b2').value;
}
function sr() {
	// body...
	 var num = document.getElementById('b1').value;
	 var r = Math.sqrt(num);
	 if(Number.isInteger(r) == true){
	 	return document.getElementById('box').value = r;
	 }
	 else{
	 	var s = r.toFixed(3);
	 	return document.getElementById('box').value = s;
	 }
	}
function absolute() {
	var num = document.getElementById('b1').value;
	var r = Math.abs(num);
	return document.getElementById('box').value = r.toFixed(3);
	// body...
}
function add() {
	// body...
	var a  = document.getElementById('b1').value;
	var b = document.getElementById('b2').value;
	var r = parseFloat(a)+parseFloat(b);
	return document.getElementById('box').value = r.toFixed(3);
}
function sub() {
	// body...
	var a  = document.getElementById('b1').value;
	var b = document.getElementById('b2').value;
	var r = parseFloat(a)-parseFloat(b);
	return document.getElementById('box').value = r.toFixed(3);
}
function mul() {
	// body...
	var a  = document.getElementById('b1').value;
	var b = document.getElementById('b2').value;
	var r = parseFloat(a)*parseFloat(b);
	return document.getElementById('box').value = r.toFixed(3);
}
function div() {
	// body...
	var a  = document.getElementById('b1').value;
	var b = document.getElementById('b2').value;
	var r = parseFloat(a)/parseFloat(b);
	return document.getElementById('box').value = r.toFixed(3);
}
function per() {
	// body...
	var a  = document.getElementById('b1').value;
	var b = document.getElementById('b2').value;
	var r  = (parseFloat(a)*parseFloat(b))/100;
	return document.getElementById('box').value = r.toFixed(3);
}
function v() {
	firstname();
	pno();
	m();
	return true;
}
function firstname(){
	var f = document.getElementById('fn').value;
	var a = /^[A-Za-z]/;
	if(f.match(a)) {
		alert("entered name is valid")
		return true;
	}
	else if(f == ""){
		alert("please enter a valid name");
		return false;
	}
	else{
		alert("please enter a valid name");
		return false;
	}
}
function pno() {
	// body...
	var n = document.getElementById("no").value;
	var a = /^\d{10}$/
	if(n.match(a)){
		alert("Entered phone number is valid");
		return true;
	}
	 else if(n == ""){
		alert(" Please enter a valid phone number");
		return false;
	}
	else{
		alert("Please enter a valid phone number");
		return false;
	}
}
function m() {
	// body...
	var em = document.getElementById("mail").value;
	if(em == ""){
		alert("Please enter mail id");
		return false;
	}
}
function ranno() {
	var a =  Math.floor(Math.random() * 1000) + 1;
	var b =  Math.floor(Math.random() * 1000) + 1; 
	document.getElementById("n1").value = a;
	document.getElementById("n2").value = b;
	win();
	return document.getElementById("n1").value;
	return document.getElementById("n2").value;
}
function win(){
	var a = document.getElementById("n1").value;
	var b = document.getElementById("n2").value;
	var amod3 = {
		zero:"Human",    //These values 0,1,2 are values of remainders when a is divided by 3. 
		one :"Cockroach",
		two:"Nuclear bomb"
	}
		if(a%3 == b%3){
			var r = "TIE";
			return document.getElementById("ans").innerHTML = r;
		}
		else if((a % 3 == 0 && b%3 == 1) || (a % 3 == 1 && b % 3 == 0)){
			var r = amod3.zero;
			return document.getElementById("ans").innerHTML = r;
		}
		else if((a % 3 == 0 && b%3 == 2) || (a % 3 == 2 && b % 3 == 0)){
			return r = amod3.two;
			return document.getElementById("ans").innerHTML = r;
		}
		else if((a % 3== 1 && b % 3 == 2) || (a %3 == 2 && b%3 == 1)){
			var r = amod3.one;
			return document.getElementById("ans").innerHTML = r;
		}
	}
 function palindrome() {
 	var s = document.getElementById("text").value;
 	var a = s.split("");
 	var len = a.length;
 	var array = "";
 	for(var i = 0;i < len;i++){
 		  array += a[i];
 	}
 	var narray = "";
 	for(var j = len-1;j >= 0;j--){ 
 		 narray += array[j];	
 	}
 	var count = 0;
 	for(var k = 0;k < len;k++){
 		if(array[k] == narray[k]){
 			count++;
 	}
 }
 	if(count == len){
 		return true;
 	}
 	else{
 		return false;
 	}
}
function anagram(){
	var s1 = document.getElementById("i1").value;
	var s2 = document.getElementById("i2").value;
	 function sorting(str) {
    	var s = str.toLowerCase();
    	var l = s.split('');
    	var so = l.sort();
    	var j = so.join('');
    	return j;
    }
    var a = sorting(s1);
    var b = sorting(s2);
    if(a == b){
    	return true;
    }
    else{
    	return false;
    }
}