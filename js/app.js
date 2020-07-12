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
        navItems += `<li><a href="#" data-link="${navName}">${navName}</a></li>`
    })

    // append data as HTML to navList ul container
    navList.innerHTML = navItems;

}

navBuilder();   // calling navbar builder


/* 
    distinguish the section and nav item in view
 */

const navItems = document.querySelectorAll('li a');    // group all nav Items

function scrollActive() {
    sections.forEach(section => {
        let cord = Math.floor(section.getBoundingClientRect().top);
        if (cord >= -300 && cord < 300) {
            section.classList.add('active');

            // loop through all nav items
            navItems.forEach(navItem => {
                // choose which link is active based on active section
                if (navItem.dataset.link === section.dataset.nav) {
                    navItem.classList.add('active-link')
                } else {
                    navItem.classList.remove('active-link')
                }
            })

        } else {
            section.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive);


/* 
    scroll into view 
*/
function scrolling() {
    // loop through nav bar items
    navItems.forEach(navItem => {
        navItem.addEventListener('click', (e) => {
            e.preventDefault(); // prevent default click action

            // loop through each section
            sections.forEach(section => {

                // choose the right section to scroll to
                if (section.dataset.nav === navItem.dataset.link) {
                    // use the top position related to the selected section
                    section.scrollIntoView({ behavior: "smooth", top: section.getBoundingClientRect().top });
                }
            })
        })
    })
}

scrolling();    // invoking scrolling function

