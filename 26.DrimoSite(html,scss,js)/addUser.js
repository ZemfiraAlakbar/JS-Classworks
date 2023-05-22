let titleInput = document.querySelector("#title");
let describeInput = document.querySelector("#describe");
let priceInput = document.querySelector("#price");
let form = document.querySelector("form");
let fileInput = document.querySelector(".file-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    image: `./images/${fileInput.value.split("\\")[2]}`,
    title: titleInput.value,
    decb: describeInput.value,
    price: priceInput.value,
  };

  axios.post("http://localhost:8080/users", obj);
  window.location = "./index.html";
});