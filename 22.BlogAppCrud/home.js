let box = document.querySelector(".box");
let searchInput = document.querySelector(".search")

axios.get("http://localhost:8080/blogs").then((response) => {
  myData = response.data;
  getAllData(myData);
});

function getAllData(arr) {
  box.innerHTML = "";
  arr.forEach((el) => {
    box.innerHTML += `
    <div class="inside-box border mt-4 rounded">
    <h2 class="text-dark mx-2">${el.title}</h2>
    <p class="text-dark mx-2">${el.body.slice(
     0,
     50
    )}...<a href="details.html?id=${el.id}">Read More</a></p>
    <p class="text-dark mx-2">Written by: ${el.author}</p>
    <a href="" class="btn btn-danger mb-1 mx-1" onclick=deleteBlog("${
    el.id
    }",this)>Delete</a>
    <a href="editedBlog.html?id=${
    el.id
    }" class="btn btn-warning mb-1 text-white">Edit</a>
    </div>
    `;
  });
}

function deleteBlog(id, btn) {
  axios.delete(`http://localhost:8080/blogs/${id}`);
  btn.closest("div").remove();
  getAllData(myData);
}
// burda niye btn qoyruq yuxarda this qoyruq thise klik edende avtomatik btn e yonlendirsin ui dan silmek
// ucun edilir.

searchInput.addEventListener("input",function (e) {
  console.log(searchInput);
  axios.get('http://localhost:8080/blogs').then((res)=>{
    let filtered = res.data.filter((el)=>el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    getAllData(filtered)
  })
})