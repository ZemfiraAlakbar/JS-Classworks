let cards = document.querySelector('.cards')

let favUsers=JSON.parse(localStorage.getItem("favUsers")) || []


function getfavoriteList() {
    cards.innerHTML=''
    favUsers.forEach((el)=>{
        cards.innerHTML+=`
        <div class="card" style="width:14rem;">
        <img class="card-img-top" src=${el.photo} alt="Card image cap">
        <div class="card-body">
          <h5 style='color:brown' class="card-title">${el.name} ${el.surname}</h5>
          <hr>
          <p class="card-text">${el.email}</p>
          <p class="card-text">${el.date}</p>
          <a href="#" onclick=removeLocalFromFav('${el.id}') class="btn btn-danger">Remove fav</a>
        </div>
        </div>
        `
    })
}
getfavoriteList()

function removeLocalFromFav(id) {
    favUsers=favUsers.filter((el)=>el.id!=id)
    localStorage.setItem('favUsers',JSON.stringify(favUsers))
    getfavoriteList()
}