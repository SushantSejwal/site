// Top nav
! function(){
    let hamburger_btn = document.getElementById('hamburger-menu-wrapper');
    let hamburger_lines = document.getElementsByClassName('hamburger-line');
    let nav_wrapper = document.getElementById('side-nav-wrapper');
    let top_nav = document.getElementById('top-nav');

    hamburger_btn.addEventListener('click', onHamburgerBtnClick);

    function onHamburgerBtnClick() {
        for (let i = 0; i < hamburger_lines.length; i++){
            hamburger_lines[i].classList.toggle('hamburger-active');
        }
        nav_wrapper.classList.toggle('hamburger-active');
        top_nav.classList.toggle('hamburger-active');
        
        nav_wrapper.style.transitionDuration = '0.8s, 0.4s';
    }

    let media_1001 = window.matchMedia('(min-width: 1001px)');
    window.addEventListener('resize', () => {
        if (media_1001.matches) {
            for (let i = 0; i < hamburger_lines.length; i++){
                hamburger_lines[i].classList.remove('hamburger-active');
            }
            nav_wrapper.classList.remove('hamburger-active');
            top_nav.classList.remove('hamburger-active');
            nav_wrapper.style.transitionDuration = '0s, 0.4s';
        }
    });
    
}();

// Side nav
! function(){
    let hamburger = document.getElementsByClassName('side-nav-subtopic-active-btn-wrapper');
    let hamburger_bread_wrapper = document.getElementsByClassName('side-nav-subtopic-active-btn');
    let hamburger_bread = document.getElementsByClassName('side-nav-subtopic-active-btn-line');
    let subtopic_wrapper = document.getElementsByClassName('side-nav-subtopic');
    let subtopic_list = document.getElementsByClassName('side-nav-subtopic-list');
    let transition_time;

    // for (let i = 0; i < hamburger.length; i++){
    //     subtopic_wrapper[i].style.height = '0px';
    //     subtopic_wrapper[i].style.overflow = 'hidden';

    //     transition_time = `${Math.ceil((subtopic_list[i].clientHeight) * (6 / 110))}`;
    //     if (transition_time.length  ===  1){
    //         subtopic_wrapper[i].style.transition = `height 0.${transition_time}s cubic-bezier(0.86, 0, 0.07, 1)`;
    //     }else if (transition_time.length > 1){
    //         transition_time = `${Math.ceil((subtopic_list[i].clientHeight) * (4 / 110))}`;
    //         let tr_time = '';
    //         for (let a = 0; a < transition_time.length; a++){
    //             if(transition_time.length - 1 === a){
    //                 tr_time = tr_time + '.';
    //                 tr_time = tr_time + transition_time[a];
    //             }else{
    //                 tr_time = tr_time + transition_time[a];
    //             }
    //         }
    //         subtopic_wrapper[i].style.transition = `height ${tr_time}s cubic-bezier(0.86, 0, 0.07, 1)`;
    //     }
        
    //     hamburger[i].addEventListener('click', () => onHamburgerClick(i))
    // }
    
    // function onHamburgerClick(index){
    //     let index_1 = index * 2;
    //     let index_2 = index_1 + 1;
    //     hamburger_bread[index_1].classList.toggle('topic-hamburger-active');
    //     hamburger_bread[index_2].classList.toggle('topic-hamburger-active');
    //     hamburger_bread_wrapper[index].classList.toggle('topic-hamburger-active');
        
    //     subtopic_wrapper[index].classList.toggle('topic-hamburger-active');
    //     if (subtopic_wrapper[index].classList.contains('topic-hamburger-active')) {
    //         let subtopic_list_height = subtopic_list[index].clientHeight;
    //         subtopic_wrapper[index].style.height = `${subtopic_list_height + 25}px`;
    //     } else{
    //         subtopic_wrapper[index].style.height = `0px`;
    //     }
    // }
    document.querySelector('.side-nav-topic-list').addEventListener('click', (e) => {
        console.log(e.target)
    })
}();

// search on mobile

! function(){
    let search_remove = document.getElementById('side-nav-search-text-remove-btn');
    let search_wrapper = document.getElementById('side-nav-search');
    let search_input = document.getElementById('side-nav-search-input');
    let search_cancel_btn_wrapper = document.getElementById('side-nav-search-cancel-btn-wrapper');
    let search_cancel_btn = document.getElementById('side-nav-search-cancel-btn-text');
    search_remove.style.display = 'none';

    search_input.addEventListener('input', (event) => {
        if (event.target.value.length){
            search_remove.style.display = 'flex';
            search_remove.addEventListener('click', () => { event.target.value = ''; search_remove.style.display = 'none'});
        } else{ search_remove.style.display = 'none'; }
    });

    let search_result = document.getElementById('mobile-search-result-wrapper');
    let nav_links = document.getElementById('side-nav-navigation');
    let top_nav = document.getElementById('top-nav');
    let nav_wrapper = document.getElementById('side-nav-wrapper')

    search_input.addEventListener('focus', searchAdd );
    search_cancel_btn.addEventListener('click', searchRemove );

    function searchAdd(){
        search_wrapper.classList.add('search-mobile-active');
        search_cancel_btn_wrapper.classList.add('search-mobile-active');
        search_result.classList.add('search-mobile-active');
        nav_links.classList.add('search-mobile-active');
        top_nav.classList.add('search-mobile-active');
        nav_wrapper.classList.add('search-mobile-active');
    }

    function searchRemove(){
        search_wrapper.classList.remove('search-mobile-active');
        search_cancel_btn_wrapper.classList.remove('search-mobile-active');
        search_result.classList.remove('search-mobile-active');
        nav_links.classList.remove('search-mobile-active');
        top_nav.classList.remove('search-mobile-active');
        nav_wrapper.classList.remove('search-mobile-active');
        search_input.value = ''; 
        search_remove.style.display = 'none'
    }
    
}();
