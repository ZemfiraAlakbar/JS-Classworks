let id = new URLSearchParams(window.location.search).get("id");
let box = document.querySelector(".box");
console.log(id);

axios.get(`http://localhost:8080/blogs/${id}`).then((res) => {
    arrData=res.data
    console.log(arrData);
    box.innerHTML += `
        <div class="inside-box border border-danger mt-4 rounded">
        <h2 class="text-dark mx-2">${arrData.title}</h2>
         <p class="text-dark mx-2">${arrData.body}</a></p>
         <p class="text-dark mx-2">Written by: ${arrData.author}</p>
    </div>
        `;
  
});

// forEache salmadim cunki urlserachle id bize tekce elemin id ni verir yeni oda olur object forEach ise 
// arrayin metodudur ona gore forEache salmadiq.