let tBody = document.querySelector("tbody");
let cardInput = document.querySelector("#cardinput");
let searchInput = document.querySelector("#searchInput");
let nameInput = document.querySelector("#firstnameinput");
let lastNameInput = document.querySelector("#lastnameinput");
let emailInput = document.querySelector("#emailinput");
let submitBtn = document.querySelector("#submitBtn");
let form = document.querySelector("form");
let notification = document.querySelector("#notification");
let thFirstName = document.querySelector('#firstNameLabel')
let arrowUp = document.querySelector('.arrowUp')
let arrowDown = document.querySelector('.arrowDown')

MOCK_API = "http://localhost:8080/users";

axios(MOCK_API).then((res) => {
  myData = res.data;
  console.log(myData);
  getAllData(myData);
});

function getAllData(arr) {
  tBody.innerHTML = "";
  arr.forEach((el) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${el.name}</td>
        <td>${el.lastName}</td>
        <td>${el.email}</td>
        <td>${el.card
          .split("")
          .fill("*", 0, cardInput.value.length - 4)
          .join("")}</td>
          <td>
          <a class="btn btn-danger bg-danger" onclick=deleteUser("${
            el.id
          }",this)>Delete</a>
          <a class="btn btn-success bg-success"onclick=editCustomer("${
            el.id
          }") id="${el.id}">Edit</a>
          <a class="btn btn-warning bg-warning text-white" onclick=detailUser('${
            el.id
          }','${el.name}','${el.date}')>Details</a>
          </td>
        `;
    tBody.append(tr);
  });
}

function deleteUser(id, btn) {
  axios.delete(`http://localhost:8080/users/${id}`).then((res) => {
    showAlert(
      `User: ${res.data.name} ${res.data.lastName} has been deleted`,
      `danger`
    );
  });
  btn.closest("tr").remove();
  getAllData(myData);
}

searchInput.addEventListener("input", function (e) {
  axios.get("http://localhost:8080/users").then((res) => {
    let filtered = res.data.filter((el) => {
      return `${el.name} ${el.lastName}`
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    // console.log(filtered);
    getAllData(filtered);
  });
});

let stat = false;
let editedCustomerId = null;
//baslangicda null olsun deye verdik ve bizim verdiyimiz id ni basqa deyisende saxlamaq ucundur cunki patchda men nece gosterimki bu idli elmeneti edit et ona goredir.

function editCustomer(customerId) {
  stat = true;
  editedCustomerId = customerId;
  console.log(editedCustomerId);
  nameInput.value = document
    .querySelector(`#${customerId}`)
    .closest("tr").children[0].innerText;
  lastNameInput.value = document
    .querySelector(`#${customerId}`)
    .closest("tr").children[1].innerText;
  emailInput.value = document
    .querySelector(`#${customerId}`)
    .closest("tr").children[2].innerText;
  cardInput.value = document
    .querySelector(`#${customerId}`)
    .closest("tr").children[3].innerText;
  submitBtn.value = "Edit";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const date = new Date();

  let obj = {
    name: nameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    card: cardInput.value,
    date: date.toLocaleDateString(),
  };
  if (
    nameInput.value &&
    lastNameInput.value &&
    emailInput.value &&
    cardInput.value
  ) {
    if (stat) {
      axios
        .patch(`http://localhost:8080/users/${editedCustomerId}`, obj)
        .then((res) => {
          showAlert(
            `User: ${res.data.name} ${res.data.lastName} edited successfully`,
            `success`
          );
        });
    } else {
      axios.post("http://localhost:8080/users", obj).then((res) => {
        showAlert(
          `User: ${res.data.name} ${res.data.lastName} added successfully`,
          `primary`
        );
      });
    }
  } else {
    // alert("All fields must be filled!");
    showAlert('Please fill in all fields', 'warning')
  }
});

function showAlert(message, className) {
  notification.innerHTML = message;
  notification.className = `alert alert-${className}`;
  notification.removeAttribute("hidden");
  setTimeout(() => {
    notification.setAttribute("hidden", "");
  }, 2000);
}

async function detailUser(userId, username, userDate) {
  await axios.get(`${MOCK_API}/${userId}`);
  showAlert(`User: ${username} has been created on - ${userDate}!`, "primary");
}

let bool = false

thFirstName.addEventListener('click' , function () {
  bool=!bool
  if (bool) {
    axios('http://localhost:8080/users').then((res)=>{
      sortedArr=res.data.sort((a,b)=>a.name.localeCompare(b.name))
      arrowUp.style.display='inline-block' 
      arrowDown.style.display='none' 
      getAllData(sortedArr)
    })
  }
  else {
    axios('http://localhost:8080/users').then((res)=>{
      sortedArr=res.data.sort((a,b)=>b.name.localeCompare(a.name))
      arrowDown.style.display='inline-block' 
      arrowUp.style.display='none'
      getAllData(sortedArr)
    })
  }
})