const tabs = document.querySelectorAll('.winners__tipe-item'),
      tabsContent = document.querySelectorAll('.winners__list'),
      tabsParent = document.querySelector('.winners__tipe');



function hideTabContent() {
    tabsContent.forEach( item => {
        item.classList.add('display-hide');
        item.classList.remove('display-show');

    });

    tabs.forEach(item =>{
        item.classList.remove('winners__tipe-item_active');
    });
}

function showTabContent(i = 1) {
    tabsContent[i].classList.add('display-show');
    tabsContent[i].classList.remove('display-hide');

    tabs[i].classList.add('winners__tipe-item_active');
}


hideTabContent();
showTabContent();



tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    tabs.forEach((item, i) => {
        if(target === item) {
            hideTabContent();
            showTabContent(i);
        }
    })
});



// show more


const btn = document.querySelector('.winners__btn');
let newContent = `
                            <div class="winners__list-item">
                                <div class="winners__prise">Колонка </div>
                                <div class="winners__tel">+79624***824</div>
                                <div class="winners__data">15 ноября - 12 декабря</div>
                            </div>

`;

btn.addEventListener('click', ()=>{
    const body = document.querySelector('.winners__body-table');
    tabsContent.forEach(item => {
        if(item.classList.contains('display-show')) {
            item.innerHTML += newContent;
        }
    });
});
