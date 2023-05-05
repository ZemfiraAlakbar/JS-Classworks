// import {url} from './app.js'
let url = "https://northwind.vercel.app/api/suppliers";
let tbody = document.querySelector("tbody");

function table() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((el) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${el.id}</td>
        <td>${el.companyName}</td>
        <td>${el.address?.city}</td>
        <td>${el.address?.country}</td>
        <td>${el.address?.phone}</td>
        <td><button>Delete</button></td>
        `;
        tbody.append(tr);
      });
    });
}
table();

// function deleteUser(id) {
    
// }