const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8f8d7442"
const API_URL_SEARCH ="http://www.omdbapi.com/?i=tt3896198&apikey=8f8d7442"

var search_input = document.getElementById("search_input");
var card = document.getElementByClassName("movie-cards")[0];

document.getElementsByClassName("search")[0].addEventListener("click",fucntion(){
	console.log(search_input.value);
	condt query = search_input.value;
	if(query){
		getMovies(API_URL+query);
	}
});

async function getMovies(url){
	const resp = await fetch(url);
	const respData = await resp.json();
	cosole.log(respData);
	showMovies(respData.Search);
}

fucntion showMovies(movies){
	card.innerHTML="";
	movies.forEach(async fucntion(movie){
		const movieData = await fetch(API_URL_SEARCH+movie.imdbID);
		const movieDataobj = await movieData.json();
		movie_display(movieDataobj);
	});
}

function movie_display(imovie){
	const movieElm = document.createElement("div");
	movieElm.classList.add("movie-card");
	movieElm.innerHTML=
		<div class="card">
			<img src = "${imovie.poster}" alt = "poster" width = "300px" height="300px"/>
			<br>
			<div class = "movie-description">
				<span class= "movie-title"><b>Title</b><span class="value">${imovie.Title}</span></span>
				<span class= "movie-title"><b>Rating</b><span class="value">${imovie.imdbRating}</span></span>
				<span class= "movie-title"><b>Director</b><span class="value">${imovie.Director}</span></span>
				<span class= "movie-title"><b>Released</b><span class="value">${imovie.Released}</span></span>
				<span class= "movie-title"><b>Genre</b><span class="value">${imovie.Genre}</span></span>
			</div>
		</div>
	;
	card.appendChild(movieElm);
}
	
	