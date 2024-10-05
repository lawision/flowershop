document.getElementById('sub').addEventListener('click', addProduct);

let count = 0;

function addProduct() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('qua').value;
    const description = document.getElementById('desc').value;

    // Calculate total
    const total = price * quantity;

    // Increment count for row numbering
    count++;

    // Create a new row
    const table = document.getElementById('polist');
    const row = document.createElement('tr');

    // Insert cells
    row.innerHTML = `
        <td>${count}</td>
        <td><img src="" alt="Product Image" style="width: 50px; height: auto;"></td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${description}</td>
        <td>${total}</td>
        <td class="actions">
            <button onclick="editProduct(this)">Edit</button>
            <button onclick="deleteProduct(this)">Delete</button>
        </td>
    `;

    // Append row to the table
    table.appendChild(row);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('qua').value = '';
    document.getElementById('desc').value = '';
}

function editProduct(button) {
    const row = button.parentElement.parentElement;
    const name = row.children[2].textContent;
    const price = row.children[3].textContent;
    const quantity = row.children[4].textContent;
    const description = row.children[5].textContent;

    // Populate form with the current values
    document.getElementById('name').value = name;
    document.getElementById('price').value = price;
    document.getElementById('qua').value = quantity;
    document.getElementById('desc').value = description;

    // Remove the current row
    row.remove();
}

function deleteProduct(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
