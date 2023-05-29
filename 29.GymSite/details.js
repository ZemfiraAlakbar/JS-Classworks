let cards=document.querySelector(".cards")

let id = new URLSearchParams(window.location.search).get("id")

axios.get(`http://localhost:8080/Cards/${id}`).then((res)=>{
    data=res.data
    cards.innerHTML=``
    cards.innerHTML=`
    <span class="col-lg-4 col-md-6 mt-3">
               <div class="card p-3">
                <img src="${data.image}" alt="" width="80px" height="80px" style="display: inline-block; margin-left: 130px;">
                <br>
                <h3 class="text-center">${data.title}</h3>
                <br>
                <p class="text-center text-secondary">${data.desc}</p>
               <p>Price: <span class="text-danger">$${data.price}</span></p>
               <p>Id: <span class="text-success">${data.id}</span></p>
            </div>
            </span>
    `
})