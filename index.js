const menuBtn = document.querySelector('.menu-btn');
const menuModal = document.querySelector('.menu-modal');
const menuDropdown = document.querySelector('.dropdown-menu');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const featuresSelect = document.querySelector('.features-select');
const featuresCollapsed = document.querySelector('.features-collapsed');
const featuresExpanded = document.querySelector('.features-expanded');
const featuresContent = document.querySelector('.features-content');
const companySelect = document.querySelector('.company-select');
const companyCollapsed = document.querySelector('.company-collapsed');
const companyExpanded = document.querySelector('.company-expanded');
const companyContent = document.querySelector('.company-content');

function handleMenu () {
    menuModal.classList.toggle('is-open');
    menuModal.classList.toggle('is-close');
}

function handleFeaturesSelect () {
    featuresCollapsed.classList.toggle('hide');
    featuresExpanded.classList.toggle('hide');
    featuresContent.classList.toggle('is-open-content');
    featuresContent.classList.toggle('is-close-content');
}

function handleCompanySelect () {
    companyCollapsed.classList.toggle('hide');
    companyExpanded.classList.toggle('hide');
    companyContent.classList.toggle('is-open-content');
    companyContent.classList.toggle('is-close-content');
}

menuBtn.addEventListener('click', handleMenu);
menuCloseBtn.addEventListener('click', handleMenu);
menuModal.addEventListener('click', handleMenu);
menuDropdown.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
})

featuresSelect.addEventListener('click', handleFeaturesSelect);

companySelect.addEventListener('click', handleCompanySelect);