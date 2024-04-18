// import { postSong } from "./requests/supliers_requests";
// import BASE_URL from "./base_url";
const BASE_URL = 'https://6620bbd53bf790e070b0711d.mockapi.io/books'
const endpoint = "/movies";
// Inputss
const title = document.getElementById('title')
const releaseYear = document.getElementById('releaseYear')
const trailerURL = document.getElementById('trailerURL')
const poster = document.getElementById('poster')
const genre = document.getElementById('genre')
const description = document.getElementById('description')
const minAge = document.getElementById('minAge')
const country = document.getElementById('country')
const director = document.getElementById('director')
const addBtn = document.getElementById('addBtn')

// Export fln eliyende erorr verirdi deye  functionlari burada yazdim 




addBtn.addEventListener('click', (e) => {
    e.preventDefault()
// Esas bradi    TAMAM
    postSong(BASE_URL,{
            "title": title.value,
            "releaseYear": releaseYear.value,
            "poster": poster.value,
            "trailerURL": trailerURL.value,
            "genre": genre.value,
            "description": description.value,
            "minAge": minAge.value,
            "country": country.value,
            "director": director.value,
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "ADDED Movie card",
            showConfirmButton: false,
            timer: 1500
            }).then(()=>{
            window.location.replace('index.html');
        });
})


function postSong(url, newSupliers) {

    axios.post(url + endpoint, newSupliers)

}





