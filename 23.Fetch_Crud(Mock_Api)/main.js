// fetch("http://localhost:8080/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

let addBtn = document.querySelector(".btn-primary");
let boxes = document.querySelector(".boxes");

async function getAllData() {
  let response = await fetch("http://localhost:8080/users");
  let data = await response.json();
  // console.log(data);
  data.forEach((el) => {
    let box = document.createElement("div");
    box.innerHTML = `
        <div class="mx-3 mt-3">
        <h5>${el.name}</h5>
        <p>${el.email}</p>
        </div>

        <div class="mx-3">
        <a href="editUser.html?id=${el.id}"><i class="fa-solid fa-pen text-success" onclick=editedUser("${el.id}")></i></a>
        <i class="fa-solid fa-trash-can text-danger" onclick=deleteUser("${el.id}",this) style="cursor: pointer;"></i>
        </div>
        `;

    boxes.append(box);

    box.classList.add(
      "col-5",
      "mt-3",
      "justify-content-between",
      "d-flex",
      "align-items-center",
      "bg-color"
    );
  });
}
getAllData();

async function deleteUser(id,btn) {
  await fetch(`http://localhost:8080/users/${id}`, {
    method: "DELETE",
  });
  box.innerHTML = "";
  getAllData();
  btn.parentElement.parentElement.remove()
}

addBtn.addEventListener('click',function () {
    window.location.href="addUser.html"
})