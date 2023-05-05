let addUserBtn = document.querySelector(".btn-primary");
let boxes = document.querySelector(".boxes");

addUserBtn.addEventListener("click", function () {
  window.location = "index.html";
});

let users = JSON.parse(localStorage.getItem("users")) || [];

function allUser() {
  boxes.innerHTML = "";
  users.forEach((el) => {
    const box = document.createElement("div");
    boxes.append(box);
    box.innerHTML = `
        <h5>Name: ${el.Username}</h5>
        <h5>Email: ${el.Email}</h5>
        <button onclick=deleteUser(${el.Id}) class='btn btn-danger'>Delete</button>
        `;
  });
}

allUser();

function deleteUser(userId) {
  users = users.filter((el) => el.Id != userId);
  localStorage.setItem("users", JSON.stringify(users));
  allUser();
}