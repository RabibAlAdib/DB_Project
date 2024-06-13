/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    const Menu = document.querySelector('#navBar');
    const postElement = document.createElement('div');
    postElement.classList.add('MenuNAV');
    postElement.innerHTML=`
    <div id="MenuLeftItem">
        <div class="logoArea">
            <img src="img/Logo.png" alt="Logo" style="width: 100px">
        </div>
        <div class="MenuBarLink Links_Container">
            <a class="home-link menuItem" href="index.html">Home</a>
            <a class="home-link menuItem" href="Vaccination.html">Vaccine</a>
            <a class="home-link menuItem" href="Appointment.html">Appoinment</a>
            <a class="home-link menuItem" href="DoctorPage.html">Doctor</a>
            <a class="home-link menuItem" href="About.html">About</a>
        </div>
    </div>
    <div class="newuser " id="checkUser">
            <a href="loginForm.html"><button class="btnMain" type="button" id="loginbtn">Login</button></a>
            <a href="Registration.html"><button class="btnMain" type="button" id="Register">Register</button></a>
    </div>
    <input type="checkbox" id="sidebar-active">
    <label for="sidebar-active" class="open-sidebar-menu">
    <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="62px" fill="#fff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </label>
    <label id="overlay" for="sidebar-active"></label>
    <div class= "ShortMenu Links_Container">
        <label for="sidebar-active" class="close-sidebar-menu">
            <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="62px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </label>
        <a class="home-link menuItem" href="index.html">Home</a>
        <a class="home-link menuItem" href="Vaccination.html">Vaccine</a>
        <a class="home-link menuItem" href="Appointment.html">Appoinment</a>
        <a class="home-link menuItem" href="DoctorPage.html">Doctor</a>
        <a class="home-link menuItem" href="About.html">About</a>
    </div>
    `
    Menu.appendChild(postElement)
    
        
    postMethods()

});




const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});







