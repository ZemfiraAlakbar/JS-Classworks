let titleInput = document.querySelector("#title");
let descInput = document.querySelector("#describe");
let priceInput = document.querySelector("#price");
let form = document.querySelector("form");
let fileInput = document.querySelector(".file-input");

let id = new URLSearchParams(window.location.search).get("id")

axios.get(` http://localhost:8080/cards/${id}`).then((res)=>{
data=res.data

titleInput.value=data.title,
descInput.value=data.describtion,
priceInput.value=data.price
})


form.addEventListener("submit",function (e) {
    e.preventDefault()

    let obj = {
        image: `./imgs/${fileInput.value.split("\\")[2]}`,
        title: titleInput.value,
        describtion: descInput.value,
        price: priceInput.value
    }


    if (obj.title && obj.describtion && obj.price) {
        if (id) {
            axios.patch(`http://localhost:8080/cards/${id}`,obj)
        } else {
            axios.post("http://localhost:8080/cards",obj)
        }
        window.location="./index.html"
       } else {
        alert("Pls, fill all the fields!")
       }
})

