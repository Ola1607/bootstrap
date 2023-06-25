$(document).ready(function(){
    // $(".col-md-4:first-child button").click(function(){
    //     let amt =$(".col-md-4:first-child .card-text").text()
        
    //     let email="olatunbosunwahab@gmail.com"


        function payment(amt){
            let handler = PaystackPop.setup({
                key: 'pk_test_bd78ecba8b07ba682170e9397bf74ef7782976a9', // Replace with your public key
                email: "olatunbosunwahab@gmaill.com",
                amount: amt * 100,
                ref: ''+Math.floor((Math.random() * 1000000) + 1), 
                onClose: function(){
                alert('Please make the payment');
                },
                callback: function(response) {
                  let message = 'Payment complete! Reference: ' + response.reference;
                  alert(message);
                }
              });
             
              handler.openIframe();
        }

       
        

    // })       
 
        // let firstdiv = document.createElement("div")
        // firstdiv.setAttribute("class","test1")

        // let image = document.createElement("img")
        // image.setAttribute("src","/image1.png")
        // firstdiv.append(image)
        // let p =document.createElement("p")
        // p.innerText ="hello"

        // firstdiv.append(p)


        // console.log(firstdiv)


        let data =[
            {Image: "./images/Cake.jpg",      discount:"50%", amt: 10000, title:"Cake"},
            {Image: "./images/Lake12.jpeg",    discount:"30%", amt: 1000,  title: "Point and kill"},
            {Image: "./images/smallhouse.jpg",discount:"20%",  amt: 1500000, title: "House"},
            
        ]

        data.map((item) =>{

        let firstdiv = document.createElement("div")
        firstdiv.setAttribute("class", "col-md-4 col-12")
        
        let seconddiv = document.createElement("div")
        seconddiv.setAttribute("class", "card")
        firstdiv.appendChild(seconddiv)
 
        let img = document.createElement("img")
        img.setAttribute("class",  "card-img-top")
        img.setAttribute("src", item.Image)
 
        seconddiv.appendChild(img)

        let span = document.createElement("span")
        span.setAttribute("class", "badge rounded-pill text-bg-primary")
        span.innerText =item.discount

        seconddiv.appendChild(span)


        let thirddiv= document.createElement("div")
        thirddiv.setAttribute("class", "card-body")
        seconddiv.appendChild(thirddiv)
         
 
        let h4 = document.createElement("h4")
        h4.setAttribute("class", "card-title")
        h4.innerText = item.amt
        thirddiv.appendChild(h4)

        let p =document.createElement("p")
        p.setAttribute("class","card-text")
        p.innerText = item.title
        thirddiv.appendChild(p)
 
        let fourthdiv = document.createElement("div")
        fourthdiv.setAttribute("class", "card-footer")
        seconddiv.appendChild(fourthdiv)

        let button = document.createElement("button")
        button.setAttribute("class", "btn btn-info w-100")
        fourthdiv.appendChild(button)

        button.onclick= function(){
            // alert(item.amt)
            // handler.openIframe();    //testrunning//
            payment(item.amt)
        }
 
        let i = document.createElement("i")
        i.setAttribute("class", "fa-solid fa-shopping-cart")
 
        button.appendChild(i)
 


       
         document.querySelector(".row").appendChild(firstdiv)


        })

})
        
    



    


// fetch("api.paystack.co/transaction/initialize",{
//             headers: {
//                 Authorization: 'Bearer sk_test_b51a110a45418cbc67755ac519fc6537d318103b',
//                 'Content-Type': 'application/json'
//               },
//               method:'POST',

//         }).then(function(response){
//             response.json()
//         }).then(function(response){
//             console.log(response)
//         })