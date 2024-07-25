
	$(document).ready(function(){ // begin document.ready block

		//jquery code here
	
	names1 = ["3miUX/2/", "3miUX/2/", "3miUX/2/"]
	name_pretty1 = ["State Senate", "State Assembly", "Etc."]
	
		var name_pretty1leng = name_pretty1.length;
	
		for (var i=0; i<name_pretty1leng; i++) {
			//console.log(counties[i])
			$('.countydrop1').append('<p class="'+ name_pretty1[i] +'" numb1='+i+'>'+ name_pretty1[i] +'</p>')
	
		}
	
		$('.countydrop1 p').click(function(){
	
			$('#myDropdown1').removeClass('show1')
			var clicked1 = Number($(this).attr('numb1'));
			var clickedname1 = names1[clicked1]
			var prettyname1 = name_pretty1[clicked1]
			console.log(clickedname1)
			console.log(prettyname1)
	
			$('.MAPiframe1').html('<iframe src="https://datawrapper.dwcdn.net/' + clickedname1 + '" width="100%" height="1100" frameBorder="0" scrolling="no"></iframe>')
	
			//$('.MAPtitle').html('<h1 style="text-align:center"> Monthly Precipitation Totals </h1>')
	
	
		});	
	
	}); //end document.ready block
	
	function myFunction1() {
			document.getElementById("myDropdown1").classList.toggle("show1");
		}
	
		function filterFunction1() {
			var input, filter, ul, li, a, i;
			input = document.getElementById("myInput1");
			filter = input.value.toUpperCase();
			div = document.getElementById("myDropdown1");
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
	