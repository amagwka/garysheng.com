document.addEventListener('DOMContentLoaded', function(){
var a;
var b;
function setText() {
     a = document.getElementsByTagName("div");
     b= document.getElementsByClassName("cbalink");
     a[0].innerHTML="";
     b[0].innerHTML="";
}
setText();
});