const $targetEl = document.getElementById('navbar-default');

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl = document.getElementById('collapse-button');

$triggerEl.onclick = ()=> {
    $targetEl.classList.toggle("hidden")
}





