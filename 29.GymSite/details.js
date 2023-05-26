let cards=document.querySelector(".cards")

let id = new URLSearchParams(window.location.search).get('id')

axios(`http://localhost:8080/gym/${id}`).then((res)=>{
    cards.innerHTML=`
    <div class="col col-lg-3 col-md-6 col-sm-12">
    <div class="content">
      <img src="${res.data.img}" alt="" />
      <h3 class="mt-3">${res.data.title}</h3>
      <p class="comment">
        ${res.data.description}
      </p>
    </div>
  </div>
    `})