
const navContainer = document.querySelector('#navbar__list');
const navItemArray = [];
// const sectionId = document.querySelectorAll('section');

//Make an array of all available sections
const sections = document.querySelectorAll('section');
    for (const section of sections){
     navItemArray.push(section);  
}

//Add navbar items approach 1 with href and link needed
function navGenerator(){
navItemArray.forEach(element => {
    const navItem = document.createElement('li');
    navItem.classList.add('menu__link');
    const link = document.createElement('a');
    link.href = (`#${element.id}`);
    // link.setAttribute('href', `#${element.id}`);
    navItem.textContent = element.dataset.nav;
    navItem.id = element.id;
    
    navItem.insertAdjacentElement('beforeend',link);
    // navItems.insertAdjacentElement('beforeend',navItem);
    navContainer.appendChild(navItem);
    

});
}

//// navbar approach 2 with no href and link needed also event listener is being implemented right in the nabar function
// Generator . Only differnce is that CSS class 'menu__link' display should be changed to inline-bloc
// function navGenerator(){
//     for(const section of sections) {
//         const navButton = document.createElement('li');
//         // const link = document.createElement('a');
//         navButton.classList.add('menu__link');
//         // link.setAttribute('href', `#${section.id}`);
//         navButton.textContent = section.dataset.nav;
//         // navButton.appendChild(link);
//         navContainer.appendChild(navButton);

//         // Add eventlistener to scroll smoothly to the section
//         navButton.addEventListener('click', function(e){
//         e.preventDefault();
//         document.getElementById(section.id).scrollIntoView({behavior: "smooth"});
    
//     });
//     }}
//-------



navGenerator();

//Create anchor tag for each nav buttons

//Add listener to navbar menu for approach 1
const navButtons = document.querySelectorAll('.menu__link');
for (const button of navButtons){
    button.addEventListener('click', function(e){
    e.preventDefault();
    const anchor = document.querySelectorbutton.getAttribute('href');
    console.log(button.attributes);

});
}
// navContainer.addEventListener('click', function(e){
//     const sectionToview = (this.getAttribute('href')) ;
    
    // href.scrollIntoView();
    
    // console.log(e.target.innerHTML);
    // const navButtonId = (`#${e.target.id}`);
    // for(let i=0; i<=navItemArray.length; i++){
        // console.log(e.target);
        // if (navButtonId === sections[i].id){
        //     sections[i].scrollIntoView();
        // }
    // });
    // 
    // sectionToview.scrollIntoView();

    // console.log(sectionToview);
// });
    







