let cards=document.querySelector(".cards")

axios("http://localhost:8080/favorites").then(res=>{
    console.log(res.data);
    addFav(res.data)
})

function addFav(arr) {
    cards.innerHTML=''
    arr.forEach(el => {
        cards.innerHTML+=`
        <div class="card" style="width: 400px;">
            <img src="${el.image}" alt="" class="card-image-top">
             <div class="card-body">
                <span>${el.name}</span>, <span class="card-text">${el.years} yrs. old</span>
                <div>
                <a class="btn btn-danger mt-3" onclick=deleteCard("${el.id}",this)>Delete</a> 
                </div>
             </div>
        `
    });
}


async function deleteCard(id,btn) {
    await axios.delete(`http://localhost:8080/favorites/${id}`)
    btn.parentElement.parentElement.parentElement.remove() 
}