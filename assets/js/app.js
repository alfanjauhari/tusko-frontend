// Get element
function _e(el) {
    return document.querySelector(el);
}

// // Menu Toggler
_e('.menu-toggler').addEventListener('click', () => {
    _e('.menu-item').classList.toggle('hidden');
});

function openTab(evt, tabName) {
    let tabs = document.getElementsByClassName('tab');
    for(let tab = 0; tab < tabs.length; tab++) {
        tabs[tab].classList.add('hidden');
    }

    let name = document.getElementById(tabName);
    name.classList.toggle('hidden');
}