/* Table of content components
   ========================================================================== */
   
   class Toc {
    constructor(el) {
        this.el = el;
        this.toc__nav__list = this.el.querySelector(".c-table-of-content__nav");
        this.toc__nav__list__items = this.el.querySelectorAll("a.c-table-of-content__nav__item");
        this.toc__content__list = document.querySelector(".c-table-of-content__content");
        this.toc__content__list__items = document.querySelectorAll(".c-table-of-content__content__item");
        this.current__index = 0;
        this.current_state = this.el.querySelector(".current-state");
        this.relativeWidth = (this.toc__nav__list.classList.contains('relativeWidth')) ? true : false;
        this.toc__back_to_top_btn = this.el.querySelector(".back-to-top");
        this.toc__back_to_top_btn__link = this.toc__back_to_top_btn.querySelector("button");
        this.toc__back_to_top_btn__visible = false;
        this.el_init_top = this.el.offsetTop;
        this.header_height = document.querySelector("header").offsetHeight;
        this.main_title_height = document.querySelector(".main-title").offsetHeight;
        this.elPaddingTop = parseFloat(window.getComputedStyle(this.el, null).getPropertyValue('padding-top'));
        this.toc__content__list__items__posTop_from_parent = [];
        this.lastScrollTop = 0;
        this.lastScrollTopd = 0;
        this.currentUrl = window.location.href.split("#")[0];
        this.whatever = this.callBackScrollEvent.bind(this, el);
        this.whateverHash = this.callBackHashEvent.bind(this, el);
        this.init();
    }

    init() {
        this.current_nav_item = this.toc__nav__list.querySelector("[aria-selected]");
        this.toc__back_to_top_btn.style.display = 'none';

        //- Set current item selected             
        let current_index = [...this.toc__nav__list__items].indexOf(this.current_nav_item);

        this.toc__nav__list__items.forEach((table_of_content__item, i) => {
            // Attach events to the toc__nav__list__items if the table_of_content__item have toc__content. Otherwise they just act as links
            table_of_content__item.setAttribute('data-id', this.convertToSlug(table_of_content__item.textContent));
            this.toc__content__list__items[i].setAttribute('data-id', this.convertToSlug(table_of_content__item.textContent));
            if (this.toc__content__list__items.length) this.attachClickEvents(table_of_content__item, i);
            
            if(i === this.toc__nav__list__items.length-1) {
                this.callbackItemsSet(current_index, this.current_nav_item);
            }
        });

        this.toc__back_to_top_btn__link.addEventListener("click", (e) => {
            e.preventDefault();
            this.scrollTo(this.toc__nav__list);
        });
        window.addEventListener('hashchange', this.whateverHash);
    }

    attachClickEvents(table_of_content__item, i) {
        // Handle clicking of toc__items for mouse users
        table_of_content__item.addEventListener("click", (e) => {
            e.preventDefault();
            e.currentTarget.classList.add("clicked");
            window.removeEventListener("scroll", this.whatever);
            window.removeEventListener("hashchange", this.whateverHash);
            let currentToc = this.toc__nav__list.querySelector("[aria-selected]");
            this.switchTocAfterClick(currentToc, e.currentTarget);
        });
    }

    attachScrollEvents(){
        window.addEventListener("scroll", this.whatever);
    }

    callBackScrollEvent(el){
        let toc__posTop_from_viewport =  this.el.getBoundingClientRect().top - this.el_init_top - 128 - 26 - 120; // 126 for header and title fiex, 26 for padding, 50 for a gap
        let window__posTop_from_viewport = window.scrollY;
        var st = window.pageYOffset || document.documentElement.scrollTop; 

        //- Handling back-to-top btn
        if((- this.el.getBoundingClientRect().top) > this.toc__nav__list.clientHeight){
            if(this.toc__back_to_top_btn__visible === false){
                this.fadeIn(this.toc__back_to_top_btn);
                this.toc__back_to_top_btn__visible = true;
            }
        }else{
            if(this.toc__back_to_top_btn__visible === true){
                this.fadeOut(this.toc__back_to_top_btn);
                this.toc__back_to_top_btn__visible = false;
            }
        }

        var std = window.pageYOffset || document.documentElement.scrollTop;
        let index_scroll = 1;
        if (std > this.lastScrollTop){ // downscroll
            index_scroll = -1;
        } else { // upscroll
            index_scroll = 1; }
        this.lastScrollTop = std <= 0 ? 0 : std;
        this.toc__content__list_length = this.toc__content__list__items__posTop_from_parent.length;

        //- Handling active states on scroll
        for (let i = 0; i < this.toc__content__list_length; i++) {

            if ((- toc__posTop_from_viewport) > this.toc__content__list__items__posTop_from_parent[i] && (- toc__posTop_from_viewport) < this.toc__content__list__items__posTop_from_parent[i+1]) {
                // console.log((this.toc__content__list__items__posTop_from_parent[this.toc__content__list_length -3] + (this.toc__content__list__items[this.toc__content__list_length -3].offsetHeight/2)));
                if((- toc__posTop_from_viewport) > (this.toc__content__list__items__posTop_from_parent[this.toc__content__list_length -3] + (this.toc__content__list__items[this.toc__content__list_length -3].offsetHeight/2))  && (- toc__posTop_from_viewport) < this.toc__content__list__items__posTop_from_parent[this.toc__content__list_length -2]){
                    console.log('switch');
                    console.log(this.toc__nav__list__items[i+1]);
                    console.log(this.toc__content__list__items[i+1]);
                    window.removeEventListener("hashchange", this.whateverHash);
                    this.resetActiveToc( this.toc__nav__list__items[i+1], this.toc__content__list__items[i+1], true);
                    var that = this;
                    setTimeout(function(){ 
                        window.addEventListener("hashchange", that.whateverHash);
                    }, 750);
                }else if(this.current__index != this.toc__nav__list__items[i]){
                // console.log("Toc_pos_from_viewport: " + (- toc__posTop_from_viewport));
                // console.log("——: " + this.toc__content__list__items__posTop_from_parent[i+1]);
                    window.removeEventListener("hashchange", this.whateverHash);
                    this.resetActiveToc( this.toc__nav__list__items[i], this.toc__content__list__items[i], true);
                    var that = this;
                    setTimeout(function(){ 
                        window.addEventListener("hashchange", that.whateverHash);
                    }, 750);
                }
            }
        }
        
    }

    callBackHashEvent(el){
        let hash = window.top.location.hash.substr(1);
        if(hash.length){
            window.removeEventListener("scroll", this.whatever);
            let current_hash_content_item = this.toc__content__list.querySelector('[data-id="' + hash + '"]');
            this.resetActiveToc(this.toc__nav__list.querySelector('[data-id="' + hash + '"]'), current_hash_content_item, true);
            this.scrollTo(current_hash_content_item);
            var that = this;
            setTimeout(function(){ 
                window.addEventListener("scroll", that.whatever);
            }, 750);
        }
    }

    callbackItemsSet(current_index, current_nav_item ) { 
        this.toc__nav__list__items.forEach((table_of_content__item, i) => {
            this.toc__content__list__items__posTop_from_parent.push(Math.round(this.toc__content__list__items[i].offsetTop));
        });
        this.toc__content__list__items__posTop_from_parent.push(Math.round(this.toc__content__list__items[this.toc__content__list__items.length-1].offsetTop + this.toc__content__list__items[this.toc__content__list__items.length-1].offsetHeight));

        //- Get # Hashtag from url (ex: lentreprise-partage)
        let hash = window.top.location.hash.substr(1);
        if(hash.length){
            let current_hash_content_item = this.toc__content__list.querySelector('[data-id="' + hash + '"]');
            let current_hash_index = [...this.toc__content__list__items].indexOf(current_hash_content_item);
            this.resetActiveToc(this.toc__nav__list.querySelector('[data-id="' + hash + '"]'), current_hash_content_item, true);
            this.scrollTo(this.toc__content__list__items[current_hash_index]);
        }else{
            this.resetActiveToc(current_nav_item, this.toc__content__list__items[current_index], false);
        }
        var that = this;
        setTimeout(function(){ 
            that.attachScrollEvents()
        }, 750);

    }

    resetActiveToc(newTocNavItem, newTocContentItem, setHash){
        this.positionTopCurrentState(newTocNavItem);

        if(setHash){
            window.location.hash = this.convertToSlug(newTocNavItem.textContent);
        }
        
        for (let i = 0; i < this.toc__nav__list__items.length; i++) {
            this.toc__nav__list__items[i].removeAttribute("aria-selected");
        }
        for (let j = 0; j < this.toc__content__list__items.length; j++) {
            this.toc__content__list__items[j].classList.remove("active");
        }
        if (newTocNavItem) newTocNavItem.setAttribute("aria-selected", "true");
        if (newTocContentItem) newTocContentItem.classList.add("active");
        this.current__index = newTocNavItem;
    }

    switchTocAfterClick(oldTocNavItem, newTocNavItem) {
        newTocNavItem.focus();
        
        let index = [...this.toc__nav__list__items].indexOf(newTocNavItem);
        this.resetActiveToc(newTocNavItem, this.toc__content__list__items[index], true);
        this.scrollTo(this.toc__content__list__items[index]);
        var that = this;
        setTimeout(function(){ 
            newTocNavItem.classList.remove("clicked");
        }, 400);
        setTimeout(function(){ 
            window.addEventListener("scroll", that.whatever);
            window.addEventListener("hashchange", that.whateverHash);
        }, 750);
    }

    positionTopCurrentState(child) {
        // Position of the blue background
        let table_of_content_Y = this.toc__nav__list.getBoundingClientRect().top;
        if(child){
            let itemHeight = child.clientHeight;
            let relativePosTop =  child.getBoundingClientRect().top  - table_of_content_Y;
            this.current_state.style.top = relativePosTop + 'px';
            this.current_state.style.height = itemHeight + 'px';
            if(this.relativeWidth){
                let childWidth =  child.offsetWidth;
                this.current_state.style.width = childWidth + 'px';
            }
        }
    }

    scrollTo(element) {
        let parentPosition = this.el.getBoundingClientRect().top + window.scrollY - this.header_height - this.main_title_height;
        let index = [...this.toc__content__list__items].indexOf(element);
        let gap = (index === 0) ? 176 + this.elPaddingTop : 150 + this.elPaddingTop; // custom values from fixed elements
        let elementPosition = element.offsetTop + (parentPosition - gap);
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
        });
    }

    convertToSlug(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
    
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };
}

const toclists = document.querySelectorAll(".c-table-of-content");

if (toclists.length) {
    [...toclists].map((toclist) => new Toc(toclist));
}