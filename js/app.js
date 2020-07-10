// App Global variables for nav container and sections
const navList = document.querySelector('#navbar-list');
const sections = document.querySelectorAll('section');
const toggle = document.querySelector('#nav-toggle');

// navbar toggle icon
toggle.addEventListener('click', () => {
    navList.classList.toggle('mobile-nav');
});

// navigation bar builder function
const navBuilder = () => {
    let navItems = "";      // create empty variable for all nav items

    // loop through sections
    sections.forEach(section => {
        let navName = section.dataset.nav;  // fetch the data from each section 

        // create the navigation items
        navItems += `<li><a href="#${section.id}">${navName}</a></li>`
    })

    // append data as HTML to navList ul container
    navList.innerHTML = navItems;

}

navBuilder();   // calling navbar builder



