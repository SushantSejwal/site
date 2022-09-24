! function(){
    let nav_list_item_container = document.getElementsByClassName('global-nav-links-list');
    let nav_list_item_container_content = 
    `<li class="global-nav-links-list-items global-nav-links-list-item-1">
        <span class="global-nav-links-list-item-spans global-nav-links-list-items-span-1">
            <a href="#" class="global-nav-links-list-item-anchors global-nav-links-list-item-anchor-1">Number System</a>
        </span>
    </li>
    <li class="global-nav-links-list-items global-nav-links-list-item-2">
        <span class="global-nav-links-list-item-spans global-nav-links-list-items-span-2">
            <a href="#" class="global-nav-links-list-item-anchors global-nav-links-list-item-anchor-2">Boolean Logic</a>
        </span>
    </li>
    <li class="global-nav-links-list-items global-nav-links-list-item-3">
        <span class="global-nav-links-list-item-spans global-nav-links-list-items-span-3">
            <a href="#" class="global-nav-links-list-item-anchors global-nav-links-list-item-anchor-3">Python</a>
        </span>
    </li>
    <li class="global-nav-links-list-items global-nav-links-list-item-4">
        <span class="global-nav-links-list-item-spans global-nav-links-list-items-span-4">
            <a href="#" class="global-nav-links-list-item-anchors global-nav-links-list-item-anchor-4">MySql</a>
        </span>
    </li>
    <li class="global-nav-links-list-items global-nav-links-list-item-5">
        <span class="global-nav-links-list-item-spans global-nav-links-list-items-span-5">
            <a href="#" class="global-nav-links-list-item-anchors global-nav-links-list-item-anchor-5">Steve Jobs</a>
        </span>
    </li>
    <li class="global-nav-links-list-items global-nav-links-list-item-6">
        <span class="global-nav-links-list-item-spans global-nav-links-list-items-span-6">
            <a href="#" class="global-nav-links-list-item-anchors global-nav-links-list-item-anchor-6">About Me</a>
        </span>
    </li>`;

    for (let i = 0; i < nav_list_item_container.length; i++){
        nav_list_item_container[i].innerHTML = nav_list_item_container_content;
    }
}();


let global_nav_logo_wrapper = document.querySelector('.global-nav-logo-wrapper');
let global_hamburger = document.querySelector('.global-hamburger-wrapper');
let global_nav = document.querySelector('.global-nav');
let all_container = document.querySelector('.all-container');



// hamburger and nav links
let ham_btn = document.querySelector('.hamburger-anchor');
let ham_btn_bread = document.querySelectorAll('.global-hamburger-bread');
let ham_text_menu = document.querySelector('.global-hamburger-text-menu');
let ham_text_close = document.querySelector('.global-hamburger-text-close');

let global_nav_logo_anchor = document.querySelector('.global-nav-logo-anchor');
let global_nav_link_link_list_wrapper = document.querySelector('.global-nav-links-list-wrapper');
let global_nav_link_link_list = document.querySelector('.global-nav-links-list');
let global_nav_link_link_list_items = document.querySelectorAll('.global-nav-links-list-items');
let global_nav_link_link_anchors = document.querySelectorAll('.global-nav-links-list-item-anchors');

ham_btn.addEventListener('click', () => {
    ham_btn_bread.forEach((line) => {
        line.classList.toggle('ham-active');
        if (line.classList.contains('ham-active')){
            ham_text_menu.classList.remove('ham-active');
            ham_text_close.classList.add('ham-active');
        }
        else{
            ham_text_menu.classList.add('ham-active');
            ham_text_close.classList.remove('ham-active');
        }
    });

    global_nav.classList.toggle('ham-active')
    if(all_container){
        all_container.classList.toggle('ham-active')
    }

    global_nav_link_link_list_wrapper.classList.toggle('ham-active');
    global_nav_link_link_list.classList.toggle('ham-active');
    global_nav_logo_wrapper.classList.toggle('ham-active');


    global_nav_link_link_anchors.forEach((anchor) => {
        anchor.classList.toggle('ham-active');
    });
    global_nav_link_link_list_items.forEach((list_item) => {
        list_item.classList.toggle('ham-active');
    });


})

function removing_classes() {
    ham_btn_bread.forEach((line) => { line.classList.remove('ham-active'); });
    ham_text_menu.classList.add('ham-active');
    ham_text_close.classList.remove('ham-active');
    global_nav_link_link_anchors.forEach((anchor) => { anchor.classList.remove('ham-active'); });
    global_nav_link_link_list_items.forEach((list_item) => { list_item.classList.remove('ham-active'); });
    global_nav_link_link_list_wrapper.classList.remove('ham-active');
    global_nav_link_link_list.classList.remove('ham-active');
    global_nav_logo_wrapper.classList.remove('ham-active');
}

global_nav_logo_anchor.addEventListener('click', () => {
    removing_classes()
})

global_nav_link_link_anchors.forEach((anchor) => {
    anchor.addEventListener('click', () => { removing_classes() });
});

!function(){
    let theme_icon = document.getElementsByClassName('local-nav-theme-logo');
    for(let i = 0; i < theme_icon.length; i++){
        theme_icon[i].style.display = 'none';
    }
}();