function readEnd(a,b){
var len = a.length;
var leng = b.length;
var res;
var con;
res = a.substring(len-leng,len);
con = a.substring(len-(leng-1),len-leng);
if(res == b){
	return true;
}else{
	return "Error: Missing " + b;
}
}
alert(readEnd("var i = 0;",";"));//a is text b is end