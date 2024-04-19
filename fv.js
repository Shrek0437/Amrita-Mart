const items = [
    { 
      id: 1, 
      name: "Apples", 
      variants: [
        { color: "Red", price: 20 },
      ], 
      image: "apple.jpeg" 
    },
    { 
      id: 2, 
      name: "Bananas", 
      variants: [
        { type: "Robusta", price: 20 },
        { type: "Organic", price: 30 }
      ], 
      image: "banana.jpeg" 
    },
    { 
      id: 3, 
      name: "Oranges", 
      variants: [
        { size: "Small", price: 2.00 },
        { size: "Large", price: 3.50 }
      ], 
      image: "orange.jpeg" 
    },
    { 
        id: 4, 
        name: "Watermelon", 
        variants: [
          {price: 2.50 },
        ], 
        image: "WM.jpeg" 
      },
      { 
        id: 5, 
        name: "Lemon", 
        variants: [
          { type: "Regular", price: 1.50 },
          { type: "Organic", price: 2.00 }
        ], 
        image: "lemon.jpeg" 
      },
      { 
        id: 6, 
        name: "Sapota", 
        variants: [
          { price: 20.00 },
        ], 
        image: "sapota.jpeg" 
      },
      { 
        id: 6, 
        name: "Cucumber", 
        variants: [
          {  price: 50.00 },
        ], 
        image: "cucu.jpeg" 
      },
      { 
        id: 6, 
        name: "Carrot", 
        variants: [
            {  price: 30.00 },
        ], 
        image: "carrot.jpeg" 
      },
      { 
        id: 6, 
        name: "Tomato", 
        variants: [
            {  price: 30.00 },
        ], 
        image: "tomato.jpeg" 
      },
  ];
  
  let cart = [];
  
  function renderItems() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = "";
    cart.forEach(item => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${item.name} - $${(item.price * item.quantity).toFixed(2)}</span>
        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
        <button onclick="removeItem(${item.id})">Remove</button>
      `;
      itemList.appendChild(listItem);
    });
    updateTotal();
  }
  
  function renderItemsAsCards() {
    const itemContainer = document.getElementById("items");
    itemContainer.innerHTML = "";
    items.forEach(item => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");
      itemCard.dataset.id = item.id; // Add data-id attribute to identify the item
      itemCard.innerHTML = `
        <img class="item-img" src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h2 class="item-name">${item.name}</h2>
          <div class="variants">
            ${renderVariants(item.variants, item.id)}
          </div>
          <div class="item-action">
            <input type="number" id="quantity-${item.id}" class="item-quantity" value="1" min="1">
            <button class="item-add" onclick="addItemToCart(${item.id})">Add to Cart</button>
          </div>
        </div>
      `;
      itemContainer.appendChild(itemCard);
    });
  }
  
  
  
  
  function updatePrice(itemId, variantStr) {
    const variant = JSON.parse(variantStr);
    const item = items.find(item => item.id === itemId);
    const itemPriceElement = document.querySelector(`.item-card[data-id="${itemId}"] .item-price`);
    itemPriceElement.textContent = `$${variant.price.toFixed(2)}`;
  }
  
  // Modified addItemToCart function
function addItemToCart(itemId) {
    const quantity = parseInt(document.getElementById(`quantity-${itemId}`).value);
    const variantSelect = document.getElementById(`variant-${itemId}`);
    const variantIndex = variantSelect.selectedIndex;
    const variant = items[itemId - 1].variants[variantIndex];
  
    const existingItem = cart.find(item => item.id === itemId && JSON.stringify(item.variant) === JSON.stringify(variant));
  
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = items.find(item => item.id === itemId);
      cart.push({ ...newItem, quantity, variant });
    }
  
    renderItems();
  }
  
  // Modified renderVariants function to generate unique IDs
  function renderVariants(variants, itemId) {
    let options = "";
    variants.forEach((variant, index) => {
      options += `<option value="${index}">${Object.values(variant).join(', ')}</option>`;
    });
    return `<select id="variant-${itemId}">${options}</select>`;
  }
  
  
  
  function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderItems();
  }
  
  function updateQuantity(itemId, quantity) {
    const item = cart.find(item => item.id === itemId);
    item.quantity = parseInt(quantity);
    renderItems();
  }
  
  function updateTotal() {
    const totalElement = document.getElementById("total");
    const total = cart.reduce((acc, item) => acc + (item.variant ? item.variant.price * item.quantity : item.price * item.quantity), 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    
  }
  
  
  function checkout() {
    // Implement your checkout logic here
    alert("Checkout functionality will be implemented soon!");
  }
  
  // Initial render
  renderItemsAsCards();
  