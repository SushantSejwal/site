let side_nav_links_and_sublinks = [{
    cont_sublinks: true,
    title: 'String',
    link: '#',
    keyword: 'strstring',
    sublinks: [{
            title: 'String Methods',
            link: '#',
            keyword: 'strstringmethods',
        },{
            title: 'Operations on String',
            link: '#',
            keyword: 'operationonstrstring',
        },{
            title: 'String Formatting',
            link: '#',
            keyword: 'strstringformatting',
        },{
            title: 'Modifying String',
            link: '#',
            keyword: 'strstringmodifying',
        }
    ]
},{
    cont_sublinks: false,
    title: 'Getting started',
    link: '#',
    keyword: 'gsdgdg',
}
]

! function () {
    // creating and adding page side nav links and sublinks      
    let side_nav_all_link_container = document.querySelector('.local-side-nav-links');
    for (let b = 0; b < side_nav_links_and_sublinks.length; b++){
        if (side_nav_links_and_sublinks[b].cont_sublinks === true){
            let side_nav_link_container = document.createElement('div');
            side_nav_link_container.setAttribute('class', 'local-side-nav-link-wrapper');
            let side_nav_link = document.createElement('div');
            side_nav_link.setAttribute('class', 'local-side-nav-link');
            let side_nav_link_anchor_wrapper = document.createElement('div');
            side_nav_link_anchor_wrapper.setAttribute('class', 'local-side-nav-link-anchor-wrapper');
            let side_nav_link_anchor = document.createElement('a');
            side_nav_link_anchor.setAttribute('class', 'local-side-nav-link-anchor');
            side_nav_link_anchor.setAttribute('href', `${side_nav_links_and_sublinks[b].link}`);
            let side_nav_link_anchor_text = document.createTextNode(`${side_nav_links_and_sublinks[b].title}`)
            side_nav_link_anchor.appendChild(side_nav_link_anchor_text);
            side_nav_link_anchor_wrapper.appendChild(side_nav_link_anchor);

            // if sublinks exists
            // sublink btn
            let side_nav_sublink_btn_wrapper = document.createElement('div');
            side_nav_sublink_btn_wrapper.setAttribute('class', `local-side-nav-link-sub-links-button-wrapper local-side-nav-link-sub-links-button-wrapper-${b+1}`);
            let side_nav_sublink_btn = document.createElement('div');
            side_nav_sublink_btn.setAttribute('class', 'local-side-nav-link-sub-links-button');
            let side_nav_sublink_btn_line_1 = document.createElement('div');
            side_nav_sublink_btn_line_1.setAttribute('class', `local-side-nav-link-sub-links-button-line local-side-nav-link-sub-links-button-line-${b+1}`);
            let side_nav_sublink_btn_line_2 = document.createElement('div');
            side_nav_sublink_btn_line_2.setAttribute('class', `local-side-nav-link-sub-links-button-line local-side-nav-link-sub-links-button-line-${b+1}`);
            side_nav_sublink_btn.appendChild(side_nav_sublink_btn_line_1);
            side_nav_sublink_btn.appendChild(side_nav_sublink_btn_line_2);
            side_nav_sublink_btn_wrapper.appendChild(side_nav_sublink_btn);


            side_nav_link.appendChild(side_nav_link_anchor_wrapper);
            side_nav_link.appendChild(side_nav_sublink_btn_wrapper);

            // sublinks
            let sublinks_wrapper = document.createElement('div')
            sublinks_wrapper.setAttribute('class', `local-side-nav-link-sublinks-wrapper local-side-nav-link-sublinks-wrapper-${b+1}`)
            let sublinks = document.createElement('div')
            sublinks.setAttribute('class', 'local-side-nav-link-sublinks')
            for (let c = 0; c < side_nav_links_and_sublinks[b].sublinks.length; c++){
                let sublinks_anchor_wrapper = document.createElement('div')
                sublinks_anchor_wrapper.setAttribute('class', `local-side-nav-link-sublinks-anchor-wrapper local-side-nav-link-sublinks-anchor-wrapper-${b+1}`)
                let sublinks_anchor = document.createElement('a')
                sublinks_anchor.setAttribute('class', 'local-side-nav-link-sublinks-anchor')
                sublinks_anchor.setAttribute('href', `${side_nav_links_and_sublinks[b].sublinks[c].link}`)
                let sublinks_anchor_text = document.createTextNode(`${side_nav_links_and_sublinks[b].sublinks[c].title}`)
                sublinks_anchor.appendChild(sublinks_anchor_text);
                sublinks_anchor_wrapper.appendChild(sublinks_anchor);
                sublinks.appendChild(sublinks_anchor_wrapper);
            }
            sublinks_wrapper.appendChild(sublinks);

            side_nav_link_container.appendChild(side_nav_link);
            side_nav_link_container.appendChild(sublinks_wrapper);

            side_nav_all_link_container.appendChild(side_nav_link_container)
        }
        else{
            let side_nav_all_link_container = document.querySelector('.local-side-nav-links');
            let side_nav_link_container = document.createElement('div');
            side_nav_link_container.setAttribute('class', 'local-side-nav-link-wrapper');
            let side_nav_link = document.createElement('div');
            side_nav_link.setAttribute('class', 'local-side-nav-link');
            let side_nav_link_anchor_wrapper = document.createElement('div');
            side_nav_link_anchor_wrapper.setAttribute('class', 'local-side-nav-link-anchor-wrapper');
            let side_nav_link_anchor = document.createElement('a');
            side_nav_link_anchor.setAttribute('class', 'local-side-nav-link-anchor');
            side_nav_link_anchor.setAttribute('href', `${side_nav_links_and_sublinks[b].link}`);
            let side_nav_link_anchor_text = document.createTextNode(`${side_nav_links_and_sublinks[b].title}`)
            side_nav_link_anchor.appendChild(side_nav_link_anchor_text);
            side_nav_link_anchor_wrapper.appendChild(side_nav_link_anchor);

            side_nav_link.appendChild(side_nav_link_anchor_wrapper);
            side_nav_link_container.appendChild(side_nav_link);
            side_nav_all_link_container.appendChild(side_nav_link_container);
        }
    }

    


    let local_side_nav_sublink_btn = document.getElementsByClassName('local-side-nav-link-sub-links-button-wrapper');
    let local_side_nav_link_btn_lines = document.getElementsByClassName(`local-side-nav-link-sub-links-button-line`);
    let local_side_nav_link_sublink = document.getElementsByClassName(`local-side-nav-link-sublinks-wrapper`);
    function sublink_btn_line(btn_index){
        let index_1 = btn_index * 2;
        let index_2 = index_1 + 1;
        local_side_nav_link_btn_lines[index_1].classList.toggle('side-nav-sublink-active');
        local_side_nav_link_btn_lines[index_2].classList.toggle('side-nav-sublink-active');
    }
    for (let i = 0; i < local_side_nav_sublink_btn.length; i++){
        local_side_nav_sublink_btn[i].addEventListener('click', () => {
            sublink_btn_line(i)
            local_side_nav_link_sublink[i].classList.toggle('side-nav-sublink-active');
            
            let local_nav_sublink_height = document.getElementsByClassName(`local-side-nav-link-sublinks-anchor-wrapper-${i+1}`);
            let local_nav_sublink_total_height = 0;
            for (let d = 0; d < local_nav_sublink_height.length; d++){
                local_nav_sublink_total_height = local_nav_sublink_total_height + local_nav_sublink_height[d].clientHeight;
            }
            if (local_side_nav_link_sublink[i].classList.contains('side-nav-sublink-active')){
                local_side_nav_link_sublink[i].style.height = `${local_nav_sublink_total_height + 30}px`
            }
            else{
                local_side_nav_link_sublink[i].style.height = `0px`
            }
        });
    }

}();
