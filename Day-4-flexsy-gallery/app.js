const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}
function toggleOpenActive(e) {
    // console.log(e.propertyName)
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
// Don't run the function but just give a refference to the function   
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));