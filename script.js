let productList = [
    { name:"Graphic-Tee", ImageURL:'https://kmartau.mo.cloudinary.net/583a7d8b-fa63-4496-a35b-fe5f1ba5fc8e.jpg?tx=w_300,h_300,c_pad', price:14.99, quantity:10, size:[6,8,10,12]},
    { name:"Sleeveless Shirred Tank", ImageURL:"https://kmartau.mo.cloudinary.net/e0eacd04-0456-4f7b-a560-41cd3bb82141.jpg?tx=w_300,h_300,c_pad", price:15, quantity:15, size:[6,8,10,12]},
    { name:"Sleeveless", ImageURL:"https://kmartau.mo.cloudinary.net/cefb4639-5b03-4e34-9521-3d996af40724.jpg?tx=w_300,h_300,c_pad", price:25, quantity:20, size:[6,8,10,12]},
    { name:"Women-tee", ImageURL:"https://kmartau.mo.cloudinary.net/0365eccb-7ede-4edf-98e6-212938c1b9da.jpg?tx=w_300,h_300,c_pad", price:16.99, quantity:30, size:[6,8,10,12]},
    { name:"letter t-shirt", ImageURL:"https://kmartau.mo.cloudinary.net/c3d5533c-6c8e-4ffa-91a9-362b64009956.jpg?tx=w_300,h_300,c_pad", price:20.99, quantity:30, size:[6,8,10,12]}
]


const container = document.querySelector('.container')

let userProductList=[]


const displayproduct=()=>{
    let allProduct=''
   
    productList.forEach(element=>{
        let eachProduct = `
        <div class="card">
            <img src=${element.ImageURL} alt="">
           <div class="card-body">
            <h5 class='productName'>${element.name}</h5>
            <p class="card-text">
            <button class="btn btn-outline-secondary " >${element.size[0]}</button>
            <button class="btn btn-outline-secondary " >${element.size[1]}</button>
            <button class="btn btn-outline-secondary " >${element.size[2]}</button>
            <button class="btn btn-outline-secondary " >${element.size[3]}</button>
            </p>
            <p class="price-tag">AU $<span class="price">${element.price}</span> <span class="choose">Please choose size !</span><span class='added'>Product added!</span></p>
            <div ><button class="btn btn-primary ">Add to cart</button></div>
           </div>
           </div>
        
        `
        allProduct+=eachProduct
       
       container.innerHTML=allProduct
        
        
        
    })
   
    
}
displayproduct()
const cards = document.querySelectorAll('.card')

console.log(cards)

cards.forEach(card=>{
    const add = card.querySelector('.btn-primary')
    const sizes = card.querySelectorAll('.btn-outline-secondary')
    const choose = card.querySelector('.choose')
    const productName=card.querySelector('.productName')
    const productPrice=card.querySelector('.price')
    const added = card.querySelector('.added')
    let selectedSize=0
    
    sizes.forEach(size=>{
        size.addEventListener('click',()=>{
            sizes.forEach(a=>{
                a.style.background='white'
                a.style.color ='black'
            })
            selectedSize=size.innerHTML
            choose.style.display="none"
            // size.classList.add('selected')
            size.style.background='blue'
            size.style.color ='white'
           
        })
       
    })
    add.addEventListener('click',()=>{
        if(selectedSize===0){
            choose.style.display="block"
            added.style.display='none'

        }else{
            // alert(`${productName.innerHTML} of size ${selectedSize} is added`)
            added.style.display='inline'
            sizes.forEach(a=>{
                a.style.background='white'
                a.style.color ='black'
            })
            let productDetail={}
            productDetail.name=productName.innerHTML
            productDetail.size=selectedSize
            productDetail.price=productPrice.innerHTML
            
            userProductList.push(productDetail)
            selectedSize=0
            console.log(userProductList)
        }
        
    })
})
