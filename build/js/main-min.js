function timer(){count+=counterIncrement,0==count&&window.clearInterval(counter),console.log(count)}app.filter("gender",function(){return function(e){switch(e){case 1:return"Male";case 2:return"Female";case 3:return"Third Gender"}}}),$(document).ready(function(){$("div").click(function(e){window.location.href("http://google.com")})});var employees=[{name:"Santosh",age:25,emp_id:23},{name:"jyoti",age:93,emp_id:97},{name:"abhishe",age:99,emp_id:96},{name:"Amir",age:77,emp_id:16}],newemp=employees,i,text;for(text="<ul id='newid'>",i=0;i<newemp.length;i++){var newage=newemp[i].age.toString().split("").reverse().join("");text+="<li>"+newemp[i].name+"<br>"+newemp[i].emp_id+"<br>"+newage+"</li>"}text+="</ul>",document.getElementById("list_emp").innerHTML=text;var count=10,counterIncrement=-1,counter=setInterval(timer,500);