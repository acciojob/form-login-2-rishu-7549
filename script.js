document.getElementById("submit").addEventListener('click', function(){
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let phone = document.getElementById("pnumber").value;
let email = document.getElementById("email").value;
	
	alert(`First Name: ${fname} Last Name: ${lname} Phone Number: ${phone} Email ID: ${email}`);
	
});

