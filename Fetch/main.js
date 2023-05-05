let url = "https://jsonplaceholder.typicode.com/todos";
function getElement() {
    fetch(url)
    .then((result) => result.json()).then((data) => console.log(data));
}
getElement()

function userFiltered(params) {
    fetch(url).then(res=>res.json()).then(data=>{
        let filtered=data.filter((el)=>el.completed)
        console.log(filtered);
        })
}
userFiltered()

function userId() {
    fetch(url).then(res=>res.json()).then(data=>{
        let filteredId=data.filter((el)=>el.userId==2)
        console.log(filteredId);
    })
}
userId()