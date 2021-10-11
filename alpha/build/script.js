let buttonInteraction = document.getElementById('generate-biome');
let reset;
buttonInteraction.addEventListener('click', function(){
    document.getElementById('generate-biome').className ='buttonAnimation';
    reset = setTimeout(resetAnimation, 400);
})

function resetAnimation(){
    document.getElementById('generate-biome').className = 'noAnimation'
}