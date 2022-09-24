! function () {

    let search_container = document.getElementsByClassName('local-search');
    let search_container_content = 
    `<div class="search-box">
        <div class="search-box-top">
            <div class="search-input">
                <input type="text" id="search-input" placeholder="Search">
            </div>
            <div class="search-cancel-btn">
                <span class="search-cancel-btn-span">Cancel</span>
            </div>
        </div>
        <div class="search-box-bottom">
            <div class="search-box-bottom-top">
                <div class="search-results">
                    <span class="search-results-span">Result</span>
                </div>
                <div class="quick-links empty">
                    <span class="quick-links-span">Quick Links</span>
                </div>
            </div>
            <div class="search-box-bottom-bottom">
                <div class="result-links-items">
                    <a href="#" class="result-links-anchor">String</a>
                </div>
                <div class="result-links-items">
                    <a href="#" class="result-links-anchor">Functions</a>
                </div>
                <div class="result-links-items">
                    <a href="#" class="result-links-anchor">Scope</a>
                </div>
                <div class="result-links-items">
                    <a href="#" class="result-links-anchor">loops</a>
                </div>
                <div class="result-links-items">
                    <a href="#" class="result-links-anchor">Conditional</a>
                </div>
            </div>
        </div>
    </div>`;
    for(let i = 0; i < search_container.length; i++){
        search_container[i].innerHTML = search_container_content;
    };

    // search result output
    let search_result_text = document.querySelector('.search-results');
    let quick_links_text = document.querySelector('.quick-links');
    let quick_links = `<div class="result-links-items">
        <a href="#" class="result-links-anchor">String</a>
    </div>
    <div class="result-links-items">
        <a href="#" class="result-links-anchor">Functions</a>
    </div>
    <div class="result-links-items">
        <a href="#" class="result-links-anchor">Scope</a>
    </div>
    <div class="result-links-items">
        <a href="#" class="result-links-anchor">loops</a>
    </div>
    <div class="result-links-items">
        <a href="#" class="result-links-anchor">Conditional</a>
    </div>`;
    let search_box_result_container = document.querySelector('.search-box-bottom-bottom');


    let py_search_result = [{
        name: 'String',
        url: 'https://sushantsejwal.github.io',
        keyword: 'strstring'
    }, {
        name: 'Function',
        url: 'https://sushantsejwal.github.io',
        keyword: 'deffuncfunctions'
    }, {
        name: 'Loops',
        url: 'https://sushantsejwal.github.io',
        keyword: 'forwhileloopsloop'
    }, {
        name: 'Conditional',
        url: 'https://sushantsejwal.github.io',
        keyword: 'ifelifelseconditional'
    }];

    function search_box_result_output(filtered_result, search_text) {
        if (filtered_result.length > 0) {
            for (let i = 0; i < filtered_result.length && i < 6; i++) {
                let item = document.createElement('div');
                item.setAttribute('class', 'result-links-items');
                let item_anchor = document.createElement('a');
                item_anchor.setAttribute('class', 'result-links-anchor');
                item_anchor.setAttribute('href', `${filtered_result[i].url}`);
                item_anchor_text = document.createTextNode(`${filtered_result[i].name}`);
                item_anchor.appendChild(item_anchor_text);
                item.appendChild(item_anchor);
                search_box_result_container.appendChild(item);
            }
        } else{
            search_box_result_container.innerHTML = `<div class="search-result-not-found">
                <span class="search-result-not-found-N">Nothing found for - </span> 
                <span class="not-find-item-s-t">${search_text}</span>
            </div>`;
            let search_not_found_text =  document.querySelector('.search-result-not-found-N');
            search_not_found_text.style.opacity = '0.8';
            search_not_found_text.style.fontSize = '20px';
            let searched_text =  document.querySelector('.not-find-item-s-t');
            searched_text.style.color = '#000';
            searched_text.style.fontSize = '20px';
            searched_text.style.fontWeight = '500';
        }

    }

    function search_output(length, text) {
        if (length > 0) {
            if (text.trim() === '') {
                search_box_result_container.innerHTML = quick_links;
                search_result_text.classList.remove('searched');
                quick_links_text.classList.add('empty');
            } else {
                search_result_text.classList.add('searched');
                quick_links_text.classList.remove('empty');
                search_box_result_container.innerHTML = '';

                let filtered_result = py_search_result.filter((kw) => {
                    let kw_match = kw.keyword.toLowerCase().includes(text.toLowerCase().trim())
                    let name_match = kw.name.toLowerCase().includes(text.toLowerCase().trim())
                    return name_match || kw_match
                });
                search_box_result_output(filtered_result, text);
            }
        } else {
            search_result_text.classList.remove('searched');
            quick_links_text.classList.add('empty');
            search_box_result_container.innerHTML = quick_links;
        }
    }

    let search_input = document.getElementById('search-input');
    search_input.addEventListener('input', (e) => {
        let input_len = e.target.value.length;
        let input_text = e.target.value;
        search_output(input_len, input_text);
    });

    let search_wrapper = document.querySelector('.local-search');
    let search_box = document.querySelector('.search-box');
    let search_btn = document.querySelectorAll('.local-nav-search-logo');
    let search_cancel_btn = document.querySelector('.search-cancel-btn');

    search_btn.forEach((btn) => {
        btn.addEventListener('click', () => {
            search_wrapper.classList.add('awesome-search');
            search_box.classList.add('awesome-search');
        });
    });
    search_cancel_btn.addEventListener('click', () => {
        search_wrapper.classList.remove('awesome-search');
        search_box.classList.remove('awesome-search');
        search_input.value = '';
        search_result_text.classList.remove('searched');
        quick_links_text.classList.add('empty');
        search_box_result_container.innerHTML = quick_links;
    });


} ();