// App Global variables for nav container and sections
const navList = document.querySelector('#navbar-list');
const sections = document.querySelectorAll('section');
const toggle = document.querySelector('#nav-toggle');

/*
    navbar toggler on mobile
*/


toggle.addEventListener('click', () => {

    navList.classList.toggle('mobile-nav');
});


window.addEventListener('resize', () => {
    // navbar resize event
    navList.classList.remove('mobile-nav');
})


/*
    navigation bar builder function
*/

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


/* 
    distinguish the section in view
 */

function scrollActive() {
    sections.forEach(section => {
        let cord = Math.floor(section.getBoundingClientRect().top);
        if (cord >= -150 && cord < 150) {
            section.classList.add('active')
        } else {
            section.classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive);
