const DOMStrings ={
    input: document.getElementById('pkmn-form'),
    name: document.getElementById('pokemon-name'),
    displayName:document.querySelector('.pkmn-name-size'),
    displayImageFront:document.querySelector('.display-image-front-def'),
    displayImageBack:document.querySelector('.display-image-back-def'),
    displayImageShinyFront:document.querySelector('.display-image--shiny-front'),
    displayImageShinyBack:document.querySelector('.display-image--shiny-back'),
    displayNum: document.querySelector(".pkmn-num")
}

function getPkmn (){
    DOMStrings.input.addEventListener('submit', async function(e){
        e.preventDefault();
        //console.log('stuff');
        try {
            const result = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${DOMStrings.name.value}`
            );
            const data = await result.json();
            //console.log(data);

            const displayPkmn = function(data){};


        } catch (err) {
            console.log(err);
        }
    });
} 
getPkmn();

