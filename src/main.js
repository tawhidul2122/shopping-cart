let shop=document.getElementById("shop");

let basket=JSON.parse(localStorage.getItem("data")) || [];

let generateshop=()=> {
    return (shop.innerHTML=shopItemsData.map((x)=>{
        let{id,name,price,desc,img}=x;
        let search=basket.find((x)=>x.id===id)||[]
        return `
        <div id=product-id-${id} class="item">
                <img src=${img} width="218px"alt="" srcset="">
                <div class="details">
    
                     <h3>${name}</h3>
                     <p>${desc}</p>
                     <div class="price-quantity">
                        <h2>${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                                ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                            
    
                        </div>
                     </div>
                </div>
            </div>
        `
    }).join(""));
};
generateshop();

let increment=(id)=>{
    let item=id;
    let search=basket.find((x)=>x.id===item.id);
    if(search === undefined){
        basket.push({
            id:item.id,
            item:1,
        });
    }
    else {
        search.item+=1;
    }
    
    update(item.id);
   // console.log(basket);
   localStorage.setItem("data",JSON.stringify(basket));

    };

let decrement=(id)=>{
    let item=id;
    let search=basket.find((x)=>x.id===item.id);
    if(search=== undefined) return;
    else if(search.item == 0) return;
    else {
        search.item-=1;
    }
    update(item.id);
    basket=basket.filter((x)=>x.item!=0);
    
   // console.log(basket)
   localStorage.setItem("data",JSON.stringify(basket));
    
}; 
let update =(id)=>{
    let search=basket.find((x)=>x.id===id);
    console.log(search.item);
    document.getElementById(id).innerHTML=search.item;
    calcuation();
};

let calcuation =()=>{
    let cartIcon=document.getElementById("cartAmount");
    cartIcon.innerHTML=(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));

};
calcuation();