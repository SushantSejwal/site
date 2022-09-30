let hamburger = document.getElementsByClassName('side-nav-subtopic-active-btn-wrapper');
let hamburger_bread_wrapper = document.getElementsByClassName('side-nav-subtopic-active-btn');
let hamburger_bread = document.getElementsByClassName('side-nav-subtopic-active-btn-line');
let subtopic_wrapper = document.getElementsByClassName('side-nav-subtopic');
let subtopic_list = document.getElementsByClassName('side-nav-subtopic-list');
let transition_time;
for (let i = 0; i < hamburger.length; i++){
    subtopic_wrapper[i].style.height = '0px';
    subtopic_wrapper[i].style.overflow = 'hidden';
    transition_time = `${Math.ceil((subtopic_list[i].clientHeight) * (6 / 110))}`;
    if (transition_time.length  ===  1){
        subtopic_wrapper[i].style.transition = `height 0.${transition_time}s cubic-bezier(0.86, 0, 0.07, 1)`;
    }else if (transition_time.length > 1){
        transition_time = `${Math.ceil((subtopic_list[i].clientHeight) * (4 / 110))}`;
        let tr_time = '';
        for (let a = 0; a < transition_time.length; a++){
            if(transition_time.length - 1 === a){
                tr_time = tr_time + '.';
                tr_time = tr_time + transition_time[a];
            }else{
                tr_time = tr_time + transition_time[a];
            }
        }
        subtopic_wrapper[i].style.transition = `height ${tr_time}s cubic-bezier(0.86, 0, 0.07, 1)`;
    }
    
    hamburger[i].addEventListener('click', () => onHamburgerClick(i))
}

function onHamburgerClick(index){
    let index_1 = index * 2;
    let index_2 = index_1 + 1;
    hamburger_bread[index_1].classList.toggle('topic-hamburger-active');
    hamburger_bread[index_2].classList.toggle('topic-hamburger-active');
    hamburger_bread_wrapper[index].classList.toggle('topic-hamburger-active');
    
    subtopic_wrapper[index].classList.toggle('topic-hamburger-active');
    if (subtopic_wrapper[index].classList.contains('topic-hamburger-active')) {
        let subtopic_list_height = subtopic_list[index].clientHeight;
        subtopic_wrapper[index].style.height = `${subtopic_list_height + 25}px`;
    } else{
        subtopic_wrapper[index].style.height = `0px`; sushant
    }
}