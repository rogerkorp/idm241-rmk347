menuMode();

function menuMode(){ //This functions is responsible for hiding and unhiding the help box.
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
  }