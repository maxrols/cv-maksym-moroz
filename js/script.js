const showMoreBtn = document.querySelector('.show-more');
const sidebar = document.querySelector('.sidebar');



showMoreBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navbar-link');
const pages = document.querySelectorAll('article[id]');

function removeActiveNav() {
    navLinks.forEach(navlink => {
        navlink.classList.remove('active');
    });
}

navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        window.scrollTo(0,0);
        let target = e.target.innerHTML.toLowerCase();
        removeActiveNav();
        pages.forEach(page => {
            if (page.id == target) {
                page.classList.add('active');
                navLink.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    });
});