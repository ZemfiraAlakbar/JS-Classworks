tbody=document.querySelector('tbody')
let tr=document.querySelector('tr')

let isAvailable;

axios.get('http://localhost:8080/users').then((res)=>{
getAllData(res.data)
})

function getAllData(arr) {
    arr.forEach(el => {
        tbody.innerHTML+=`
       <tr>
        <td style="font-size: 30px;">${el.id}</td>
          <td><img src="${el.photo}" alt="" width="60px" height="60px" style="border-radius: 50%;"></td>
          <td style="font-size: 30px;";>${el.name}</td>
          <td style="font-size: 30px;">${el.surname}</td>
          <td style="font-size: 30px;">${el.email}</td>
          <td>${el.date}</td>
          <td>
            <a href="#" class="btn btn-danger text-light" style="font-size: 30px;" onclick=deleteUser("${el.id}",this)>Delete</a>
            <a href="addUser.html?id=${el.id}" style="font-size: 30px;" class="btn btn-success text-light">Edit</a>
            <a href="#" style="font-size: 30px;" class="btn btn-primary text-light btn-fav"  onclick=addFavUser('${el.id}')>Add fav</a>
          </td>
        </tr>
        `
    });
}

async function deleteUser(id,btn) {
await axios.delete(`http://localhost:8080/users/${id}`)
btn.closest('tr').remove()
}

let favUsers=JSON.parse(localStorage.getItem("favUsers")) || []

async function addFavUser(id) {
  let res = await axios(`http://localhost:8080/users/${id}`)
  let data = await res.data
  console.log(data);
  let isAvailable=favUsers.find((el)=>el.id==data.id)
if (!isAvailable) {
  favUsers.push(data)
  localStorage.setItem('favUsers',JSON.stringify(favUsers))
} else {
  alert("The character has been already existed!")
}
}