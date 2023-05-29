let cards = document.querySelector(".cards");

axios.get("http://localhost:8080/Favs").then((res)=>{
    data=res.data
    addFav(data)
})

function addFav(arr) {
  cards.innerHTML = ``;
  arr.forEach((el) => {
    cards.innerHTML += `
        <span class="col-lg-4 col-md-6 mt-3">
               <div class="card p-3">
                <img src="${el.image}" alt="" width="80px" height="80px" style="display: inline-block; margin-left: 130px;">
                <br>
                <h3 class="text-center">${el.title}</h3>
                <br>
                <p class="text-center text-secondary">${el.desc}</p>
               <p>Price: <span class="text-danger">$${el.price}</span></p>
               <div class="buttons">
                <a href="details.html?id=${el.id}" class="btn btn-warning text-white mt-1">Details</a>
                <a href="#" class="btn btn-danger text-white mt-1" onclick=deleteFav("${el.id}",this)>Delete from Fav</a>
               </div>
            </div>
            </span>
        `;
  });
}

async function deleteFav(id,btn) {
    await axios.delete(`http://localhost:8080/Favs/${id}`)
    btn.closest("span").remove()
}