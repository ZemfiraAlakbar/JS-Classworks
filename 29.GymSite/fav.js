let cards = document.querySelector(".cards")


axios("http://localhost:8060/favs").then((res)=>{
    data=res.data
    getDataFromFav(data)
})


function getDataFromFav(arr) {
    cards.innerHTML=''
    arr.forEach(el => {
        cards.innerHTML+=`
        <div class="col col-lg-3 col-md-6 col-sm-12">
        <div class="content">
          <img src="${el.img}" alt="" />
          <h3 class="mt-3">${el.title}</h3>
          <p class="comment">
            ${el.description}
          </p>
          <a href="details.html?id=${el.id}" class="viewBtn">VIEW DETAILS</a>
        </div>
      </div>
        `
    });
}

async function deleteFromFav(id,btn) {
    await axios.delete(`http://localhost:8080/favs/${id}`)
    btn.parentElement.parentElement.remove()
}
