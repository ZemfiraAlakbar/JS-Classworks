let searchInp = document.querySelector("#search");
let cards = document.querySelector(".cards");
// let filtered = [];
// let copyData = [];

axios("http://localhost:8060/gym").then((res) => {
  data = res.data;
  console.log(data);
  getAllData(data);
});

function getAllData(arr) {
  cards.innerHTML = "";
  arr.forEach((el) => {
    cards.innerHTML += `
        <div class="col col-lg-3 col-md-6 col-sm-12">
              <div class="content">
                <img src="${el.img}" alt="" />
                <h3 class="mt-3">${el.title}</h3>
                <p class="comment">
                  ${el.description}
                </p>
                <a href="details.html?id=${el.id}" class="viewBtn ">VIEW DETAILS</a>
                <div class="buttons mt-4">
                <a href="./addEdit.html?id=${el.id}" class="btn btn-success">Edit</a>
                <a class="btn btn-danger" onclick="deleteCard(${el.id},this)">Delete</a>
                <a href="#" class="btn btn-primary" onclick=addFav(${el.id})>Add Fav</a>
                </div> 
              </div>
            </div>
        `;
  });
}

async function deleteCard(id, btn) {
  axios.delete(`http://localhost:8060/gym/${id}`);
  btn.parentElement.parentElement.parentElement.remove();
}

async function addFav(id) {
  const res = await axios(`http://localhost:8060/gym/${id}`);
  const obj = await res.data;

  await axios.post(`http://localhost:8060/favs`, obj);
}

searchInp.addEventListener("input" , function (e) {
    axios.get("http://localhost:8060/gym").then((res)=>{
   let filtered=res.data.filter((el)=>el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
   getAllData(filtered)
    })
 })