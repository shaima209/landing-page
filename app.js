
// build the nav

function function1() {
	var ul = document.getElementById("navbar__menu");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode());
	ul.appendChild(li);
  }
  



// Set sections as active


const section= document.querySelectorAll('section');
const navlist=document.querySelectorAll('.navbar__menu ul li');

window.addEventListener('scroll', ()=>{

	let current='';
	
	section.forEach(section=> {

		const sectionTop=section.offsetTop;
		const sectionHeight=section.clientHeight;
		if(scrollY>=(sectionTop-sectionHeight/3)){
			current=section.getAttribute('id');


		}})
navlist.forEach(li=>{
	li.classList.remove('active');
	if (li.classList.contains(current)){

		li.classList.add('active')
	}
	

})})




	//// Build button to scroll 

	let button = document.getElementById("btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	button.style.display = "block";
  } else {
	button.style.display = "none";
  }

  }

function topFunction() {
  document.documentElement.scrollTop = 0; 

}

// using getBoundingClientRect(0)


var boxRectangle=target.getBoundingClientRect();
var localX=(viewportx-boxRectangle.left)
var localy=(viewporty-boxRectangle.top)

const box = document.querySelector("div.landing__container");
window.addEventListener('scroll', function(){
	
	if(box.getBoundingClientRect().left <=window.innerWidth){
		box.style.background = "black";
	}
	else{

		box.style.background = "none";};
	})
	
var landing__container=document.createElement("div");
landing__container.classList.add("landing__container");
landing__container.style.left=(localX+"px");
landing__container.style.top=(localy+"px");
target.appendChild('landing__container');


	







/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/






/**
 * End Main Functions
 * Begin Events
 * 
*/



	

	
