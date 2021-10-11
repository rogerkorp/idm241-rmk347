// Microinteractions - Alpha Build
// Written by Roger Korpics
// 11 October 2021

let buttonInteraction = document.getElementById('generate-biome'); // Variable finds the button based on it's ID
let reset; // Variable that counts the time since click.

// This function changes the class name of the button to give it the animation rules, and it also starts a counter that triggers the resetAnimation rule.
buttonInteraction.addEventListener('click', function(){
    document.getElementById('generate-biome').className ='buttonAnimation';
    reset = setTimeout(resetAnimation, 400); // The number has to be adjusted manually based on the animation timing. In this case, the interaction lasts 0.4s, so it's set to reset the animation after 400ms.
})

// This function resets the animation by changing the class to a non-existant one after 400ms. 
// The result is that everytime you press the button, the class changes to one with the animation, then once the animation is done it switches to a different class so that when you press the button again the animation rules get reapplied.
function resetAnimation(){
    document.getElementById('generate-biome').className = 'noAnimation'
}