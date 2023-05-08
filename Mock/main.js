let cards = document.querySelector('#cards')
let btn=document.querySelector('.btn-dark')

async function getData() {
    let response = await fetch('https://northwind.vercel.app/api/orders')
    let data=await response.json()
    console.log(data);
    let filteredData=data.filter((el)=>el.shipAddress.country==='USA')
    filteredData.forEach(el => {
        let elem=document.createElement('div')
        elem.innerHTML=`
        <div class="col col-5 d-flex justify-content-between ">
        <div>
        <h6>${el.shipAddress?.city}</h6>
        <h5>${el.shipAddress?.country}</h5>
        </div>
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash-can"></i>
        <div>
        <h3></h3>
        <h3></h3>
        </div>
        </div>
        `
        cards.append(elem)
    });
}
getData()

btn.addEventListener('click',function() {
    window.location.href="addUser.html"
})

async function deleteUser(userId) {
    await fetch('https://northwind.vercel.app/api/orders')
    method:'DELETE'
}
deleteUser()

