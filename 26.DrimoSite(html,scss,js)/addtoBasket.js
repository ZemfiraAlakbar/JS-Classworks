let cards = document.querySelector(".cards");

let favUsers = JSON.parse(localStorage.getItem("favUsers")) || [];

function getDataFromFav() {
  cards.innerHTML = "";
  favUsers.forEach((el) => {
    cards.innerHTML += `
        <div class="card" style="width:14rem;">
          <img class="card-img-top" alt="Card image cap" src="${el.image}">
          <div class="card-body">
            <h5 style='color:brown' class="card-title">${el.title}</h5>
            <hr>
            <p class="card-text">${el.decb}</p>
            <p class="card-text">Price: ${el.price}</p>
            <a href="#" class="btn btn-danger" onclick=deleteUserFromFav("${el.id}")>Remove from Fav</a>
          </div>
          </div>
        `;
  });
}
getDataFromFav();

function deleteUserFromFav(id) {
  favUsers = favUsers.filter((el) => el.id != id);
  localStorage.setItem("favUsers", JSON.stringify(favUsers));
  getDataFromFav();
}