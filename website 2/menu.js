// JavaScript Document
function display_menu(fileName)
{
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET",fileName,false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	
	document.write("<table><tr><th>Title</th><th>Description</th><th>Price</th></tr>");
	var x=xmlDoc.getElementsByTagName("food");
	for (i=0;i<x.length;i++)
	  { 
		  	document.write("<tr><td>");
	  		document.write(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
	  	  	document.write("</td><br><td>");
	  	  	document.write(x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue);
	  	  	document.write("</td><br><td>");
	  	  	document.write(x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
	  	  	document.write("</td><br></tr>");
	  }
	  
	document.write("</table>");
}