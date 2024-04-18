const row = document.querySelector('.detailRow')
const id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = 'https://6620bbd53bf790e070b0711d.mockapi.io/books'
const endpoint = "/movies";


axios
.get(BASE_URL + endpoint + `/${id}`)
.then((result) => {
    console.log(result);
    renderDetailData(result.data)

})
.catch((err) => {
    return err;
});

function renderDetailData(el) {
    row.innerHTML = `
    <div class="col-lg-6">
    <div class="card-img">
        <img src="${el.poster}" alt="">
        <span id="age">+${el.minAge}</span>
    </div>
    <a href="index.html" class="btn btn-info ">Go Back</a>
</div>
<div class="col-lg-6 col-md-6 col-sm-12 g-4">
    <div class="card">
        <div class="card-body">
            <h3 class="card-title"><b>Directory :</b>${el.director}</h3>
            <p class="card-text "><b>Title :</b>${el.title}</p>
            <p class="card-text "><b>Genre :</b>${el.genre}</p>
            <p class="card-text "><b>ReleseYear :</b>${el.releaseYear}</p>
            <p class="card-text "><b>Country :</b>${el.country}</p>
            <p class="card-text "><b>description :</b>${el.description}</p>
        </div>
    </div>
</div>
    
    `
}