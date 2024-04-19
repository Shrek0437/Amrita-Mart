document.getElementById('cake-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    const cakeType = document.getElementById('cake-type').value;
    const cakeSize = document.querySelector('input[name="size"]:checked').value;
    const flavor = document.getElementById('flavor').value;
    const toppings = document.getElementById('toppings').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
  
    // Display order details (you can customize this part)
    alert(`Order Details:\n
      Cake Type: ${cakeType}\n
      Cake Size: ${cakeSize}\n
      Flavor: ${flavor}\n
      Toppings: ${toppings}\n
      Name: ${name}\n
      Address: ${address}\n
      Phone: ${phone}\n
      Thank you for your order!`);
  });
  