let titleInput = document.querySelector("#title");
let descInput = document.querySelector("#desc");
let priceInput = document.querySelector("#price");
let fileInput = document.querySelector(".file");
let submitBtn = document.querySelector(".submit");
let form = document.querySelector("#form");
let add = document.querySelector(".add");

let id = new URLSearchParams(window.location.search).get("id");

axios(`http://localhost:8080/Cards/${id}`).then((res) => {
  data = res.data;

  (titleInput.value = data.title),
    (descInput.value = data.desc),
    (priceInput.value = data.price);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    title: titleInput.value,
    desc: descInput.value,
    price: +priceInput.value,
    image: `./images/${fileInput.value.split("\\")[2]}`,
  };

  if (obj.title && obj.desc && obj.price) {
    if (id) {
      axios.patch(`http://localhost:8080/Cards/${id}`, obj);
    } else {
      axios.post(`http://localhost:8080/Cards`, obj);
    }
    window.location = "./index.html";
  } else {
    alert("Pls,fill all the fields!");
  }
});

if (id) {
  submitBtn.value = "Edit";
  add.innerHTML = "Edit a Card";
} else {
  submitBtn.value = "Submit";
}
