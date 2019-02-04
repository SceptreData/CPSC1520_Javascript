let form = document.querySelector('.login-form');

form.username.focus();
form.addEventListener('submit', (e)=> {
	let user = form.elements.username;
	let pass = form.elements.password;
	console.log(user.value, pass.value);
	
	e.preventDefault();
	let err = false;
	
	if (isEmptyInput(user)){
		err = true;
		user.classList.add('error');
		console.log("Input is Empty");
	} else {
		user.classList.remove('error');
	}

	if (isEmptyInput(pass)) {
		err = true;
		pass.classList.add('error');
		console.log("Password is Empty");
	}else{
		pass.classList.remove('error');
	}

});

function isEmptyInput(inputElt){
	return inputElt.value.trim() === '';
}

// document.querySelector('.login-form').addEventListener('submit', function (evt) {
// 	var username = evt.target.elements.username;
// 	var passsword = evt.target.elements.passsword;
// 	var valid = true;

// 	if(username.value.trim() == '') {
// 		valid = false;
// 		username.classList.add('error');
// 	} else {
// 		username.classList.remove('error');
// 	}

// 	if(password.value.trim().length < 8) {
// 		valid = false;
// 		password.classList.add('error');
// 	} else {
// 		password.classList.remove('error');
// 	}

// 	if(valid == false) { // if(!valid) {
// 		evt.preventDefault();
// 	}

// });