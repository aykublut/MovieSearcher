const movieTitleInput = document.querySelector("#searchInput");
const searchIcon = document.querySelector(".bx-search");
const img = document.querySelector("img");

const movie = document.querySelector("#movie");
const released = document.querySelector("#released");
const runtime = document.querySelector("#runtime");
const genre = document.querySelector("#genre");
const director = document.querySelector("#director");
const writer = document.querySelector("#writer");
const actor = document.querySelector("#actor");

const movieWrapper = document.querySelector(".movie-wrapper");


searchIcon.addEventListener("click", exe)

function exe() {
    const movieName = movieTitleInput.value.trim();
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=be73355b&`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.Poster);
            if (data.Error != "Movie not found!") {
                movieWrapper.classList.remove("duzenleme");
                img.classList.add("poster");
                img.setAttribute("src", data.Poster);
                movie.textContent = `Film: ${data.Title}`;
                released.textContent = `Yayım: ${data.Released}`;
                runtime.textContent = `Süre: ${data.Runtime}`;
                genre.textContent = `Tür: ${data.Genre}`;
                director.textContent = `Yönetmen: ${data.Director}`;
                writer.textContent = `Yazar: ${data.Writer}`;
                actor.textContent = `Oyuncu: ${data.Actors}`;
                movieTitleInput.value = "";
            }
            else {
                console.log("hata")
                alert("Lütfen doğru film ismi giriniz!");
                movieTitleInput.value = "";
            }


        })
        .catch((err) => {
            console.log(err)

        })


}
