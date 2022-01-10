

document.addEventListener('DOMContentLoaded',() =>{
    
    const form = document.querySelector('#form')
    form.addEventListener('submit',handleFormSubmit)
    
    
    const button = document.querySelector('#delete-all')
    button.addEventListener('click',handleDeleteAll);
})


const handleFormSubmit = function(event){
    
    event.preventDefault()
    const liGame = document.createElement("li");
    const textNode = document.createTextNode((`Name: ${this.game_name.value} Release Date: ${this.release_date.value} Publisher: ${this.publisher.value} Developer: ${this.developer.value} PEGI rating: ${this.age_rating.value} Multiplayer:${this.multiplayer.value}`));
    liGame.appendChild(textNode);
    document.querySelector('#list-games').appendChild(liGame);
   
}

const handleDeleteAll = function(){
   
    document.querySelector('#list-games').innerHTML = ""
}













// <label for=game_name >Name</label>
// <input type="text" id = game_name>
// <label for="release_date">release date</label>
// <input type="datetime" id = "release_date">
// <label for=publisher >Publisher</label>
// <input type="text" id ="publisher">
// <label for=coop>coop</label>
// <input type="checkbox" id = coop>
// <label for="multiplayer" >Multiplayer</label>
// <input type="checkbox"  id = "multiplayer">
// <label for="developer" >devleoper</label>
// <input type="text" id = "developer">
// <label for="age_rating">PEGI age rating</label>
// <select name="PEGI age rating" id="age_rating">