import BASE_URL from "../base_url.js";
const endpoint = "/movies";
const tBody = document.getElementById("getData")
const loader = document.querySelector(".loading");
//get All Songs - void
export async function getAllSuppliers(url) {
  let suplier = null;
  let error = null;
  await axios
    .get(url + endpoint)
    .then((result) => {
        renderData(result.data)
        suplier = result.data;
    })
    .catch((err) => {
      error = err;
    }) .finally(() => {
      loader.classList.add("d-none");
    });
  return {
    suplier: suplier,
    error: error,
  };
}


export async function postSong(url, newSupliers) {
  
  await axios.post(url + endpoint, newSupliers).then((res) => {
    
    getAllSuppliers(BASE_URL)
  });
  
}


export async function putMovieByID(url, id, updatedSong) {
  await axios.put(url + endpoint + `/${id}`, updatedSong)
}

function deleteMovieByID(url, id) {

  axios.delete(url + endpoint + `/${id}`).then((res) => {
  getAllSuppliers(BASE_URL)
  
  });  
}
function renderData(supliers) {
    tBody.innerHTML = ''
    supliers.map((e)=>{
        tBody.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12 g-4">
                <div class="card">
                  <div class="card-img">
                    <img src="${e.poster}" alt="">
                  </div>
                  <div class="card-body">
                    <span id="age">+${e.minAge}</span>
                    <h3 class="card-title">${e.director}</h3>
                    <p class="card-text ">${e.title}</p>
                    <p class="card-text ">${e.genre}</p>
                    <p class="card-text ">${e.country}</p>
                  </div>
                  <div class="card-btn d-flex justify-content-center gap-1 ">
                    <button class="btn btn-dark delBtn" data-id="${e.id}">Delete</button>
                    <a class="btn btn-success" data-id="${e.id}" href="detail.html?id=${e.id}">Detail</a>
                    <a class="btn btn-danger" data-id="${e.id}" href="uptdate.html?id=${e.id}">Uptdate</a>
                  </div>
                </div>
              </div>
        `
    })
    deleteSupliers()
    // uptdateSupliers()
} 

// const uptdateModal = document.getElementById('uptdateModal')
// function uptdateSupliers() {
//     const upBtns = document.querySelectorAll('.upBtn')
//         upBtns.forEach((upBtn)=>{
//             upBtn.addEventListener('click',function () {
//                 const btnId = this.getAttribute("data-id")
//                 console.log(btnId);
//                 uptdateModal.classList.replace("d-none","d-block")
//                 const uptdateBtn = document.getElementById('addBtn')
//                 const uptdatecompanyName = document.getElementById('companyName')
//                 const uptdatecontactName = document.getElementById('contactName')
//                 const uptdatecontactTitle = document.getElementById('contactTitle')
//           console.log(uptdatecompanyName.value);
//                 uptdateBtn.addEventListener('click',(e)=>{
//                     e.preventDefault()
//             putSongByID(BASE_URL,btnId,{
//                 companyName:uptdatecompanyName.value ,
//                 contactName: uptdatecontactName.value,
//                       contactTitle: uptdatecontactTitle.value,
//                   })
//                   getAllSuppliers(BASE_URL)
//           })
//             })
//         })
// }

function deleteSupliers() {
    const delBtns = document.querySelectorAll('.delBtn')
    delBtns.forEach((delBtn)=>{
        delBtn.addEventListener('click',function () {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              deleteMovieByID(BASE_URL,this.getAttribute('data-id'))
            }
          });
        })
    })
}