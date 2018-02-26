$(document).ready(function(){
	
	var token1="EAACEdEose0cBAPU2nYc09zFZB4pdFFSqC6lO6DEoKdoAkBZCjUZANXl4U7TwzhL3993eMjZBux8UCwZCZB4vgMZBxBaU11vWAzZCAEW68KAK054eksxnY8VRytpO4BxeVyfMRidopYTGb90tpN5soZAsofyj1UeOSC66JIFhaQgjge4VNxFJOAG8rHSNNi4lwO9rOVPgZAHuEtoQZDZD";

	function getfdinfo(){

		$.ajax("https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,link}&access_token="+document.getElementById("tok").value,{

			success: function(response){
				console.log(response);
				$("#ct").text(response.posts.data[0].created_time)
				$("#tp").text(response.posts.data[0].type)
				var pic1=response.posts.data[0].full_picture
				$("#pic").append('<img style="width:100%"src="' + pic1 + '"/>');
				$("#stor").text(response.posts.data[0].story)
				$("#msg").text(response.posts.data[0].message)
				var tlink=response.posts.data[0].link
				$("#lin").append('<a href="' + tlink + '">'+ 'Click here to See the shared Post on FaceBook' + '</a>');
				
			}
		});
	}
	$("#btn2").on("click",getfdinfo);
});
