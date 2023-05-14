let id = new URLSearchParams(window.location.search).get("id");

let inputName = document.querySelector("#inputName");
let inputEmail = document.querySelector("#inputEmail");
let form = document.querySelector("form");
let submitBtn = document.querySelector(".submit");

fetch(`http://localhost:8080/users/${id}`)
  .then((res) => res.json())
  .then((data) => {
    (inputName.value = data.name), (inputEmail.value = data.email);
    console.log(data);
  });

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  await fetch(`http://localhost:8080/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: inputName.value,
      email: inputEmail.value,
    }),
  });
  window.location = "index.html";
});