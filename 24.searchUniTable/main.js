let tBody = document.querySelector("tbody");
let search = document.querySelector("input");
let loading = document.querySelector('.loading')

axios
  .get("http://universities.hipolabs.com/search?country=azerbaijan")
  .then((res) => {
    drawTable(res.data);
  });

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((el) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>e${el.name}</td>
    <td>${el.country}</td>
    <td>${el.domains}</td>
    <td><a href="${el.web_pages}" target="_blank">${el.web_pages}</a></td>
    `;
    tBody.append(tr);
  });
}


search.addEventListener("input", function (e) {
    loading.style.display='flex'
  axios(
    `http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`
  ).then((res) => {
    drawTable(res.data);
    loading.style.display='none'
  });
});

window.addEventListener('load',function () {
    loading.style.display='flex'
    axios(
        `http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`
      ).then((res) => {
        drawTable(res.data);
        loading.style.display='none'
      });
})
