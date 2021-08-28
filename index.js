c=console.log;
var x=[10,20,30,40,50,60];
c(x.length);
x.pop();
c(x);
var y=x.pop();
c(y);
c(x);

x.push(50);
c(x);
x.push(55);
c(x);

x[x.length]=99;
c(x);
x.shift();
c(x);
x.unshift(77);
c(x);

var sports=["cricket","football","chess"];
var s1=sports.join("*");
c(s1);
var s2=sports.join(",");
c(s2);
var s3=sports.join(" ");
c(s3)
var s4=sports.toString();
c(s4);
var s5=sports.reverse();
c(s5);
c(sports);

var ages=[10,20,30,40,50];
delete ages[2];
c(ages);

var x1=[10,20,30,40,50,60];
x1.splice(2,0,100);
c(x1);
var x2=[11,21,31,41,50,60];
x2.splice(2,2,100);
c(x2);

var x3=[11,21,31,41,50,60];
x3.splice(2,1);
c(x3);


var skills=["HTML5","CSS3","JS","ES6","JQUERY","BOOTSTRAP3","BOOTSTRAP4","TYPESCRIPT3","ANGULAR8"];
var output="";
for (var i=0;i<skills.length;i++){
    output+="<p>"+skills[i]+"</p>"
    c(output);
}
document.write(output);

var output1="<ol start=101>";
for (var j=0;j<skills.length;j++){
    output1+="<li>"+skills[j]+"</li>"
    c(output1);
}
output1+="</ol>"
document.write(output1);

var output2="<ul>";
for(var k=0;k<skills.length;k++){
    output2+="<li> I Love "+skills[k]+"</li>"
    c(output2);
}
output2+="</ul>";
document.getElementById("skillset").innerHTML=output2;
function name(){
    alert("Function Call");
}
name();












