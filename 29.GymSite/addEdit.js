let form = document.querySelector("form")
let titleInput = document.querySelector("#title")
let descInput = document.querySelector("#desc")
let fileInput = document.querySelector("#img")
let submitBtn = document.querySelector(".submit")


let id = new URLSearchParams(window.location.search).get("id")

axios.get(`http://localhost:8060/gym/${id}`).then((res)=>{
    data=res.data
    console.log(data);


    titleInput.value=data.title,
    descInput.value=data.description
})


form.addEventListener("submit" , function (e) {
    e.preventDefault()

    let obj={
        title: titleInput.value,
        description: descInput.value,
        img: `./assets/image/${fileInput.value.split("\\")[2]}`,
    }


    if (id) {
        axios.patch(`http://localhost:8060/gym/${id}`,obj)
       }
    else{
        axios.post(`http://localhost:8060/gym`,obj)
       }
       window.location="./index.html"
})