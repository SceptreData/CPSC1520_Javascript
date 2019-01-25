/* Logging
----------------- */
console.log("Hello! This is a console message!!");

/* Selecting Elements
------------------------ */
var pageTitle = document.querySelector("h1");
pageTitle.innerHTML = "David's Cool Intro";

var img = document.getElementById("figure-img");
img.style.width = "500px";
img.style.borderRadius = "5%";

var par = document.querySelectorAll("p")[0];
par.innerHTML = "This is David's custom paragraph! Welcome to the place where he rambles on for a while. <b>Wow!</b> Look at him go. ";

var sectionHeader = document.querySelector(".intro");

/* Variables
------------------- */
var firstName;
firstName = "David";
console.log("My name is " + firstName)

/* Modifying Elements
----------------------- */
var intro = document.querySelector(".intro");
intro.innerHTML = "It's <b>pretty</b> sweet.";

var title = document.querySelector("title");
title.innerHTML = "David's Neat Website";