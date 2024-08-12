function addProduct() {
    const title = document.querySelector('#title').value;
    const price = document.querySelector('#price').value;
    const description = document.querySelector('#description').value;
    document.querySelector('#title').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#description').value = '';
    addToProductList(
        `TITLE : &nbsp; ${title}
         <br> PRICE : &nbsp;${price} 
         <br> DISCRIPTION : &nbsp;${description}`);
}

function addToProductList(productText) {
    const productBox = document.querySelector('#product-container'); 
    productBox.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${productText}</h5>
                <button>Add To Card </button>
            </div>
        </div>`;
}



