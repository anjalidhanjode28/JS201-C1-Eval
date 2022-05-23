var data = JSON.parse(localStorage.getItem("products")) || [];

data.map(function (ele,i) {
    var div = document.createElement("div")

    var type1 = document.createElement("p")
    type1.innerText = ele.type

    var desc1 = document.createElement("p")
    desc1.innerText = ele.desc

    var price1 = document.createElement("p")
    price1.innerText = ele.price

    console.log(type1,desc1,price1)

    btn = document.createElement("button");
    btn.innerText = "Remove"
    btn.setAttribute("id", "remove_product")
    btn.addEventListener("click", function()
    {
        remove(ele,i)
    })

    var img = document.createElement("img")
    img.src = ele.image
    div.append(img,type1,desc1,btn)
    document.querySelector("#all_products").append(div)

})

function remove(ele,i)
{
    data.splice(i,1)
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload()
}