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

const selectElement = document.querySelector('.select');

selectElement.addEventListener('click', function (e) {
    
    let state;
    if(e.target.closest('.features-select')) {
        state = featuresContent.matches('.is-close-content');
        handleFeaturesSelect(state)
    } else if (e.target.closest('.company-select')) {
        state = companyContent.matches('.is-close-content');
        handleCompanySelect(state)
    }   

})

function handleMenu () {
    menuModal.classList.toggle('is-close');
    menuModal.classList.toggle('is-open');
}

function handleFeaturesSelect (isClose) {
    if (isClose === true) {
        featuresExpanded.classList.remove('hide');
        featuresCollapsed.classList.add('hide');
        featuresContent.classList.remove('is-close-content');
        featuresContent.classList.add('is-open-content');
    } else {
        featuresExpanded.classList.add('hide');
        featuresCollapsed.classList.remove('hide');
        featuresContent.classList.add('is-close-content');
        featuresContent.classList.remove('is-open-content');
    }
}

function handleCompanySelect (isClose) {
    if (isClose === true) {
        companyExpanded.classList.remove('hide');
        companyCollapsed.classList.add('hide');
        companyContent.classList.remove('is-close-content');
        companyContent.classList.add('is-open-content');
    } else {
        companyExpanded.classList.add('hide');
        companyCollapsed.classList.remove('hide');
        companyContent.classList.add('is-close-content');
        companyContent.classList.remove('is-open-content');
    }
}


menuBtn.addEventListener('click', handleMenu);
menuCloseBtn.addEventListener('click', handleMenu);
menuModal.addEventListener('click', handleMenu);
menuDropdown.addEventListener('click', function (e) {
    e.stopPropagation();
})

