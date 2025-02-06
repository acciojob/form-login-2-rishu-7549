document.getElementById("submit").addEventListener('click', function(){
let fname = document.getElementById("firstName").value;
let lname = document.getElementById("lastName").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
	
	alert(`First Name: ${fname} Last Name: ${lname} Phone Number: ${phone} Email ID: ${email}`);
	
});

