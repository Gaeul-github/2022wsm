//toggle hidden menu
const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName('i')[0];

    if(toggle && navList){
        //add 추가, remove 제거, toggle: 추가/제거
        toggle.addEventListener('click',() =>{
            //toggle menu
            navList.classList.toggle('show-menu');
            //change toggle icon: bx-menu <-> bx-x-circle
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x-circle");
        });
    }
}
toggleMenu('nav-toggle', 'nav-list');
// function say(){
//     console.log('hello world1');
// }
// const say = function(){
//     console.log('hello world2');
// }
// const say = () => console.log('hello world3');
// say();
const addNow = (homeCardId) =>{
    //html -> js
    const homeCard = document.getElementById(homeCardId);

    //시간 -> index번째 식사가 선택되어야하는지 결정
    //조식 끝 : 8 : 00 -> 480
    //중식 끝 : 13 : 00 -> 780
    //석식 끝 : 17 : 50 -> 1070
    var now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    console.log(hour , minute);
    // index = hour%12;
    // hour = 4;
    // minute = 20;
    // console.log(hour, minute);

    // index = 0;
    // console.log(index);  

    minute = hour*60+minute;

    if(minute > 1070){
        index = 0;
        console.log(index);
    }else if(minute > 780){
        index = 2;
        console.log(index);
    }else if(minute > 480){
        index = 1;
        console.log(index);
    }else{
        index = 0;
        console.log(index);
    }
    
    //homeCard에서 index번째 card에 new 클래스 추가
    let card =  homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');
}
addNow('home-card');