// Get element
function _e(el) {
    return document.querySelector(el);
}

// Menu Toggler
_e('.menu-toggler').addEventListener('click', () => {
    _e('.menu-item').classList.toggle('hidden');
});

// Tab Toggler
function openDesc(event) {
    let desc = document.getElementById('description');
    desc.classList.toggle('hidden');
}