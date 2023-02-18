fetch("https://free-food-menus-api-production.up.railway.app/burgers")
.then((response)=>response.json())
.then((data)=>{
    console.log("ShowData",data);
    
    
    let myDiv=document.getElementById("container")
    data.map((product)=>{
        myDiv.innerHTML+=
     `<div class="card">
     <div class="card-image">
         <img src="${product.img}" alt="image">
     </div>
     <div class="card-body">
         <div class="name">
             Name: ${product.name}
         </div>

         <div class="price">
             Price: ${product.price}
         </div>
     </div>
 </div>`      
    })
})


function getdata(){
    fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    .then((response)=> response.json())
    
}

function takeOrder(data){
    const promise = new Promise((resolve, reject) => {
        var arr=[2];
        resolve(arr[Math.floor(Math.random()* data.length)]);
        console.log(arr);
    })
}

getdata()
.then((data)=>takeOrder(data))