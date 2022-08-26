let label=document.getElementById('label');
let shoppingCart=document.getElementById('shopping-cart');

let basket=JSON.parse(localStorage.getItem("data")) || [];


let calcuation =()=>{
    let cartIcon=document.getElementById("cartAmount");
    cartIcon.innerHTML=(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));

};
calcuation();

let generateCartItems=()=>{
    if(basket.length!=0){
        // console.log("basket is not empty");
        return (shoppingCart.innerHTML=basket.map((x)=>{
            return `
             <div class="cart-item">
             <img src="" alt="" />
             </div>  
             `;
        }).join(''));
    
    }
    else{
        shoppingCart.innerHTML=``;
        label.innerHTML=`
        <h2>Cart is Empty </h2>
        <a href="./index.html">
        <button class="home">Back to index.html</button>
        </a> 
        `
        console.log("basket si empty");
    }
};
generateCartItems();