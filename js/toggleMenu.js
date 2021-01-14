const links = document.querySelectorAll('a');
links.forEach(function(element){
    element.addEventListener('click', function(e){
        e.preventDefault();
    });
});

//  menu toggle
const navbarToggle = document.querySelector('.btn-toggle');
const navbarMenu = document.querySelector('.header-items');
const navbarLinks = document.querySelectorAll('.header-items .header-link');

navbarToggle.addEventListener('click', function(){
    navbarMenu.classList.toggle('open');
}, false);

navbarLinks.forEach(function(element){
    element.addEventListener('click', function(){
        if(navbarMenu.classList.contains('open')){
            navbarToggle.click();
        }
    });
});