
const contenedor = document.getElementById("contenedor");
const btnfetch = document.getElementById("btnfetch");
const btnAxios = document.getElementById("btnAxios");

const animeList = "https://api.jikan.moe/v4/top/manga";

btnAxios.addEventListener("click",()=>{
    contenedor.innerHTML='';
    axios.get(animeList)
        .then(resp =>{
            [...resp.data.data].forEach(createCard);
        })
        .catch(err=> console.error(err));
});

btnfetch.addEventListener("click",()=>{
    contenedor.innerHTML='';
    fetch(animeList)
        .then(resp=>resp.json())
        .then(resp =>{
            [...resp.data].forEach(createCard);
        })
        .catch(err=> console.error(err));
});

function createCard(info){
    let tarjeta;
    try{
        tarjeta = `
        <div class="card bg-dark text-white d-flex flex-column justify-content-between" style="width: 18rem; height:50rem">
        <img src="${info.images.jpg.image_url}" class="card-img-top h-50" alt="${info.title}" >
        <div class="card-body">
            <h5 class="card-title">${info.title} (${info.title_japanese})</h5>
            <p class="card-text" style="display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;">${info.background}</p>
        </div>
        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${info.scored}⭐ - ${info.scored_by}</li>
                <li class="list-group-item">${info.authors[0].name}</li>
                <li class="list-group-item">${info.demographics[0].name}</li>
            </ul>
            <div class="card-body p-1 m-1 text-center">
                <a href="${info.url}" class="card-link ">Saber mas...</a>
            </div>
        </div>
        </div>
        `;
    }catch(e){
        tarjeta = `
        <div class="card bg-dark text-white d-flex flex-column justify-content-between" style="width: 18rem; height:50rem">
        <img src="${info.images.jpg.image_url}" class="card-img-top h-50" alt="${info.title}" >
        <div class="card-body">
            <h5 class="card-title">${info.title} (${info.title_japanese})</h5>
            <p class="card-text" style="display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;">${info.background}</p>
        </div>
        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${info.scored}⭐ - ${info.scored_by}</li>
                <li class="list-group-item">-</li>
                <li class="list-group-item">-</li>
            </ul>
            <div class="card-body p-1 m-1 text-center">
                <a href="${info.url}" class="card-link ">Saber mas...</a>
            </div>
        </div>
        </div>
        `;
    } 
    contenedor.insertAdjacentHTML("beforeend",tarjeta);
}//createCard()