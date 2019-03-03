


function searchForSubString(){
	var text = document.getElementById('textarea').value;
	var subString = document.getElementById('subid').value;
	var index = document.getElementById('resultid').value;

	var firstIndex = text.indexOf(subString);
	var Lastindex = text.lastIndexOf(subString);

	var userFirstIndex = text.indexOf(subString,index);
	var userLastIndex = text.lastIndexOf(subString,index);

	 
	document.getElementById('firstid').value=firstIndex ; 
	document.getElementById('lastid').value=Lastindex ;

 
	document.getElementById('firsfromtid').value=userFirstIndex ; 
	document.getElementById('lastfromtid').value=userLastIndex ;
	
	







}