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

    let side_nav_list = document.querySelector('.side-nav-topic-list');
    // let subtopics = document.getElementsByClassName('side-nav-subtopic-list');

        side_nav_list.addEventListener('click', (e) => {
        if (e.target.classList.contains('side-nav-subtopic-active-btn-wrapper') || e.target.classList.contains('side-nav-subtopic-active-btn') || e.target.classList.contains('side-nav-subtopic-active-btn-container') || e.target.classList.contains('side-nav-subtopic-active-btn-line')){
            let hamburger_line_wrapper, hamburger_line_1, hamburger_line_2, subtopic, subtopic_list, transition_time;

            if (e.target.classList.contains('side-nav-subtopic-active-btn-wrapper')){
                hamburger_line_wrapper = e.target.firstChild.nextSibling.firstChild.nextSibling;
                hamburger_line_1 = hamburger_line_wrapper.firstChild.nextSibling;
                hamburger_line_2 = hamburger_line_1.nextSibling.nextSibling;
                subtopic = e.target.parentNode.nextSibling.nextSibling;
                subtopic_list = subtopic.firstChild.nextSibling;

            } else if (e.target.classList.contains('side-nav-subtopic-active-btn-container')){
                hamburger_line_wrapper = e.target.firstChild.nextSibling;
                hamburger_line_1 = hamburger_line_wrapper.firstChild.nextSibling;
                hamburger_line_2 = hamburger_line_1.nextSibling.nextSibling;
                subtopic = hamburger_line_wrapper.parentNode.parentNode.parentNode.nextSibling.nextSibling;
                subtopic_list = subtopic.firstChild.nextSibling;

            } else if (e.target.classList.contains('side-nav-subtopic-active-btn')){
                hamburger_line_wrapper = e.target;
                hamburger_line_1 = hamburger_line_wrapper.firstChild.nextSibling;
                hamburger_line_2 = hamburger_line_1.nextSibling.nextSibling;
                subtopic = hamburger_line_wrapper.parentNode.parentNode.parentNode.nextSibling.nextSibling;
                subtopic_list = subtopic.firstChild.nextSibling;

            }  else if (e.target.classList.contains('side-nav-subtopic-active-btn-line')){
                hamburger_line_wrapper = e.target.parentNode;
                hamburger_line_1 = hamburger_line_wrapper.firstChild.nextSibling;
                hamburger_line_2 = hamburger_line_1.nextSibling.nextSibling;
                subtopic = hamburger_line_wrapper.parentNode.parentNode.parentNode.nextSibling.nextSibling;
                subtopic_list = subtopic.firstChild.nextSibling;
            }

            transition_time = `${Math.ceil((subtopic_list.clientHeight) * (6 / 110))}`;
            if (transition_time.length  ===  1){
                subtopic.style.transition = `height 0.${transition_time}s cubic-bezier(0.86, 0, 0.07, 1)`;
            }else if (transition_time.length > 1){
                transition_time = `${Math.ceil((subtopic_list.clientHeight) * (4 / 110))}`;
                let tr_time = '';
                for (let a = 0; a < transition_time.length; a++){
                    if(transition_time.length - 1 === a){
                        tr_time = tr_time + '.';
                        tr_time = tr_time + transition_time[a];
                    }else{
                        tr_time = tr_time + transition_time[a];
                    }
                }
                subtopic.style.transition = `height ${tr_time}s cubic-bezier(0.86, 0, 0.07, 1)`;
            }

            hamburger_line_1.classList.toggle('topic-hamburger-active');
            hamburger_line_2.classList.toggle('topic-hamburger-active');
            hamburger_line_wrapper.classList.toggle('topic-hamburger-active');

            subtopic.classList.toggle('topic-hamburger-active');
            if (subtopic.classList.contains('topic-hamburger-active')) {
                let subtopic_list_height = subtopic_list.clientHeight;
                subtopic.style.height = `${subtopic_list_height + 25}px`;
            } else{
                subtopic.style.height = `0px`;
            }
            
        }
        
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
            search_remove.addEventListener('click', () => { event.target.value = ''; search_remove.style.display = 'none'; search_input.focus()});
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
