const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

//Nav animation function
function navAnimation(direction1, direction2){
    navItems.forEach((navItem, index) => {
        navItem.classList.replace(`slide${direction1}-nav-${index + 1}`, `slide${direction2}-nav-${index + 1}`)
    });
}

//ToggleMenu function
function toggleMenu(){
    //Toggle menu-bars to show X for close upon click
    menuBars.classList.toggle('change');

    //Toggle menu to show/hide (overlay-active will work as a boolean value)
    overlay.classList.toggle('overlay-active'); 
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.replace('overlay-hide', 'overlay-show');
        //Animation for each nav bar - Slide In
        navAnimation('out', 'in');
    }else{
        overlay.classList.replace('overlay-show','overlay-hide');
        //Animation for each nav bar - Slide Out
        navAnimation('in', 'out');
    }
    
}

// Toggle hamburger menu bars onclick
menuBars.addEventListener('click', toggleMenu);
navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleMenu)
});

