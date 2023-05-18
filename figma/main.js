axios("https://restcountries.com/v2/all").then((res)=>{
    getAllData(res.data)
})

let card = document.querySelector('.card')
let col = document.querySelector('.col')
let allCards = document.querySelector('.all-cards')
let searchInput = document.querySelector('#search')

function getAllData(arr) {
    allCards.innerHTML=''
    arr.forEach(el => {
        allCards.innerHTML+=`
        <div class="col col-3">
        <a href="./details.html?name=${el.name}" class="card">
          <div class="card" style="width: 15rem; height: 400px;">
            <img class="card-img-top" src="${el.flags.svg}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Name: ${el.name}</h5>
              <h5 class="card-text">Population: ${el.population}</h5>
              <h5 class="card-text">Region: ${el.region}</h5>
              <h5 class="card-text">Capital: ${el.capital}</h5>
            </div>
          </div>
        </a>
      </div>
        `
    });
}

searchInput.addEventListener('input' , function(e) {
   axios("https://restcountries.com/v2/all").then((res)=>{
    let filtered=res.data.filter((el)=>el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    getAllData(filtered)
   })
})