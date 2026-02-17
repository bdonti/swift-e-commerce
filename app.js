const manageSpinner = status => {
    const spinner = document.getElementById('spinner');
    const allProducts = document.getElementById('all-products-container');
    const categoryProducts = document.getElementById('category-container');

    if (status === true) {
        spinner.classList.remove('hidden');
        if (allProducts) {
            allProducts.classList.add('hidden');
        }
        if (categoryProducts) {
            categoryProducts.classList.add('hidden');
        }
    } 
    else {
        spinner.classList.add('hidden');
        if (allProducts) {
            allProducts.classList.remove('hidden');
        }
        if (categoryProducts) {
            categoryProducts.classList.remove('hidden');
        }
    }
};


const loadAllProducts = () => {
    manageSpinner(true);
    fetch('https://fakestoreapi.com/products')
    .then(res=> res.json())
    .then(data => showAllProducts(data))
}

const loadTopRatedProducts = () => {
    manageSpinner(true);
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => showTopRatedProducts(data))
}

const loadAllCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => showAllCategories(data))
}

const loadAllCategoryDetails = (category) => {
    manageSpinner(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => showCategoryDetails(data))
}

const loadProductDetail = async(id) =>{
    const res= await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    displayProductDetails(data);
}



const displayProductDetails = product =>{
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
    <h2 class="text-2xl font-bold">${product.title}</h2>
    <p>${product.description}</p>
    <div class="flex justify-center gap-24">
     <div>
    <p class="font-semibold text-2xl">Price</p>
    <p>${product.price}$</p>
    </div>
    <div>
    <p class="font-semibold text-2xl">Rating</p>
    <p>${product.rating.rate}</p>
    </div>
    </div>
    <div class="flex justify-center"><button class="btn btn-primary px-8 my-2">Add to Cart</button></div>
    `;
    document.getElementById('word_modal').showModal();
}

const showAllCategories = (categories) => {
    const allCategoriesContainer = document.getElementById('categories');
    allCategoriesContainer.innerHTML = "";

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');

        const btn = document.createElement('button');
        btn.className = "btn";
        btn.innerText = category;
        btn.addEventListener('click', () => {
            loadAllCategoryDetails(category);
        });
        categoryDiv.appendChild(btn);
        allCategoriesContainer.appendChild(categoryDiv);
    });
};

const showCategoryDetails = (products) =>{
    document.getElementById('all-products-container').innerHTML = "";
    document.getElementById('category-container').innerHTML = "";
    const categoryContainer = document.getElementById('category-container');
    products.forEach(product =>{
        const productDiv = document.createElement('div');
        productDiv.innerHTML =`
        <div class="card bg-base-100 w-96 h-full shadow-sm">
        <figure class="px-10 pt-10">
            <img
            src="${product.image}"
            class="rounded-xl w-full h-76 object-cover" />
        </figure>
        <div class="mt-4 flex justify-center gap-20">
            <p class="text-xs text-primary">${product.category}</p>
            <p><span><i class="fa-solid fa-star text-yellow-500"></i></span><span class="text-gray-500"> ${product.rating.rate}(${product.rating.count})</span></p>
        </div>
        <div class="card-body text-start flex flex-col justify-between">
            <h2 class="font-semibold">${product.title}</h2>
            <p class="text-xl font-bold">${product.price}$</p>
            <div class="flex justify-between items-center">
            <button onclick="loadProductDetail(${product.id})" class="btn"><p class="text-gray-700"><span><i class="fa-regular fa-eye"></i> </span> Details</p></button>
            <div><button class="btn btn-primary px-8">Add to Cart</button></div>
            </div>
        </div>
        </div>
        `
        categoryContainer.appendChild(productDiv);
    })
    manageSpinner(false);
}   

const showAllProducts = (products) =>{
    document.getElementById('all-products-container').innerHTML = "";
    document.getElementById('category-container').innerHTML = "";
    const allProductsContainer = document.getElementById('all-products-container');
    products.forEach(product =>{
        const productDiv = document.createElement('div');
            productDiv.innerHTML = `
        <div class="card bg-base-100 w-96 h-full shadow-sm">
        <figure class="px-10 pt-10">
            <img
            src="${product.image}"
            class="rounded-xl w-full h-76 object-cover" />
        </figure>
        <div class="mt-4 flex justify-center gap-20">
            <p class="text-xs text-primary">${product.category}</p>
            <p><span><i class="fa-solid fa-star text-yellow-500"></i></span><span class="text-gray-500"> ${product.rating.rate}(${product.rating.count})</span></p>
        </div>
        <div class="card-body text-start flex flex-col justify-between">
            <h2 class="font-semibold">${product.title}</h2>
            <p class="text-xl font-bold">${product.price}$</p>
            <div class="flex justify-between items-center">
            <button onclick="loadProductDetail(${product.id})" class="btn"><p class="text-gray-700"><span><i class="fa-regular fa-eye"></i></span> Details</p></button>
            <div><button class="btn btn-primary px-8">Add to Cart</button></div>
            </div>
        </div>
        </div>
           `
        allProductsContainer.appendChild(productDiv);
    })
    manageSpinner(false);
}

const showTopRatedProducts = (products) => {
    const topRatedProductsAll = products.filter(product => product.rating.rate >=4.5);
    const topThreeRatedProducts = topRatedProductsAll.slice(0, 3);
    const topProductContainer = document.getElementById('top-product-container');
    topThreeRatedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
    <div class="card bg-base-100 w-96 h-full shadow-sm">
    <figure class="px-10 pt-10">
        <img
        src="${product.image}"
        class="rounded-xl w-full h-76 object-cover" />
    </figure>
    <div class="mt-4 flex justify-center gap-20">
        <p class="text-xs text-primary">${product.category}</p>
        <p><span><i class="fa-solid fa-star text-yellow-500"></i></span><span class="text-gray-500"> ${product.rating.rate}(${product.rating.count})</span></p>
    </div>
    <div class="card-body text-start flex flex-col justify-between">
        <h2 class="font-semibold">${product.title}</h2>
        <p class="text-xl font-bold">${product.price}$</p>
        <div class="flex justify-between items-center">
        <div><p class="text-gray-700"><span><i class="fa-regular fa-eye"></i> </span> Details</p></div>
        <div><button class="btn btn-primary px-8">Add to Cart</button></div>
        </div>
    </div>
    </div>
        `
        topProductContainer.appendChild(productDiv);
    })
    manageSpinner(false);
}

if(document.getElementById('all-products-container')){
loadAllProducts();
}

if (document.getElementById('top-product-container')) {
    loadTopRatedProducts();
}

if(document.getElementById('categories')){
loadAllCategories();
}
