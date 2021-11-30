// Microinteractions - Final Build
// Written by Roger Korpics
// 29 November 2021

const submitSound = document.getElementById('submitM4A');
const confirmSound = document.getElementById('confirmM4A');

function noSound(){
    
submitSound.pause();
submitSound.currentTime=0;

confirmSound.pause();
confirmSound.currentTime=0;
}


let buttonInteraction = document.getElementById('generate-biome'); // Variable finds the button based on it's ID
let reset; // Variable that counts the time since click.
let generate;

// This function changes the class name of the button to give it the animation rules, and it also starts a counter that triggers the resetAnimation rule.
buttonInteraction.addEventListener('click', function(){
    if (generate == undefined){ //Establishes that - by default - the value of variable "generate" must be equal to "All sets of words..."
        generate = 'All sets of words will be generated.'; 
    }
    document.getElementById('generate-biome').className ='buttonAnimation';
    reset = setTimeout(resetAnimation, 400); 
    console.log(generate);
})

function playSubmit(){
    submitSound.play();
}

// This function resets the animation by changing the class to a non-existant one after 400ms. 
// The result is that everytime you press the button, the class changes to one with the animation, then once the animation is done it switches to a different class so that when you press the button again the animation rules get reapplied.
function resetAnimation(){
    document.getElementById('generate-biome').className = 'noAnimation'
}

menuClose(); //This bit is needed in order to initiate the onclick event after one click instead of two.

const settings = document.getElementById('settings'); //makes the program aware of the settings div.


function menuClose(){ 
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none'){ //If the menu is hidden, then the menu will be revealed, and the menu div + settings div will have new classes. These classes add in animation rules that play out once the user clicks on the link.
        menu.style.display = 'flex';
        document.getElementById('menu').className = 'background-darken'
        document.getElementById('settings').className = 'forwardbox';
    } else { //if the menu is not currently hidden, then new animation rules that are essentially the same rules but reversed will play out
        document.getElementById('settings').className = 'reversebox';
        document.getElementById('menu').className = 'background-lighten'
        reverse = setTimeout(goodbyeMenu, 400); //and then we have this function here. Basically, it delays the menu completely hiding away by putting it behind this timeout rule.
    }
  }

  function menuSubmit(){ 
    confirmSound.play();
    const menu = document.getElementById('menu');
    const adjChecked = document.getElementById('no-adjectives');
    const geoChecked = document.getElementById('no-geology');
    
    let adjectives = (adjChecked.checked);
    let geology = (geoChecked.checked);

    if (adjectives == true && geology == true) {
        generate = 'No words will be generated.';
    }

    if (adjectives == true && geology == false) {
        generate = 'Only geological features will be generated.';
    }

    if (adjectives == false && geology == true) {
        generate = 'Only adjectives will be generated.';
    }
  
    if (adjectives == false && geology == false) {
        generate = 'All sets of words will be generated.';
    }

    if (menu.style.display === 'none'){ //If the menu is hidden, then the menu will be revealed, and the menu div + settings div will have new classes. These classes add in animation rules that play out once the user clicks on the link.
        menu.style.display = 'flex';
        document.getElementById('menu').className = 'background-darken'
        document.getElementById('settings').className = 'forwardbox';
    } else { //if the menu is not currently hidden, then new animation rules that are essentially the same rules but reversed will play out
        document.getElementById('settings').className = 'reversebox';
        document.getElementById('menu').className = 'background-lighten'
        reverse = setTimeout(goodbyeMenu, 400); //and then we have this function here. Basically, it delays the menu completely hiding away by putting it behind this timeout rule.
    }
  }


function goodbyeMenu(){
    menu.style.display = 'none'; //after 400ms, the timeout is triggered and properly hides the div. This is done just to have the animation play out.
}