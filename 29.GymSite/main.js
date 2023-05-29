let cards = document.querySelector(".cards");
let search = document.querySelector(".search")
let sortBtn = document.querySelector(".sorted")

axios.get("http://localhost:8080/Cards").then((res)=>{
    data=res.data
    console.log(data);
    getAllData(data)
})

function getAllData(arr) {
    cards.innerHTML=''
    arr.forEach(el => {
       cards.innerHTML+=`
       <span class="col-lg-4 col-md-6">
               <div class="card p-3">
                <img src="${el.image}" alt="" width="80px" height="80px" style="display: inline-block; margin-left: 130px;">
                <br>
                <h3 class="text-center">${el.title}</h3>
                <br>
                <p class="text-center text-secondary">${el.desc}</p>
               <p>Price: <span class="text-danger">$${el.price}</span></p>
               <div class="buttons">
                <a href="#" class="btn btn-danger" onclick=deleteCard("${el.id}",this)>Delete</a>
                <a href="addEdit.html?id=${el.id}" class="btn btn-success">Edit</a>
                <a href="details.html?id=${el.id}" class="btn btn-warning text-white mt-1">Details</a>
                <a href="#" class="btn btn-primary basket" onclick=addFav("${el.id}")>Add to Basket</a>
               </div>
            </div>
            </span>
       ` 
    });
}

search.addEventListener("input",async function (e) {
    const res = await axios("http://localhost:8080/Cards")
    const data = await res.data
    let filtered=data.filter((el)=>el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    getAllData(filtered)
})

function deleteCard(id,btn) {
    axios.delete(`http://localhost:8080/Cards/${id}`)
    btn.closest("span").remove()
}

async function addFav(id) {
    const res = await axios(`http://localhost:8080/Cards/${id}`)
    const obj = await res.data

   await axios.post("http://localhost:8080/Favs",obj)
}

// let bool=true 
// sortBtn.addEventListener("click",function () {
//     bool=!bool
//     axios("http://localhost:8080/Cards").then((res)=>{
//         data=res.data
//         let sorted=data.sort((a,b)=>{
//             if (!bool) {
//                 sortBtn.innerHTML="descending"
//                return a.price-b.price
//             } else {
//                 sortBtn.innerHTML="ascending"
//                 return b.price-a.price
//             }
//         })
//         getAllData(sorted)
//     })
// })


sortBtn.addEventListener("click",function () {
    if (this.innerHTML=='Ascending') {
        axios.get("http://localhost:8080/Cards").then((res)=>{
            let sortAsc=res.data.sort((a,b)=>a.price-b.price)
            getAllData(sortAsc)
        }) 
        this.innerHTML="Descending"
     } 
      else if(this.innerHTML=="Descending"){
     axios.get("http://localhost:8080/Cards").then((res)=>{
        let sortDsc=res.data.sort((a,b)=>b.price-a.price)
        getAllData(sortDsc)
     }) 
     this.innerHTML="Default"
    } 
     else {
        axios.get("http://localhost:8080/Cards").then((res)=>{
            getAllData(res.data)
        })
        this.innerHTML="Ascending"
    }
})


// this is the same code as above code, but i have written it by myself without looking at above code.

// sortBtn.addEventListener("click",function () {
//     if (this.innerHTML=="Ascending") {
//         axios('http://localhost:8080/Cards').then((res)=>{
//             let sortAsc=res.data.sort((a,b)=>a.price-b.price)
//             getAllData(sortAsc)
//         })
//         this.innerHTML="Descending"
//     }
//     else if (this.innerHTML=="Descending"){
//         axios("http://localhost:8080/Cards").then((res)=>{
//             let sortDsc=res.data.sort((a,b)=>b.price-a.price)
//             getAllData(sortDsc)
//         })
//         this.innerHTML="Default"
//     } else{
//         axios("http://localhost:8080/Cards").then((res)=>{
//             getAllData(res.data)
//         })
//         this.innerHTML="Ascending"
//     }
// })