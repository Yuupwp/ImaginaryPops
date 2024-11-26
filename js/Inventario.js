function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

const inventoryGrid = document.getElementById('inventory-grid');

function addFunko(name, price, category) {
    const funko = document.createElement('div');
    funko.classList.add('inventory-item');

    funko.innerHTML = `
<h3>${name}</h3>
<img src="placeholder.png" alt="${name}">
<p class="price">$${price}</p>
<div class="quantity-control">
    <button onclick="updateQuantity(this, -1)">-</button>
    <input type="number" value="1" min="0">
    <button onclick="updateQuantity(this, 1)">+</button>
</div>
<select>
    <option value="categoria">${category}</option>
</select>
<button class="delete-product-btn" onclick="deleteFunko(this)">Eliminar producto</button>
`;
    inventoryGrid.appendChild(funko);
}

function updateQuantity(button, delta) {
    const input = button.parentElement.querySelector('input');
    const newValue = parseInt(input.value) + delta;
    if (newValue >= 0) {
        input.value = newValue;
    }
}

function deleteFunko(button) {
    const item = button.closest('.inventory-item');
    inventoryGrid.removeChild(item);
}

function showProductForm() {
    document.getElementById('product-form-container').style.display = 'block';
}

function hideProductForm() {
    document.getElementById('product-form-container').style.display = 'none';
}

function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const category = document.getElementById('product-category').value;

    addFunko(name, price, category);
    hideProductForm();
}