document.addEventListener("DOMContentLoaded", () => {
    
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 29.99
        },
        {
            id: 2,
            name: "Product 2",
            price: 19.99
        },
        {
            id: 3,
            name: "Product 3",
            price: 59.999
        }
    ];

    const productList = document.getElementById("product-list");
    const chartItems = document.getElementById("cart-items");
    const cardTotal = document.getElementById('cart-total');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cart = [];
    let amount = 0;

    products.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add('product');
        div.innerHTML = `
        <span>${prod.name} - ${prod.price.toFixed(2)}</span>
        <button data-id="${prod.id}">Add to chart</button>
        `;

        productList.appendChild(div);
    });

    productList.addEventListener("click", (e) => {
        if(e.target.tagName === 'BUTTON'){
            let prodId =  parseInt(e.target.getAttribute('data-id'));
            let prod = products.find(p => p.id === prodId);
            addToChart(prod);
        }
    })

    function addToChart(prod){
        cart.push(prod);
        render();
    }

    function render(){
        chartItems.innerText = "";
        amount = 0;
        if(cart.length>0){
            cart.forEach(c => {
                amount+=c.price;
                const chartItem = document.createElement("div");
                chartItem.innerHTML = `
                ${c.name} - $${c.price}
                `;
    
                chartItems.appendChild(chartItem);
    
                total(amount);
    
            })
        }
        else {
            totalPrice.textContent = `$0.00`;
        }
    }

    function total(pric){

        cardTotal.classList.remove("hidden");
        totalPrice.textContent = `$${amount.toFixed(2)}`;
    }

    checkoutBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        checkout();
    });
    

    function checkout(){
        cart.length = 0;
        alert('checkout successfull');
        render();
    }




    
})


