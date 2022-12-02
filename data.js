console.log("prueba de funcionamiento")

//const arrayPokemon = [];

for(let i = 0 ; i <300 ; i++){
    const POKE_API = `https://pokeapi.co/api/v2/pokemon/${i}`
    const getPoke = async () => {
        try{
            const getPokeRequest = await axios.get(POKE_API)
            const getData = await getPokeRequest.data
            //arrayPokemon.push(getData)
            addCards(getData)
        }catch (error){
            //console.log("error: ", error)
        }
    }
    getPoke()
}
//console.log("arrayPokemon",arrayPokemon)
console.log("funciona despues de async")


const cards = document.getElementById("cards")
    console.log("cards",cards)  

    const addCards = getData => {
        console.log("arrayPokemon",getData)
        const template = document.querySelector("#template-card").content;
        //console.log("template",template)
        const fragment = document.createDocumentFragment();
            template.querySelector(".card").classList.add("viewCard");
            template.querySelector('img').setAttribute('src', getData.sprites.other.dream_world.front_default)
            template.querySelector('.card-id').textContent = getData.id;
            template.querySelector('.card-title').textContent = getData.name;
            template.querySelector('.card-text').textContent = `Exp: ${getData.base_experience}`;

                const clone = template.cloneNode(true);
                fragment.appendChild(clone);
        
        cards.appendChild(fragment);
    }
    addCards()


console.log("prueba de funcionamiento final")

windows.addEventListener('scroll', viewCard );

function viewCard(){
    var viewCard = document.querySelectorAll('.viewCard')

    for(let i = 0; i < viewCard.length; i++){

        var windowswheight = windows.innerHeight;
        var viewCardTop = viewCard[i].getBoundingClientRect().top;
        var viewCardPoint = 30;

        if(viewCardTop < windowswheight - viewCardPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}