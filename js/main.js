function changeHeight() {
    let filterBox = document.querySelector('.filter-box'),
        filterBoxButtonShowAllIcon = document.querySelector('.filter-arrow'),
        filterBoxButtonShowAll = document.querySelector('.filter-show-all-button'),
        filterBoxButtonClear = document.querySelector('.filter-clear-button')

    filterBox.classList.toggle('show-all')
    filterBoxButtonClear.classList.toggle('d-none')

    if(filterBox.classList.contains('show-all')) {
        filterBoxButtonShowAll.innerHTML = 'Свернуть'
        filterBoxButtonShowAllIcon.style
    }else{
        filterBoxButtonShowAll.innerHTML = 'Показать больше фильтров <i class="bx bx-chevron-down filter-arrow"></i>'
    }

    filterBoxButtonShowAllIcon.classList.toggle('bx-rotate-180')
}



// search-box open close js code
let navbar = document.querySelector(".navigation-bar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navigation-bar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
}



