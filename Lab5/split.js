 function splitText()
 {
 	var text = document.getElementById('sentence').value;
 	var delimiter = document.getElementById('splitid').value;


 	var splitArray = text.split(delimiter);

  document.getElementById('splitText').value = splitArray.join("\n");







 }