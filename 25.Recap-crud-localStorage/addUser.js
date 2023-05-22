let firstnameInput = document.querySelector("#nameinput");
let surnameInput = document.querySelector("#surnameinput");
let emailInput = document.querySelector("#emailinput");
let form = document.querySelector('form')
let submitBtn = document.querySelector('.submit')
let fileInput = document.querySelector('.form-control-file')

let id = new URLSearchParams(window.location.search).get("id");


async function getData() {
 let res = await axios.get(`http://localhost:8080/users/${id}`)
  let data = await res.data;
    console.log(data);
    firstnameInput.value = data.name;
    surnameInput.value = data.surname;
    emailInput.value = data.email;
    submitBtn.value = "Edit";
}
getData()

form.addEventListener('submit',function (e) {
    e.preventDefault()
    const date = new Date()

    let obj = {
        photo: `./images/${fileInput.value.split("\\")[2]}`,
        name: firstnameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        date: date,
    }
    // console.log(fileInput.value);
     
        
   if (obj.name && obj.surname && obj.email) {
    if(id){
        axios.patch(`http://localhost:8080/users/${id}`,obj)
        window.location='index.html'
        // submitBtn.value = "Edit"
    }
    else {
        axios.post('http://localhost:8080/users',obj)
        window.location='index.html'
    }
   }
   else {
    alert("Pls, fill all the fields!")
   }
    }
)