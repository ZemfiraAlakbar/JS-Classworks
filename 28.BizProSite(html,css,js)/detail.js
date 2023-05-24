let id = new URLSearchParams(window.location.search).get('id')

let cards=document.querySelector(".cards")

axios(`http://localhost:8080/cards/${id}`).then((res)=>{
    cards.innerHTML=`
    <div class="card" style="width:14rem;">
    <img class="card-img-top" alt="Card image cap" src="${res.data.image}" width="60px" height="150px">
    <div class="card-body">
      <h3 class="card-text">${res.data.title}</h3>
      <p class="card-text">${res.data.describtion}</p>
      <div class="div">
      </div>
    </div>
    </div>
    `})