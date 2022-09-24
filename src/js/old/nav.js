let local_side_nav = document.querySelector('.local-side-nav');
function local_nav(){

    let global_nav_logo_wrapper = document.querySelector('.global-nav-logo-wrapper');
    let global_nav = document.querySelector('.global-nav');
    let local_nav = document.querySelector('.local-nav');

    let global_nav_height;
    let local_nav_height = local_nav.offsetHeight;
    let media_768 = window.matchMedia('(max-width : 768px)');

    function local_nav_marginTop(){
        if (media_768.matches){ global_nav_height = global_nav_logo_wrapper.offsetHeight; }
        else{ global_nav_height = global_nav.offsetHeight; }
        local_nav.style.marginTop = `${global_nav_height}px`;
        local_side_nav.style.marginTop = `${local_nav_height + global_nav_height}px`;
        local_side_nav.style.height = `calc(100vh - ${local_nav_height + global_nav_height}px)`;
        window.addEventListener('scroll', () => {
            let scroll_y = window.scrollY;            
            if (scroll_y <= global_nav_height){
                local_side_nav.style.marginTop = `${(local_nav_height + global_nav_height) - scroll_y}px`;
                local_side_nav.style.height = `calc(100vh - ${(local_nav_height + global_nav_height) - scroll_y}px)`;
            } else if (scroll_y > global_nav_height){
                local_side_nav.style.marginTop = `${local_nav_height}px`;
                local_side_nav.style.height = `calc(100vh - ${local_nav_height}px)`;
            }
        });
    };


    local_nav_marginTop()
    window.addEventListener('resize', local_nav_marginTop);

};
local_nav();

const local_nav_topic_anchor = document.querySelector('.local-nav-topic-anchor');
local_nav_topic_anchor.setAttribute('href',(window.location.origin + window.location.pathname));
const topic_subtopic_link_text = document.querySelector('.topic-subtopic-link-text');
topic_subtopic_link_text.textContent = `subtopic related to ${local_nav_topic_anchor.textContent}`;

// max width 1100px
// hamburger and nav links
let local_ham_btn = document.querySelector('.local-nav-hamburger-wrapper');
let local_ham_btn_bread = document.getElementsByClassName('local-nav-hamburger-bread-crust');
let local_ham_text_topic = document.querySelector('.local-nav-hamburger-text-span-topic');
let local_ham_text_hide = document.querySelector('.local-nav-hamburger-text-span-hide');
// let local_side_nav_g = document.querySelector('.local_side-nav');

let local_nav_logo_anchor = document.querySelector('.local-nav-topic-anchor');
let local_nav_link_link_anchors = document.getElementsByClassName('local-side-nav-link-anchor');
let local_nav_link_sublink_anchors = document.getElementsByClassName('local-side-nav-link-sublinks-anchor');

local_ham_btn.addEventListener('click', () => {
    for (let i = 0; i < local_ham_btn_bread.length; i++){
        local_ham_btn_bread[i].classList.toggle('awesome-sushant');
        if (local_ham_btn_bread[i].classList.contains('awesome-sushant')){
            local_ham_text_topic.classList.remove('awesome-sushant');
            local_ham_text_hide.classList.add('awesome-sushant');
        }
        else{
            local_ham_text_topic.classList.add('awesome-sushant');
            local_ham_text_hide.classList.remove('awesome-sushant');
        }
    }
    local_side_nav.classList.toggle('awesome-sushant');
});

function rem_loc_class(){
    for (let i = 0; i < local_ham_btn_bread.length; i++){ local_ham_btn_bread[i].classList.remove('awesome-sushant'); }
    local_ham_text_topic.classList.add('awesome-sushant');
    local_ham_text_hide.classList.remove('awesome-sushant');
    local_side_nav.classList.remove('awesome-sushant');
}
local_nav_logo_anchor.addEventListener('click', rem_loc_class);
for (let i = 0; i < local_nav_link_link_anchors.length; i++) { local_nav_link_link_anchors[i].addEventListener('click', rem_loc_class);}
for (let i = 0; i < local_nav_link_sublink_anchors.length; i++) { local_nav_link_sublink_anchors[i].addEventListener('click', rem_loc_class);}
