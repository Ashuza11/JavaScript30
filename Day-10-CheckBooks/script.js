const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;   
function handleCheck(e) {
    // Check if they had the shift key down 
    // Amd check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // go ahead 
        // loop over every single checkbox 
        checkboxes.forEach(checkbox => {
            console.log(checkbox);

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Staritng to check them inbetween!')
            } 
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
