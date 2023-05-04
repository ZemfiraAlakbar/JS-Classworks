let addUserBtn = document.querySelector('.btn-primary')
let boxes=document.querySelector('.boxes')

addUserBtn.addEventListener('click',function () {
    window.location='index.html'
})

const users=JSON.parse(localStorage.getItem('users')) || []

users.forEach(el => {
    const box = document.createElement('div')
    boxes.append(box)
    box.innerHTML+=`
    <h1>Name: ${el.Username}</h1>
    <h1>Email: ${el.Email}</h1>
    <button class='btn btn-danger'>Delete</button>
    `
});

// function deleteUser(userId) {
//     users=users.filter((el)=>el.id != id)
//     localStorage.setItem('users',JSON.stringify(users))

// }
