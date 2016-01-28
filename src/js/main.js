// Head Images
var us = document.querySelectorAll('.us');
var header = document.querySelector('#welcome');

var erik = us[0];
var martijn = us[1];

window.onload = function() {

	setTimeout( function(){

		erik.classList.add('slide-left');
		martijn.classList.add('slide-right');

	}, 300);

};

document.onscroll = function() {
	var headerHeight = header.offsetHeight;
	var scroll = document.body.scrollTop;

	if ( scroll > (headerHeight / 4) ) {
		
		erik.classList.remove('slide-left');
		martijn.classList.remove('slide-right');

	}
	if ( scroll < (headerHeight / 4) ) {
		
		erik.classList.add('slide-left');
		martijn.classList.add('slide-right');

	}
};


// Dropdown Menu
var dropdownButton = document.querySelector('#dropdown');
var dropdownMenu = document.querySelector('.main-nav nav ul');

dropdownMenu.classList.add('collaped-menu');
dropdownButton.classList.add('uncross');

dropdownButton.onclick = function() {

	dropdownMenu.classList.toggle('collaped-menu');
	dropdownMenu.classList.toggle('uncollaped-menu');

	dropdownButton.classList.toggle('cross');
	dropdownButton.classList.toggle('uncross');

};