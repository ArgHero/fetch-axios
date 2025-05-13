//const axios = require('axios');

const POKE_API = "https://pokeapi.co/api/v2/pokemon";
const RICK_URL = "https://rickandmortyapi.com/api/character";

const mainContainer  = document.getElementById("main-container");
const nextBoton = document.getElementById("nextBoton");

function insertCard(card){
    mainContainer.insertAdjacentHTML("beforeend",`
        <div class="card m-2 d-flex flex-row" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top w-50" alt="${card.id}">
            <div class="card-body bg-black text-white">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.species}</p>
                <a href="#" class="btn btn-primary">${card.origin.name}</a>
            </div>
        </div>
        `);

}//insertCard()

function handleClick(event){
    event.preventDefault();
    console.log("JEJE");
    

};//handleClick()


document.addEventListener("DOMContentLoaded",()=>{
    
    fetch(RICK_URL)
        .then(resp=>resp.json())
        .then(data=>{
            data.results.forEach(insertCard);
        })
        .catch(error=>{
            console.error(error);

        });

    axios.get(POKE_API)
    .then(res =>{
        const pokemons = res.data.results;
        pokemons.forEach(pokemon=>{
            axios.get(pokemon.url)
                .then(res=>{
                    console.log(res);
                })//then pokemon url
        })//foreach pokemons
    })//then POKEAPI


        

});//EventListener DOM

nextBoton.addEventListener("click",handleClick);