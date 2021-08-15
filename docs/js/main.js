
function changeHeight() {
    let filterBox = document.querySelector('.filter-box'),
        filterBoxButtonShowAllIcon = document.querySelector('.filter-arrow'),
        filterBoxButtonShowAll = document.querySelector('.filter-show-all-button'),
        filterBoxButtonClear = document.querySelector('.filter-clear-button')

    filterBox.classList.toggle('show-all')
    filterBoxButtonClear.classList.toggle('d-none')

    if (filterBox.classList.contains('show-all')) {
        filterBoxButtonShowAll.innerHTML = 'Свернуть'
        filterBoxButtonShowAllIcon.style
    } else {
        filterBoxButtonShowAll.innerHTML = 'Показать больше фильтров <i class="bx bx-chevron-down filter-arrow"></i>'
    }

    filterBoxButtonShowAllIcon.classList.toggle('bx-rotate-180')
}

window.addEventListener('resize', function(event){
    let bigText = document.querySelector('.big-text')
    if(event.target.innerWidth < 1200) {
        bigText.innerHTML = 'Вет. услуги'
    }else{
        bigText.innerHTML = 'Ветеринарные услуги'
    }
});
