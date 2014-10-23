document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("colorButton").addEventListener("click",function(){
	var colorString = document.getElementById("colorfield").value;
	chrome.tabs.executeScript(null,
				  {code:"document.body.style.backgroundColor='" + colorString + "'"});
    });

});
/*
document.getElementById("colorButton").addEventListener("click", function(){
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + "yellow" + "'"});
    //document.getElementById("")
});
*/

