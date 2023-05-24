let cards=document.querySelector(".cards")

axios("http://localhost:8080/favs").then(res=>{
    console.log(res.data);
    addFav(res.data)
})

function addFav(arr) {
    cards.innerHTML=''
    arr.forEach(el => {
      cards.innerHTML+=`
      <div class="card" style="width:20rem;">
      <img class="card-img-top text-center pic" alt="Card image cap" src="${el.image}" style="width:150px;height:150px;">
      <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
        <hr>
        <p class="card-text">${el.describtion}</p>
        <h5 class="card-text">${el.price}</h5>
        <div class="div">
            <a class="mb-2 btn btn-outline-danger">MORE DETAILS</a>
        </div>
        <a href="#" class="btn btn-danger" onclick=deleteFromFav("${el.id}",this)>Delete</a>
      </div>
      </div>
      `  
    });
}


async function deleteFromFav(id,btn) {
    await axios.delete(`http://localhost:8080/favs/${id}`)
    btn.parentElement.parentElement.remove()
}