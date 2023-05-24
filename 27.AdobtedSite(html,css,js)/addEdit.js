let nameInput = document.querySelector("#title");
let yearsInput = document.querySelector("#describe");
let form = document.querySelector("form");
let fileInput = document.querySelector(".file-input");

let id = new URLSearchParams(window.location.search).get("id")

axios.get(`http://localhost:8080/children/${id}`).then((res)=>{
data=res.data

nameInput.value=data.name,
yearsInput.value=data.years
})


form.addEventListener('submit',function (e) {
e.preventDefault()

let obj = {
    image: `./imgs/${fileInput.value.split("\\")[2]}`,
    name: nameInput.value,
    years: yearsInput.value,
    }

   if (obj.name && obj.years) {
    if (id) {
        axios.patch(`http://localhost:8080/children/${id}`,obj)
    } else {
        axios.post("http://localhost:8080/children",obj)
    }
    window.location="./index.html"
   } else {
    alert("Pls, fill all the fields!")
   }
})