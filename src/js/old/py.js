const toggle_btn = document.querySelector(".toggle-button"); const btn_bars = document.querySelectorAll(".btn-bar");
const bar_1 = document.querySelector(".bar-1"); const bar_2 = document.querySelector(".bar-2");
const nav_anchor_1 = document.querySelector(".home-anchor"); const nav_anchor_2 = document.querySelector(".other-anchor-1");
const nav_anchor_3 = document.querySelector(".other-anchor-2"); const nav_anchor_4 = document.querySelector(".other-anchor-3");
const nav_anchor_5 = document.querySelector(".other-anchor-4"); const nav_content = document.querySelector(".nav-other-anchor");
const other_nav_link = document.querySelectorAll(".other-nav-anchor"); const home_anchor = document.querySelector(".home-anchor");
let nav_position = document.querySelector('.py-nav'); let sec = document.querySelector('.py-main');let py_intro_page_nav = document.querySelector('.py-sticky-nav');

toggle_btn.addEventListener("click", () => { 
    toggle_classes(); 
    if (nav_position.classList.contains('ss-mob-nav')){
        nav_position.classList.remove('class-for-global-nav-animation')
        py_intro_page_nav.classList.remove('class-for-global-nav-animation')
    }
    else {
        nav_position.classList.add('class-for-global-nav-animation')
        py_intro_page_nav.classList.add('class-for-global-nav-animation')
    }
});

other_nav_link.forEach((item) => { 
    item.addEventListener("click", () => { 
        if (nav_content.classList.contains("ss-mob-nav")) { 
            toggle_classes() 
        }; 
    }); 
});

home_anchor.addEventListener("click", () => { 
    if (nav_content.classList.contains("ss-mob-nav")) { 
    toggle_classes() 
    };
});

function toggle_classes() { 
    bar_1.classList.toggle("ss-mob-nav"); 
    bar_2.classList.toggle("ss-mob-nav"); 
    nav_content.classList.toggle("ss-mob-nav"); 
    nav_position.classList.toggle("ss-mob-nav"); 
    sec.classList.toggle("dibya"); 
}

// bullet
let bullet = document.querySelector(".bullet-list"); let bullet_audio = document.querySelector(".bullet-audio");
let screen_match = window.matchMedia("(max-width:768px)");

function bullet_audio_toggle() { 

    if (bullet_audio.paused) { 
        bullet_audio.play() 
    } 
    else { 
        bullet_audio.pause() 
    };
};

// paly or pause
if (screen_match.matches) { 

    bullet.addEventListener("click", () => { 
        bullet_audio_toggle() 
    }); 
}
else { 

    bullet.addEventListener("mouseover", () => { 
        bullet_audio.play() 
    }); 
    bullet.addEventListener("mouseleave", () => { 
        bullet_audio.pause() 
    }); 
};

// py page inside nav
const py_toggle_btn = document.querySelector(".py-toggle-btn"); const py_nav_hidden = document.querySelector(".py-sticky-list");
const py_nav_link = document.querySelectorAll(".py-page-anchor");

py_toggle_btn.addEventListener("click", () => { 
    py_toggle_btn.classList.toggle("ds"); 
    py_nav_hidden.classList.toggle("ds"); 
});

py_nav_link.forEach((py_link) => { 
    py_link.addEventListener("click", () => { 
        if (py_nav_hidden.classList.contains("ds")) { 
            py_nav_hidden.classList.remove("ds"); 
            py_toggle_btn.classList.remove("ds"); 
        } 
    }); 
});

// footer
const today = new Date();
const this_year = today.getFullYear();
const footer = document.querySelector(".footer-text");
footer.innerHTML = `Copyright &copy; ${this_year} Jinex. All rights reserved`;
