class Movie {
    constructor(title,director,actor){
        this.title = title;
        this.director = director;
        this.actor = actor;
    }
}

class Interface {
    static addMovie(movie){
         const list =document.getElementById("movie-list");
         const row = document.createElement("tr");
         row.innerHTML = `
         <td>${movie.title}</td>
         <td>${movie.director}</td>
         <td>${movie.actor}</td>
         <td><button class="btn btn-danger delete">Remove</button></td>
         `;
         list.appendChild(row);
    }
    static clearFields(){
        document.getElementById("title").value = ' ';
        document.getElementById("director").value = ' ';
        document.getElementById("actor").value = ' ';
    }
    static deleteMovie(element){
         if(element.classList.contains("delete")){
             element.parentElement.parentElement.remove();
         }
    }
    
}

document.getElementById("addmovie").addEventListener("click",function(event){
    event.preventDefault();
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const actor = document.getElementById("actor").value;

    if(title === '' || director === '' || actor === ''){
        alert("Molim vas popunite sva polja");
    }else{

    const movie = new Movie(title,director,actor);
    Interface.addMovie(movie);
    Interface.clearFields();
    }
});

document.querySelector("#movie-list").addEventListener("click",(e)=>{
    Interface.deleteMovie(e.target);
})