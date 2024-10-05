let pname = document.getElementById("name");
let pprice = document.getElementById("price");
let pqua = document.getElementById("qua");
let pdesc = document.getElementById("desc");
let mage = document.getElementById("image");
let sub = document.getElementById("sub");
let products = JSON.parse(localStorage.getItem("Products")) || [];
let hmbtn = document.getElementById("hm");
let logout = document.getElementById("log");



logout.addEventListener("click",function(){
    sessionStorage.removeItem("username");
    window.location = "gunshop.html";
});

function displayProducts() {
    let productList = document.getElementById('polist');
    productList.innerHTML = ''; 
    let num = 1; 

    products.forEach((product) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${num++}</td>
            <td><img src="${product.image}" style="width:50px"></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.qua}</td>
            <td>${product.desc}</td>
            <td>${product.tt}</td>
            <td>
                <button class="viewBtn">View</button>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        `;

        productList.appendChild(row);

        row.querySelector('.viewBtn').addEventListener('click', function () {
            viewProduct(product);
        });

        row.querySelector('.editBtn').addEventListener('click', function () {
            editProduct(row, product);
        });

        row.querySelector('.deleteBtn').addEventListener('click', function () {
            deleteProduct(row, product);
        });
    });
}

sub.addEventListener("click", function () {
    let imrl = URL.createObjectURL(mage.files[0]);
    let total = pprice.value * pqua.value;

    let newProductName = pname.value;
    let isDuplicate = false;

    for (let i = 0; i < products.length; i++) {
        if (products[i].name === newProductName) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) {
        alert("Duplicate product found");
        return;
    }

    let newProduct = {
        name: pname.value,
        price: pprice.value,
        qua: pqua.value,
        desc: pdesc.value,
        image: imrl,
        tt: total
    };

    products.push(newProduct);
    localStorage.setItem("Products", JSON.stringify(products));

    displayProducts();

    pname.value = '';
    pprice.value = '';
    pqua.value = '';
    pdesc.value = '';
    mage.value = ''; 
});

function viewProduct(product) {
    let viewWindow = window.open("", "_blank", "width=600,height=400");
    viewWindow.document.write(`
        <h2>Product Details</h2>
        <p><strong>Name:</strong> ${product.name}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Quantity:</strong> ${product.qua}</p>
        <p><strong>Description:</strong> ${product.desc}</p>
        <p><strong>Total:</strong> ${product.tt}</p>
        <img src="${product.image}" style="width:100px">
    `);
}

function editProduct(row, product) {
    pname.value = product.name;
    pprice.value = product.price;
    pqua.value = product.qua;
    pdesc.value = product.desc;

    row.remove();

    products = products.filter(p => p !== product);
    localStorage.setItem("Products", JSON.stringify(products));
}

function deleteProduct(row, product) {
    row.remove();

    products = products.filter(p => p !== product);
    localStorage.setItem("Products", JSON.stringify(products));
}

hmbtn.addEventListener("click", function() {
    window.location = "Dash.html"; 
});
displayProducts();