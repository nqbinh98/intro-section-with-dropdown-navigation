const menuBtn = document.querySelector('.menu-btn');
const menuModal = document.querySelector('.menu-modal');
const menuDropdown = document.querySelector('.dropdown-menu');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const selectElement = document.querySelector('.select');

function toggleDropdown (element) {
    element.classList.toggle('is-active');
    if (!element.classList.contains('is-active')) {
        element.setAttribute('aria-expanded', 'false'); 
    } else {
        element.setAttribute('aria-expanded', 'true'); 
    }
}

const allDropdownElement = document.querySelectorAll('[data-dropdown]');
selectElement.addEventListener('click', function (e) {
    if (e.target.closest('.dropdown-content')) {
        return;
    }

    let parentElement = e.target.closest('[data-dropdown]');
    if(parentElement) {
        allDropdownElement.forEach(element => {
            if (element !== parentElement && element.classList.contains('is-active')) {
                closeDropdownMenu(element);
            }
        })
        toggleDropdown(parentElement);
    }
})

document.addEventListener('click', function (e) {    
    if(!selectElement.contains(e.target)) {
        allDropdownElement.forEach(element => {
            closeDropdownMenu(element);
        })
    }
})

function closeDropdownMenu (element) {
    element.classList.remove('is-active');
    element.setAttribute('aria-expanded', 'false'); 
}
function handleMenu () {
    menuModal.classList.toggle('is-close');
    menuModal.classList.toggle('is-open');
}

menuBtn.addEventListener('click', handleMenu);
menuCloseBtn.addEventListener('click', handleMenu);
menuModal.addEventListener('click', handleMenu);
menuDropdown.addEventListener('click', function (e) {
    e.stopPropagation();
})

