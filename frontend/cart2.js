let AllProducts = JSON.parse(localStorage.getItem('allProducts')) ||[]
    let productCont=document.getElementById("product-cont")
  

    let total=document.getElementById("total")

    let cartArr=JSON.parse(localStorage.getItem("bagproduct")) || []
    

    // console.log(cartArr)


    let orderSummary=document.getElementById("order-total")

    let empt=document.getElementById("empty")
    let btn=document.getElementById("shop")
    btn.addEventListener("click", ()=>{
      location.href="product.html"
    })
    if(cartArr.length==0){
        empt.innerHTML="Your Shopping Bag is Empty!!"
       orderSummary.innerHTML=""
        // btn.innerHTML="CONTINUE SHOPPING"
        btn.addEventListener("click", ()=>{
            location.href("product.html")
        })
    }
    else{
      let data= []
    for(let i=0;i<AllProducts.length;i++){
        for(let j=0;j<cartArr.length;j++){
            if(AllProducts[i].id==cartArr[j]){
                data.push(AllProducts[i]);
                break;
            }
        }
    }
    displayData(data)
    }
   

    function displayData(data){
        let sum=0
        let wishData=JSON.parse(localStorage.getItem("bagproduct")) || []
        productCont.innerHTML=""
        empt.innerHTML=""
        // btn.innerHTML=""
        data.forEach((el,ind) => {
            let card=document.createElement("div");
            let image=document.createElement("img")
            image.src=el.image;
        
            let price=document.createElement("h4")
            price.textContent=el.price;
          
          
            

            let desc=document.createElement("p")
            desc.textContent=el.description;

            let del=document.createElement("button")
            del.textContent="Remove from Bag"
            del.setAttribute("id", 'removebtn')
            del.addEventListener("click", ()=>{
                cartArr.splice(ind,1)
                localStorage.setItem("bagproduct", JSON.stringify(cartArr))
                location.href="cart.html"
            })
            let quantity = document.createElement("span");
            quantity.innerText=el.quantity

            let inc=document.createElement("button")
            inc.textContent="+"
            inc.setAttribute("class", 'incbtn')
            inc.addEventListener("click", () => {

            el.quantity+=1
            localStorage.setItem("allProducts",JSON.stringify(AllProducts))
            displayData(data)
          
        }); 


              let dec=document.createElement("button")
              dec.textContent="-"
              dec.setAttribute("class", 'incbtn')
              dec.addEventListener("click", ()=>{
                if(el.quantity!=1){
                  el.quantity=el.quantity-1
                  localStorage.setItem("allProducts", JSON.stringify(AllProducts))
                  displayData(data)
                }
              })
              sum+=Number(el.price*el.quantity)
              total.innerText=sum
            

            card.append(image,desc, price,inc,quantity, dec,  del, )

            productCont.append(card)
        });
        // cartTotal()
        
    }

    function cartTotal(){
        let sum=0;
        for(let i=0;i<cartArr.length;i++){
            sum+=cartArr[i].price
            console.log(cartArr.price)
        }
        total.innerText=+sum
    }
    
    let proceed=document.getElementById("proceed")
    proceed.addEventListener("click", ()=>{
      location.href="checkout.html"
    })

