let cards=document.querySelector(".cards")
let sortBtn=document.querySelector('.sort')
let search=document.querySelector('.search')

axios.get("http://localhost:8080/children").then((res)=>{
    data=res.data
    console.log(data);
    getAllData(data)
})

function getAllData(arr) {
    cards.innerHTML=``
   arr.forEach(el => {
    cards.innerHTML+=`
    <div class="card" style="width: 400px;">
            <img src="${el.image}" alt="" class="card-image-top">
             <div class="card-body">
                <span>${el.name}</span>, <span class="card-text">${el.years} yrs. old</span>
                <div>
                <a class="btn btn-danger mt-3" onclick=deleteCard("${el.id}",this)>Delete</a> 
                <a href="./addEdit.html?id=${el.id}" class="btn btn-success mt-3">Edit</a> 
                <a href="#" class="btn btn-primary mt-3" onclick=addtoFav("${el.id}")>Add Fav</a>
                </div>
             </div>
    `
   });
}

function deleteCard(id,btn) {
    axios.delete(`http://localhost:8080/children/${id}`)
    btn.parentElement.parentElement.parentElement.remove() 
}

let sort = false;
sortBtn.addEventListener("click", function () {
  sort = !sort;
  axios.get("http://localhost:8080/children").then((res) => {
    let sorted = res.data.sort((a, b) => {
      if (sort) {
        return a.years - b.years;
      } else {
        return b.years - a.years;
      }
    });
    getAllData(sorted);
  });
});

search.addEventListener("input",function (e) {
    axios.get("http://localhost:8080/children").then((res)=>{
        let filtered=res.data.filter((el)=>el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        getAllData(filtered)
    })
})


async function addtoFav(id) {
  const res = await axios.get(` http://localhost:8080/children/${id}`)
  const obj = await res.data

 await axios.post(`http://localhost:8080/favorites`,obj)
}