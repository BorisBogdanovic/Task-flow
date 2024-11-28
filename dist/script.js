document.getElementById('hamburger').addEventListener('click', function () {
    let menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});

const navs = document.querySelectorAll('nav')
navs.forEach(nav => {
    nav.addEventListener('click', e => {
        e.preventDefault()

        if (e.target.classList.contains('nav-link')) {
            const targetId = e.target.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({behavior: 'smooth'});
        }
    })
})

const heroBtn = document.querySelector('#hero-btn')

heroBtn.addEventListener('click', e => {
    e.preventDefault()
    const targetId = e.target.getAttribute('href');

    document.querySelector(targetId).scrollIntoView({behavior: 'smooth'});


})


const tabs = document.querySelectorAll('.tab');
const tabsContainer = document.querySelector('#slider-navigation-wrapper');
const tabContents = document.querySelectorAll('.tab_content');


tabsContainer.addEventListener('click', e => {
    e.preventDefault();
    const clickedTab = e.target.closest('.tab');

    if (clickedTab) {
        const activeTabNum = clickedTab.getAttribute('data-tab');
        const activeTabContent = document.querySelector(`.tab_content-${activeTabNum}`);

        // Uklonite klasu 'active' sa svih tabova
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        // Dodajte klasu 'active' na kliknuti tab
        clickedTab.classList.add('active');

        // Sakrijte sve tab sadržaje
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        activeTabContent.classList.remove('hidden');
    }
});


//////////////////////////////////////////////////////////////////
const sections = document.querySelectorAll('section');

const isVisible = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const SectionObserver = new IntersectionObserver(isVisible, {
    root: null,
    threshold: 0,
    rootMargin: '0px'
});

sections.forEach(section => {
    SectionObserver.observe(section);
});
///////////////////////////////////////////////////////////////////
const sot = document.querySelector('#scrollOnTOP');
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        sot.style.opacity = '1';
    } else {
        sot.style.opacity = '0';
    }
});
sot.addEventListener('click', function (e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});