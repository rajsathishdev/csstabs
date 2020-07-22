let tabs = document.querySelectorAll("[data-tab-target]");
let tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => tabContent.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
        target.classList.add('active');
        tab.classList.add('active');
    });

    if(tab.classList.value == 'active') {
        const target = document.querySelector(tab.dataset.tabTarget);
        target.classList.add('active');
    }
});
 