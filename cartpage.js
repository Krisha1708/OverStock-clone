// var data = [
//     {
//     proImg: "https://ak1.ostkcdn.com/images/products/is/images/direct/539d42288f85aff7c136e4298b59a18b6626e0c4/SAFAVIEH-Adirondack-Vera-Modern-Ombre-Distressed-Area-Rug.jpg",
//     proName:"SAFAVIEH Adirondack Vera Modern Ombre Distressed Stripe Area Rug",
//     price: "8045",
//     productID: "pro1",
//     description: "A gorgeous upholstered finish, a sleek design, excellent support and easy assembly; what more could you want? The Brookside Tara Upholstered Platform Bed Frame is the perfect statement piece to finish any bedroom."
//     },
//     {
//     proImg: "https://ak1.ostkcdn.com/images/products/is/images/direct/539d42288f85aff7c136e4298b59a18b6626e0c4/SAFAVIEH-Adirondack-Vera-Modern-Ombre-Distressed-Area-Rug.jpg",
//     proName:"Sofa Adirondack Vera Modern Ombre Distressed Stripe Area Rug",
//     price: "5045",
//     productID: "pro2",
//     description: "A gorgeous upholstered finish, a sleek design, excellent support and easy assembly; what more could you want? The Brookside Tara Upholstered Platform Bed Frame is the perfect statement piece to finish any bedroom."
//     },
//     {
//     proImg: "https://ak1.ostkcdn.com/images/products/is/images/direct/539d42288f85aff7c136e4298b59a18b6626e0c4/SAFAVIEH-Adirondack-Vera-Modern-Ombre-Distressed-Area-Rug.jpg",
//     proName:"chair Adirondack Vera Modern Ombre Distressed Stripe Area Rug",
//     price: "10000",
//     productID: "pro3",
//     description: "A gorgeous upholstered finish, a sleek design, excellent support and easy assembly; what more could you want? The Brookside Tara Upholstered Platform Bed Frame is the perfect statement piece to finish any bedroom."
//     },

//     ]

//     localStorage.setItem("pro-cart",JSON.stringify(data))

var addCartArr = JSON.parse(localStorage.getItem("cartList")) || []

var dataArr=JSON.parse(localStorage.getItem("userData"));

var product = document.querySelector("#product")

var checkoutArr = []

function promocode(){
    var promo_code = (document.querySelector("#promocode").value)
    var promo_up = promo_code.toUpperCase()
    var promo_text = document.querySelector("#promo_alert")
    var discount_text = document.querySelector("#discount")
    var cart_total = (document.querySelector("#cartINR").innerText).trim().split(" ")
    var cart_total_INR =+ cart_total[1]
    if(promo_up=="MASAI10"){
        promo_text.innerText = "Applied Successfully"
        promo_text.style.color = "green"
        var discount = (cart_total_INR*10)/100
        discount_text.innerText = (-discount).toFixed(2)
        document.querySelector("#subTotal_price").innerText = (cart_total_INR - discount).toFixed(2)
        document.querySelector("#total_price>h3").innerText = (cart_total_INR - discount).toFixed(2)
    
    }
    else if(promo_up==""){
        promo_text.innerText = ""
        var discount = 0
        discount_text.innerText = (-discount).toFixed(2)
        document.querySelector("#subTotal_price").innerText = (cart_total_INR - discount).toFixed(2)
        document.querySelector("#total_price>h3").innerText = (cart_total_INR - discount).toFixed(2)
    }

    else{
        promo_text.innerText = "Enter Correct code"
        var discount = 0
        discount_text.innerText = (-discount).toFixed(2)
        document.querySelector("#subTotal_price").innerText = (cart_total_INR - discount).toFixed(2)
        document.querySelector("#total_price>h3").innerText = (cart_total_INR - discount).toFixed(2)
    }

   
}

display(addCartArr)

function display(data){
    if (addCartArr[0] == undefined){
        var product = document.querySelector("#product")
        product.setAttribute("class","empty")
        product.innerText = "Your Cart is Empty"
        
    }
    else{
        var product = document.querySelector("#product")
        product.innerHTML = ""

        data.forEach(function(ele,index){
            var d1 = document.createElement("div")
            d1.setAttribute("class", "cart-item")
        
            
            var d2 = document.createElement("div")
            
            var img = document.createElement("img")
            img.setAttribute("src", ele.proImg)
            d2.append(img)
        
            
            var d3 = document.createElement("div")
            d3.setAttribute("id","cart-content")

            var d4 = document.createElement("p")
            d4.innerText = ele.proName

            var d5 = document.createElement("h3")
            d5.innerText = "INR " + ele.price

            var d6 = document.createElement("div")
            var d6_1 = document.createElement("p")
            d6_1.setAttribute("id","qty")
            var d6_2 = document.createElement("select")
            d6_2.setAttribute("id","quntity")
            d6_2.innerHTML =  ` <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>`
            var items_value = d6_2.value
            ele.Quantity = items_value
            console.log(data)           
            d6_2.addEventListener("change",function(){
                
                var items_value = d6_2.value
                ele.Quantity = items_value 
                console.log(data)
                calculate(data)
            })                    
            d6.append(d6_1,d6_2)

            var d7 = document.createElement("div")
            d7.setAttribute("id","cBtn")
            var d7_1 = document.createElement("div")
            d7_1.innerText = "Remove"
            d7.append(d7_1)
            d7_1.addEventListener("click",function(){
                Delete(ele,index)
            })
            

            d3.append(d4,d5,d6,d7)
            d1.append(d2,d3)
            product.append(d1)
        
        });
    }    
}

var total_Cart = document.querySelector("#total_price>h3")
var checkout = document.querySelector("#checkout")
    checkout.addEventListener("click",function(){
        checkoutFun(addCartArr,total_Cart)
    })



function checkoutFun(data,total_Cart){
    if (dataArr==null){
        window.location.href="./user signup signin/user.html"
        
    }
    else{
    var obj = {}
    obj.cartItem = data
    obj.totalCartValue = total_Cart.innerText
    checkoutArr.push(obj)
    localStorage.setItem("checkoutData",JSON.stringify(checkoutArr));
    console.log(checkoutArr)
    window.location.href="./payment page/paymentpage.html"
    }
}    

function calculate(data){
    var N = 0;
    var cart_price = 0;
    
    for(var i=0; i<data.length; i++){
        N = N + Number(data[i].Quantity)
        cart_price = (cart_price + Number(data[i].Quantity)*Number(data[i].price))
    }

    console.log(N, cart_price)
    
    var items_cart = document.querySelector("#Items")
    items_cart.innerText = N + " Items"

    var cart_INR = document.querySelector("#cartINR")
    cart_INR.innerText = "INR " + (cart_price).toFixed(2)

    var sub_total = document.querySelector("#subTotal_price")
    sub_total.innerText = (cart_price).toFixed(2)

    var total = document.querySelector("#total_price>h3")
    total.innerText = (cart_price).toFixed(2)
    
    promocode()
}

function Delete(ele,index){
    addCartArr.splice(index,1);
    localStorage.setItem("cartList", JSON.stringify(addCartArr));
    window.location.reload()
    }

console.log(addCartArr)

calculate(addCartArr)

