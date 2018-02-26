alert("Please log in to Your facebook account.")
alert("Go to Facebook graph API-> Tools & Support -> Graph Api Explorer -> Get User Access token")
$(document).ready(function(){
	

	function getfbinfo(){

		$.ajax("https://graph.facebook.com/me?fields=name,email,education,birthday,gender,hometown,books&access_token="+document.getElementById("tok2").value, {

			success: function(response){
				console.log(response);
				$("#name1").text(response.name);
				$("#Email").text(response.email);
				$("#Education").text(education1());
				function education1()
				{
					var s="";
					for (x=0; x<response.education.length;x++)
						s+= "\n"+response.education[x].school.name+","
					return s;
				}	
				$("#birthday").text(response.birthday);
				$("#gender").text(response.gender);
				$("#Hometown").text(response.hometown.name);
				$("#Books").text(book1());
				function book1()
				{
					var s="";
					for (x=0;x<response.books.data.length;x++)
					{
						s+=response.books.data[x].name+",";
					}
					return s;
				}
			}
		});
	}
	$("#btn1").on("click",getfbinfo);
});
 document.getElementById("btn2").onclick = function () {
        location.href = "feed.html";
    };

