! function () { 
    let code_container = document.getElementsByClassName('match-braces');
    let code_line_number = document.getElementsByClassName('code-line-number');
    for (let e = 0; e < code_container.length; e++){
        code_container_match = code_container[e].textContent.match(/\n/g) || '';
        
        // code-line-number
        for (let i = 1; i < code_container_match.length + 2; i++){
            let line_no_div = document.createElement('div');
            line_no_div.setAttribute('class', `line-number line-number-${i}`);
            let line_no_div_text = document.createTextNode(`${i}`);
            line_no_div.appendChild(line_no_div_text);
            code_line_number[e].appendChild(line_no_div)
        }
    }
    
}();

// tool bar
! function () {
    let theme_btn = document.getElementsByClassName('toolbar-theme-btn');
    let dark_theme_icon = document.getElementsByClassName('dark-theme-icon');
    let light_theme_icon = document.getElementsByClassName('light-theme-icon');

    let code_wrapper_css = document.getElementById('code-wrapper-css');
    let code_highlight_css = document.getElementById('code-highlight-css');

    for(let i = 0; i < theme_btn.length; i++){
        theme_btn[i].addEventListener('click', () => {
            for(let e = 0; e < dark_theme_icon.length; e++){
                if (light_theme_icon[e].classList.contains('theme-active')){
                    dark_theme_icon[e].classList.add('theme-active');
                    light_theme_icon[e].classList.remove('theme-active');
                    code_wrapper_css.href = "../rsrc/code/css/light/code.css";
                    code_highlight_css.href = "../rsrc/code/css/light/code-highlight.css";
                }
                else{
                    dark_theme_icon[e].classList.remove('theme-active');
                    light_theme_icon[e].classList.add('theme-active');
                    code_wrapper_css.href = "../rsrc/code/css/dark/code.css";
                    code_highlight_css.href = "../rsrc/code/css/dark/code-highlight.css";
                }
            }
        });
    }
}();

! function(){
    let copy_btn = document.getElementsByClassName('toolbar-copy-btn-wrapper');
    // let download_btn = document.getElementsByClassName('toolbar-download-btn');
    let code_text = document.getElementsByClassName('pre-code');
    
    for(let i = 0; i < code_text.length; i++){
        copy_btn[i].addEventListener('click', () => {
            navigator.clipboard.writeText(code_text[i].textContent);
        });
    }
}();

! function(){
    let code = document.getElementsByClassName('code-text-wrapper');
    let num = document.getElementsByClassName('code-line-number-wrapper');

    function code_scroll(mouseover, scroll){
        for (let i = 0; i < scroll.length; i++){
            scroll[i].scrollTo(0, mouseover[i].scrollTop);
        }
    }

    for (let i = 0; i < code.length; i++){
        code[i].addEventListener('scroll', (e) => {
            code_scroll(code, num)
        });
        // num[i].addEventListener('scroll', () => {
        //     code_scroll(num, code)
        // });
    }

}();