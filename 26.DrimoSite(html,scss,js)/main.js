let card = document.querySelector(".cards");
let search = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");

axios.get("http://localhost:8080/users").then((response) => {
  myData = response.data;
  getAllData(myData);
});

function getAllData(arr) {
  card.innerHTML = "";
  arr.forEach((el) => {
    card.innerHTML += `
        <div class="card" style="width:14rem;">
          <img class="card-img-top" alt="Card image cap" src="${el.image}">
          <div class="card-body">
            <h5 style='color:brown' class="card-title">${el.title}</h5>
            <hr>
            <p class="card-text">${el.decb}</p>
            <p class="card-text">Price: ${el.price}</p>
            <a href="#" class="btn btn-danger" onclick=deleteUser("${el.id}",this)>Delete</a>
            <a href="#" class="btn btn-primary" onclick=addFav("${el.id}")>Add to Fav</a>
          </div>
          </div>
        `;
  });
}

function deleteUser(id, btn) {
  axios.delete(`http://localhost:8080/users/${id}`);
  btn.parentElement.parentElement.remove();
}

search.addEventListener("input", function (e) {
  axios.get("http://localhost:8080/users").then((res) => {
    let filtered = res.data.filter((el) =>
      el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    getAllData(filtered);
  });
});

let sort = false;
sortBtn.addEventListener("click", function () {
  sort = !sort;
  axios.get("http://localhost:8080/users").then((res) => {
    let sorted = res.data.sort((a, b) => {
      if (sort) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    getAllData(sorted);
  });
});

let favUsers = JSON.parse(localStorage.getItem("favUsers")) || [];
function addFav(id) {
  axios.get(`http://localhost:8080/users/${id}`).then((res) => {
    data = res.data;
    console.log(data);
    let isAvailable = favUsers.find((el) => el.id == data.id);
    if (!isAvailable) {
      favUsers.push(data);
      localStorage.setItem("favUsers", JSON.stringify(favUsers));
    } else {
      alert("The card has been existed in favorites!");
    }
  });
}