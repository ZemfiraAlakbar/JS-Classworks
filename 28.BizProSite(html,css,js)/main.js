let cards = document.querySelector(".cards")
let search=document.querySelector('.search')
let sortBtn=document.querySelector(".sortbtn")

axios.get("http://localhost:8080/cards").then((res)=>{
    data=res.data
    console.log(data);
    getAllData(data)
})

function getAllData(arr) {
    cards.innerHTML=''
    arr.forEach(el => {
        cards.innerHTML+=`
        <div class="card" style="width:20rem;">
          <img class="card-img-top text-center pic" alt="Card image cap" src="${el.image}" style="width:150px;height:150px;">
          <div class="card-body">
            <h5 class="card-title">${el.title}</h5>
            <hr>
            <p class="card-text">${el.describtion}</p>
            <h5 class="card-text">${el.price}</h5>
            <div class="div">
                <a href="./detail.html?id=${el.id}" class="mb-2 btn btn-outline-danger">MORE DETAILS</a>
            </div>
            <a href="#" class="btn btn-danger" onclick=deleteCard("${el.id}",this)>Delete</a>
            <a href="./addEdit.html?id=${el.id}" class="btn btn-success">Edit</a>
            <a href="#" class="btn btn-primary mt-2" onclick=AddFav(${el.id})>Add Fav</a>
          </div>
          </div>
        `
    });
}

async function deleteCard(id,btn) {
    await axios.delete(`http://localhost:8080/cards/${id}`)
    btn.parentElement.parentElement.remove()
}

search.addEventListener("input",function (e) {
    axios.get(" http://localhost:8080/cards").then((res)=>{
        let filtered=res.data.filter((el)=>el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        getAllData(filtered)
    })
})

let bool = false
sortBtn.addEventListener("click",function () {
    bool=!bool
    axios.get("http://localhost:8080/cards").then((res)=>{
        data=res.data
    let sorted = data.sort((a,b)=>{
        if (!bool) {
            return a.price-b.price
        } else{
            return b.price-a.price
        }
    }) 
    getAllData(sorted)
    })
})

async function AddFav(id) {
   const res = await axios(`http://localhost:8080/cards/${id}`)
   const obj = await res.data

  await axios.post(`http://localhost:8080/favs`,obj)
}