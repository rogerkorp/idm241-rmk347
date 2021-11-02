menuMode();

const settings = document.getElementById('settings');


function menuMode(){ 
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none'){
        menu.style.display = 'flex';
        document.getElementById('menu').className = 'background-darken'
        document.getElementById('settings').className = 'forwardbox';
    } else {
        document.getElementById('settings').className = 'reversebox';
        document.getElementById('menu').className = 'background-lighten'
        reverse = setTimeout(goodbyeMenu, 400);
    }
  }

function goodbyeMenu(){
    menu.style.display = 'none';
}