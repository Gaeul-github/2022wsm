//toggle hidden menu
const toggleMenu =  (toggleId, navlisteId)=>{
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navlisteId);
    const toggleIcon = document.getElementsByTagName('i')[0];

    if(toggle && navList){
        toggle.addEventListener('click', ()=>{
            navList.classList.toggle('show-menu');
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x-circle");

        }
        );
    }
}
toggleMenu('nav-toggle','nav-list');