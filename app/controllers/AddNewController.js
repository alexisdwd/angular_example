app.controller('AddNewController', function ($http,$scope) {


 	    function sendImg(){
	    	var formData = new FormData($("#addForm")[0]);
	  		// formData.append("image[picture_path]", $("#file").files[0]);


	    	$.ajax({
				method: "POST",
				url: "http://ibec-news.herokuapp.com/api/v1/upload-image",
				data: formData,
				contentType: false,
				processData: false,
				success: function(msg) {
					alert("Sent successs!");
				},
				error: function() {
					alert(formData);
					alert("Error!");
				}
	  		});
	    };


		$scope.user = {};
	    
	    function sendUser(){
	    	

		  	$http({
				  method: 'POST',
				  url: 'https://jsonplaceholder.typicode.com/users',
				  data:$scope.user,
			      headers: {'Content-Type': 'application/x-www-form-urlencoded'}

				}).then(function successCallback(response) {
				     alert("success");
				  }, function errorCallback(response) {
				     
				    alert('woops')
				  });	
	    	
	    }

	    $("#sendImg").click(function(e){
	  		e.preventDefault();
	  	 	sendImg();
		});

		$("#sendUser").click(function(e){
	  		e.preventDefault();
	  	 	sendUser();
		});


 });