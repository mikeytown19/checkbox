const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChekced;
function handleCheck(e){
    console.log(e);
    //check if they have the shift key down
    //and check if they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //go ahead and do what we please
        //loop over every single checked box-shadow
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChekced){
            inBetween = !inBetween;
        }

        if(inBetween){
            checkbox.checked = true;
            }
        })
    }
    lastChekced = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
