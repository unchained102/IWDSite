document.getElementById("myName").addEventListener("input", validName);
document.getElementById("myEmail").addEventListener("input", validEmail);
document.getElementById("myBirthday").addEventListener("input", validBirthday);
document.getElementById("mySuggestion").addEventListener("input", validSuggestion);

function validName() {
	const value = document.getElementById("myName").value.trim();
	const errorText = document.getElementById("nameError");

	if (value.length < 3) {
		errorText.textContent = "Name must be at least 3 characters.";
		return false;
	}
	errorText.textContent = "";
	return true;
}

function validEmail() {
	const value = document.getElementById("myEmail").value.trim();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const errorText = document.getElementById("emailError");
	if (!emailRegex.test(value)) {
		errorText.textContent = "Invalid email.";
		return false;
	}
	errorText.textContent = "";
	return true;
}
function validBirthday() {
	const minDate = new Date('1900-01-01');
	const maxDate = new Date('2099-12-31'); 
	const value = document.getElementById("myBirthday").value;
	const userDate = new Date(value);
	const errorText = document.getElementById("birthdayError");
	if (userDate <= minDate || userDate >= maxDate) {
		let dateArray = value.split("-");
		errorText.textContent = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0] + " Is not a valid birthday";
		return false;
	}
	errorText.textContent = "";
	return true;
}
function validSuggestion() {
	const value = document.getElementById("mySuggestion").value;
	const errorText = document.getElementById("suggestionError");
	const maxLength = 280;
	if (value.length > maxLength) {
		errorText.textContent = value.length - 280 + " too many characters.";
		return false;
	}
	errorText.textContent = "";
	return true;
}

function validForm() {
	if (!validName()) {
		return false;
	}
	if (!validEmail()) {
		return false;
	}
	if (!validBirthday()) {
		return false;
	}
	if (!validSuggestion()) {
		return false;
	}
	return true;
}