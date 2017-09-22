app.controller('ListController', function ($scope) {

	function loadUsers(users) {

		for (i=0; i<users.length; i++){

			$("#users").append( "<tr>");
			$("#users").append( "<td>"+users[i].username+"</td>");
			$("#users").append( "<td>"+users[i].email+"</td>");
			$("#users").append( "<td>"+users[i].phone+"</td>");
			$("#users").append( '<td><button type="button" class="btn btn-primary">Edit</button></td>');
	        $("#users").append( '<td><button type="button" class="btn btn-danger">Delete</button></td>');
			$("#users").append( "</tr>");
		}
	};

	function getUsers(){

		$.get("https://my-json-server.typicode.com/alexisdwd/angular_db/users", function(data){ 

		users = data;
		console.log(data);
		loadUsers (users);
		
		}).fail(function() { alert('woops'); 
		});
	};

getUsers();


});