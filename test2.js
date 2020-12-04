/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 */

const navContainer = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

//Build the navbar based on the available and future sections
const navGenerator = () => {
    for (const section of sections) {
        const navButton = document.createElement("li");
        const link = document.createElement("a");

        //Add classes to each anchor tag inside the list items. A new class with the same name as section id is being
        //added to be used later for changing the style of the nav button when the corresponding section is in the viewport.
        link.classList.add("menu__link", `${section.id}`);
        link.setAttribute("href", `#${section.id}`);
        link.textContent = section.dataset.nav;
        navButton.appendChild(link);
        navContainer.appendChild(navButton);
    }
};
navGenerator();

// Listening for a click on the navbar menu to scroll to the appropriate sections. Here I'm targeting the anchor tags to fire up
//the event handler
const navLinks = document.querySelectorAll("a");
for (const navLink of navLinks) {
    navLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLink.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
}

///Add active class to the sections. Inspired by the concept explained by Mentor in https://knowledge.udacity.com/questions/66312#66326
document.addEventListener("scroll", () => {
    for (let section of sections) {
        const viewPort = section.getBoundingClientRect();

        if (viewPort.top <= 120 && viewPort.bottom >= 120) {
            section.classList.add("your-active-class");
            for (const navLink of navLinks) {
                // Check the navbar buttons to find a match class name with section and add/remove the active class

                if (navLink.classList.contains(`${section.id}`)) {
                    navLink.classList.add("active");
                } else {
                    navLink.classList.remove("active");
                }
            }
        } else {
            section.classList.remove("your-active-class");
        }
    }
});

//Scroll to top
const topIcon = document.getElementById("top-icon");
topIcon.addEventListener("click", (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
