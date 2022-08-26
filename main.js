let shop=document.getElementById("shop");
let shopItemsData=[
    {
        id:"first", 
        name:"Casual Shirt",
        price:45,
        desc:"lorem*3   ",
        img:"./images/img-1.jpg",
    },
    {
        id:"second", 
        name:"office Shirt",
        price:55,
        desc:"lorem*3   ",
        img:"./images/img-2.jpg",

    },
    {
        id:"third", 
        name:"T Shirt",
        price:5,
        desc:"lorem*3   ",
        img:"./images/img-3.jpg",

    },
    {
        id:"fourth", 
        name:"Suite",
        price:450,
        desc:"lorem*3   ",
        img:"./images/img-4.jpg",

    }

    
];
let basket=[];

let generateshop=()=> {
    return (shop.innerHTML=shopItemsData.map((x)=>{
        let{id,name,price,desc,img}=x
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
                                0
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

    }

let decrement=(id)=>{
    let item=id;
    let search=basket.find((x)=>x.id===item.id);
    if(search.item == 0) return;
    else {
        search.item-=1;
    }
    update(item.id);
   // console.log(basket);
    
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