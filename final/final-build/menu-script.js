menuMode(); //This bit is needed in order to initiate the onclick event after one click instead of two.

const settings = document.getElementById('settings'); //makes the program aware of the settings div.


function menuMode(){ 
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

function goodbyeMenu(){
    menu.style.display = 'none'; //after 400ms, the timeout is triggered and properly hides the div. This is done just to have the animation play out.
}