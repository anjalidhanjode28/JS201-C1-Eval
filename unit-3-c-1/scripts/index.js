//store the products array in localstorage as "products"


function add(t,d,p,i)
{
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

const showProd = (e) =>
{
    event.preventDefault()
    let form = document.getElementById('products');

    var type = form.type.value;
    var desc =  form.desc.value;
    var price =  form.price.value;
    var image = form.image.value;

    var obj = new add(type,desc,price,image);
    var arr = JSON.parse(localStorage.getItem("products")) || []
    arr.push(obj)
    localStorage.setItem("products",JSON.stringify(arr));
    console.log(obj);
}