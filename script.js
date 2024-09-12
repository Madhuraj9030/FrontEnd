function fetchData(){
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>displayData(res.data))
}
fetchData()
function displayData(ar){
    ar.forEach((m)=>{
        let prodiv= $('<div class= "child"> </div>')
        prodiv.append(`<img class="image" src="${m.image}">`)
        prodiv.append(`<p class="title">${m.title}</p>`)
        prodiv.append(`<p class="price">${m.price}</p>`)
        $('#main').append(prodiv);
    })
}

/*
category
: 
"men's clothing"
description
: 
"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id
: 
1
image
: 
"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price
: 
109.95
rating
: 
{rate: 3.9, count: 120}
title
: 
"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
*/