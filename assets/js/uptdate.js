// import { putMovieByID } from "./requests/supliers_requests";
// import BASE_URL from "./base_url";
const BASE_URL = 'https://6620bbd53bf790e070b0711d.mockapi.io/books'
// console.log(BASE_URL);
const endpoint = "/movies";
const id = new URLSearchParams(window.location.search).get("id");
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
function getAllSuppliers(url) {

    axios
        .get(url + endpoint + `/${id}`)
        .then((result) => {
        
            console.log(result);
            title.value = result.data.title
            releaseYear.value = result.data.releaseYear
            trailerURL.value = result.data.trailerURL
            poster.value = result.data.poster
            genre.value = result.data.genre
            description.value = result.data.description
            minAge.value = result.data.minAge
            country.value = result.data.country
            director.value = result.data.director
        })
        .catch((err) => {
            return err;
        });

}
getAllSuppliers(BASE_URL)




let UptdateData = {}
addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    UptdateData =
        putMovieByID(BASE_URL, id, {
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
        putMovieByID(BASE_URL,id,UptdateData)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your change Movie card",
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            window.location.replace('index.html');
        });
})

function putMovieByID(url, id, updatedSong) {
    axios.put(url + endpoint + `/${id}`, updatedSong)
}





