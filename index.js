function calculateDiscount() {
    var products = document.getElementsByClassName('product-input');
    var subtotal = 0;

    for (var i = 0; i < products.length; i++) {
        if (!products[i].value || isNaN(parseFloat(products[i].value))) {
            alert('Por favor ingrese un valor numérico para todos los productos.');
            return;
        }
        subtotal += parseFloat(products[i].value);
    }

    var discountLabel = document.getElementById('discount-total');
    var totalInput = document.getElementById('total');
    var subtotalOutput = document.getElementById('subtotal-total');

    if (subtotal < 1000) {
        discountLabel.textContent = 'Descuento 0%';
        totalInput.textContent = formatNumber(subtotal.toFixed(2));
    } else if (subtotal >= 1000 && subtotal < 5000) {
        discountLabel.textContent = 'Descuento 10%';
        totalInput.textContent = formatNumber((subtotal * 0.9).toFixed(2));
    } else if (subtotal >= 5000 && subtotal < 9000) {
        discountLabel.textContent = 'Descuento 20%';
        totalInput.textContent = formatNumber((subtotal * 0.8).toFixed(2));
    } else if (subtotal >= 9000 && subtotal < 13000) {
        discountLabel.textContent = 'Descuento 30%';
        totalInput.textContent = formatNumber((subtotal * 0.7).toFixed(2));
    } else {
        discountLabel.textContent = 'Descuento 40%';
        totalInput.textContent = formatNumber((subtotal * 0.6).toFixed(2));
    }

    subtotalOutput.textContent = formatNumber(subtotal.toFixed(2));
}

function clearForm() {
    var products = document.getElementsByClassName('product-input');
    for (var i = 0; i < products.length; i++) {
        products[i].value = '';
    }

    var discountLabel = document.getElementById('discount-total');
    var totalInput = document.getElementById('total');
    var subtotalOutput = document.getElementById('subtotal-total');

    discountLabel.textContent = 'Descuento 0%';
    totalInput.textContent = '0,00';
    subtotalOutput.textContent = '0,00';
}

function formatNumber(number) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
