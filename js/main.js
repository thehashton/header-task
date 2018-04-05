/*===============================
Desktop Dropdown Menu
================================*/
$(document).ready(function() {
    // Hides menu(s) on document load
    $(".dropdown-nav__wrapper").hide();
    $(".mobile-menu__wrapper").hide();
        // Hides Mobile Overlay background
        $(".mobile-menu__overlay").hide();
        
    // Toggles the dropdown menu
    $(".menu__item:nth-of-type(2)").mouseenter(function(){
        $('.dropdown-nav__wrapper').delay(70).fadeToggle();
    });

    // If mouse leaves dropdown nav wrapper it hides it
    $(".dropdown-nav__wrapper").mouseleave(function(){
        $(".dropdown-nav__wrapper").delay(70).fadeOut();
    })

    /* Prevent Right Click from hiding the dropdown. Mouse leave is being triggered due to a Chrome bug. Right click is being disabled on the dropdown menu for now (not a great solution). 
    
    At http://selcobw.com you can see the same bug cancelling the dropdown menu there too but it's slightly more delayed.*/ 
    $( ".dropdown-nav__wrapper" ).on("contextmenu",function(){
        return false;
     }); 
});

/*===============================
Mobile Menu
================================*/
$(".header__centremob--menu").click(function() {
    $(".mobile-menu__wrapper").toggle();
    $(".mobile-menu__overlay").toggle();
    $(".mobclose").toggle();
})

// Close Button
$(".mobile-menu__close").click(function() {
    $(".mobile-menu__wrapper").toggle();
    $(".mobile-menu__overlay").toggle();
    $(".mobclose").toggle();
})
