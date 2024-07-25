/* script.js 
   Author:
   Date:
*/

$(document).ready(function(){ // begin document.ready block

	//jquery code here

names = ["Mq97H/4/","Mq97H/4/"]
name_pretty = ["Props","Etc."]

	var name_prettyleng = name_pretty.length;

	for (var i=0; i<name_prettyleng; i++) {
		//console.log(counties[i])
		$('.countydrop').append('<p class="'+ name_pretty[i] +'" numb='+i+'>'+ name_pretty[i] +'</p>')

	}

	$('.countydrop p').click(function(){

		$('#myDropdown').removeClass('show')
		var clicked = Number($(this).attr('numb'));
		var clickedname = names[clicked]
		var prettyname = name_pretty[clicked]
		console.log(clickedname)
		console.log(prettyname)

		$('.MAPiframe').html('<iframe src="https://datawrapper.dwcdn.net/' + clickedname + '" width="100%" height="1100" frameBorder="0" scrolling="no"></iframe>')

		//$('.MAPtitle').html('<h1 style="text-align:center"> Snowpack Totals </h1>')


	});	

}); //end document.ready block

function myFunction() {
	  document.getElementById("myDropdown").classList.toggle("show");
	}

	function filterFunction() {
	  var input, filter, ul, li, a, i;
	  input = document.getElementById("myInput");
	  filter = input.value.toUpperCase();
	  div = document.getElementById("myDropdown");
	  p = div.getElementsByTagName("p");
	  for (i = 0; i < p.length; i++) {
	    txtValue = p[i].textContent || p[i].innerText;
	    if (txtValue.toUpperCase().indexOf(filter) > -1) {
	      p[i].style.display = "";
	    } else {
	      p[i].style.display = "none";
	    }
	  }
	}
