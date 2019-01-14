/*

	Create varialbles to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/

let receivingParty = window.prompt("Enter Receiving Party's name:");
let disclosingParty = window.prompt("Enter Disclosing Party's name:")
let date = window.prompt("Enter the date: ");

let discParties = document.querySelectorAll(".disclosing-party");
let recParties = document.querySelectorAll(".receiving-party");

discParties.forEach((party) => {
	party.innerHTML = disclosingParty;
})

recParties.forEach(function(party) {
	party.innerHTML = receivingParty;
})

document.querySelector(".date").innerHTML = date;