let card = document.querySelector('.card')
let col = document.querySelector('.col')
let allCards = document.querySelector('.all-cards')
let searchInput = document.querySelector('#search')

let countryName = new URLSearchParams(window.location.search).get('name')

axios(` https://restcountries.com/v3.1/name/${countryName}`).then((res)=>{
    console.log(res.data);
    allCards.innerHTML=`
    <div class="col col-3">
      <div class="card" style="width: 15rem; height: 450px;">
        <img class="card-img-top" src="${res.data[0].flags.svg}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Name: ${res.data[0].name.common}</h5>
          <h5 class="card-text">Population: ${res.data[0].population}</h5>
          <h5 class="card-text">Region: ${res.data[0].region}</h5>
          <h5 class="card-text">Capital: ${res.data[0].capital}</h5>
          <h5 class="card-text">Native Name: ${Object.values(res.data[0].languages)}</h5>
          <h5 class="card-text">Sub Region: ${res.data[0].subregion}</h5>
        </div>
      </div>
  </div>
    `
})''