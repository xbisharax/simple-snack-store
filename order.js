// Get form element
var orderForm = document.getElementById('order-form');


// Get input fields
var nameInput = document.getElementById('name');
var addressInput = document.getElementById('address');
var cityInput = document.getElementById('city');
var stateInput = document.getElementById('state').value;
var zipInput = document.getElementById('zip');
var product1Input = document.getElementById('product1');
var product2Input = document.getElementById('product2');
var product3Input = document.getElementById('product3');
var subtotalInput = document.getElementById('subtotal');
var taxInput = document.getElementById('tax');
var totalInput = document.getElementById('total');


// Define tax rate
var TAX_RATE = 0;
if(stateInput == 'KY'){
    TAX_RATE = 0.06;
} else if (stateInput == 'OH'){
    TAX_RATE = 0.0575;
}


// Validate form inputs and calculate order summary
orderForm.addEventListener('submit', (event) => {
    // Prevent form from submitting
    event.preventDefault();

    // Validate name input
    if (nameInput.value === '') {
    alert('Please enter your name.');
    return;
    }

    // Validate address input
    if (addressInput.value === '') {
    alert('Please enter your street address.');
    return;
    }

    // Validate city input
    if (cityInput.value === '') {
    alert('Please enter your city.');
    return;
    }

    // Validate state input
    if (stateInput.value === '') {
    alert('Please select your state.');
    return;
    }

    // Validate zip input
    if (zipInput.value === '') {
    alert('Please enter your zip code.');
    return;
    }

    // Calculate subtotal
    var product1Price = parseFloat(product1Input.value * 3.00) || 0;
    var product2Price = parseFloat(product2Input.value * 1.00) || 0;
    var product3Price = parseFloat(product3Input.value * 2.00) || 0;
    var subtotal = product1Price + product2Price + product3Price;
    subtotalInput.value = subtotal.toFixed(2);

    // Calculate tax
    var tax = subtotal * TAX_RATE;
    taxInput.value = tax.toFixed(2);

    //Calculate Shipping Cost
    var shippingCost = 0;
    if(document.getElementById('overnight').checked){
        shippingCost = 25;
    }else if(document.getElementById('twoday').checked){
        shippingCost = 15;
    }else if(document.getElementById('standard').checked){
        shippingCost = 5;
    }

    // Calculate total
    var total = subtotal + tax + shippingCost;
    totalInput.value = total.toFixed(2);
});