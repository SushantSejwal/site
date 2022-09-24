! function() {
    // getting nav elements
    let nav_logo = document.getElementById('nav-logo-anchor');
    let nav_list_items = document.getElementsByClassName('nav-list-item-anchor');
    let theme_btn = document.getElementById('theme-change-btn');

    let search_container = document.querySelector('.py-search-wrapper');
    // let search_logo = document.querySelector('.search-logo');
    let search_input = document.querySelector('.search-input');

    let search_result_wrapper = document.querySelector('.search-result-wrapper');
    let search_result = document.querySelector('.search-result');
    
    let search_cancel_btn = document.querySelector('.search-cancel-btn');
    let search_btn = document.getElementById('search-btn');

    search_btn.addEventListener('click', search_btn_add);
    search_cancel_btn.addEventListener('click', search_btn_remove);
    search_result_wrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('search-result-wrapper')){
            search_btn_remove()
        }
    });
    
    let media_1000 = window.matchMedia('(max-width: 1000px)');
    window.addEventListener('resize', () => {
        if (media_1000.matches) {
            search_btn_remove()
        }
    })

    function search_btn_add(){
        nav_logo.classList.add('search-active');
        theme_btn.classList.add('search-active');
        for (let i = 0; i < nav_list_items.length; i++){
            nav_list_items[i].classList.add('search-active');
        }
        search_container.classList.add('search-active');
        // search_logo.classList.add('search-active');
        search_input.focus();
        search_cancel_btn.classList.add('search-active');

        search_result_wrapper.classList.add('search-active');
        search_result.classList.add('search-active');
    }
    function search_btn_remove(){
        search_container.classList.remove('search-active');
        search_cancel_btn.classList.remove('search-active');
        nav_logo.classList.remove('search-active');
        theme_btn.classList.remove('search-active');
        for (let i = 0; i < nav_list_items.length; i++){
            nav_list_items[i].classList.remove('search-active');
        }
        // search_logo.classList.remove('search-active');
        search_input.value = '';

        search_result_wrapper.classList.remove('search-active');
        search_result.classList.remove('search-active');
    }


}();