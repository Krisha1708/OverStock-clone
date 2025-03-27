var cartlist1 = JSON.parse(localStorage.getItem("checkoutData"))
console.log(cartlist1)

    cartlist1.forEach(function(elem){
        console.log(elem.cartItem)
        var cartItemData = elem.cartItem

        cart_List_Ele(cartItemData)

    })

    
 var Sub_Total = document.querySelectorAll("#Subtotal")

 Sub_Total[0].innerText = cartlist1[0].totalCartValue
 Sub_Total[1].innerText = cartlist1[0].totalCartValue
    // console.log(cartlist1[0].totalCartValue)

    //    -----------------------------------------------
    function cart_List_Ele(data){
        data.forEach(function(ele){
            var tr= document.createElement("tr")
            var td1 = document.createElement("td")
            td1.innerText= ele.Quantity;
        
            var td2 = document.createElement("td")
            td2.innerText= ele.descreption;
            console.log(td2)
        
            var td3= document.createElement("td")
             td3.innerText=  ele.price;
        
            var td4= document.createElement("td")
            td4.innerText= Number(ele.price) * Number(ele.Quantity);
        
            tr.append(td1,td2,td3,td4)
    
            document.querySelector("#body").append(tr)
        
        })
    }

  document.querySelector("#endbtn").addEventListener("click",myorder);
var forml = document.querySelector("#forml");
var formr = document.querySelector("#formr");
var carddata = document.querySelector("#payment_down");


  function myorder(){
      
         var form= {
             email:forml.email.value,
             firstname:forml.firstname.value,
             lastname:forml.lastname.value,
             company:forml.company.value,
             taxid:forml.taxid.value,
             line1:forml.line1.value,
             line2:forml.line2.value,
             country1:forml.country1.value,
             city:forml.city.value,
             state:forml.state.value,
             code:forml.code.value,
             phone:forml.phone.value,
         };
         var form1= {
            email:formr.email1.value,
            firstname:formr.firstname1.value,
            lastname:formr.lastname1.value,
            company:formr.company1.value,
            taxid:formr.taxid1.value,
            line1:formr.line11.value,
            line2:formr.line21.value,
            country2:formr.country2.value,
            city:formr.city1.value,
            state:formr.state1.value,
            code:formr.code1.value,
            phone:formr.phone1.value,
         };

         
        var form2 = {
            cardtype:document.querySelector("#card").value,
            cardnumber1:document.querySelector("#cardnumber").value,
            expirationmonth:document.querySelector("#month").value,
            expirationyear:document.querySelector("#year").value,
            securitycode1:document.querySelector("#securitycode").value,
        }
        




         if(form.email!==""&&form.firstname!==""&&form.lastname!==""&&form.company!==""&&form.taxid!==""&&form.line1!==""&&form.line2!==""&&form.country1!==""&&form.city!==""&&form.state!==""&&form.phone!==""&&form1.email!==""&&form1.firstname!==""&&form1.lastname!==""&&form1.company!==""&&form1.taxid!==""&&form1.line1!==""&&form1.line2!==""&&form1.country2!==""&&form1.code!==""&&form1.city!==""&&form1.state!==""&&form1.phone!=="" &&form2.cardnumber1!==""&&form2.expirationmonth!==""&&form2.cardtype!==""&&form2.expirationyear!==""&&form2.securitycode1!==""){
             window.location.href="End.html";
        }else{
            alert("Fill All The Details First");
         }
        
       
   }

   










