const DOMStrings = {
  input: document.getElementById("pkmn-form"),
  name: document.getElementById("pokemon-name"),
  displayName: document.querySelector(".pkmn-name-size"),
  displayImageFront: document.querySelector(".display-image-front-def"),
  displayImageBack: document.querySelector(".display-image-back-def"),
  displayImageShinyFront: document.querySelector(".display-image--shiny-front"),
  displayImageShinyBack: document.querySelector(".display-image--shiny-back"),
  type: document.querySelector(".type"),
  displayNum: document.querySelector(".pkmn-num")
};

DOMStrings.input.addEventListener("keypress", function(event){
    if (event.keyCode ===13){
        event.preventDefault();
        document.querySelector(".nes-btn").click();
    }
});



function getPkmn() {
  DOMStrings.input.addEventListener("submit", async function(e) {
    e.preventDefault();
    //console.log('stuff');
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${DOMStrings.name.value}`
      );
      const data = await result.json();
      //`console.log(data);

      const displayPkmn = function(data) {
      DOMStrings.displayName.innerText= data.name;
      DOMStrings.displayNum.innerText= data.id;
      DOMStrings.displayImageFront.src= data.sprites.front_default;
      DOMStrings.displayImageBack.src= data.sprites.back_default;
      DOMStrings.displayImageShinyBack.src= data.sprites.back_shiny;
      DOMStrings.displayImageShinyFront.src= data.sprites.front_shiny;
      DOMStrings.type.textContent= data.types.map(data => data.type.name);
      //console.log(data.types);
      
      }; 
      displayPkmn(data);
      DOMStrings.name.value = "";


    } catch (err) {
      console.log(err);
    }
  });
}
getPkmn();
