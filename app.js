// Main function

function extraMemory(element, price, value) {
    const memoryCost = document.getElementById(element + '-cost');
    const memoryValue = parseInt(memoryCost.innerText);
    
  
    if (value == true ) {
        memoryCost.innerText =  price;
       
    
    } else {
        
        memoryCost.innerText =  price ;
    }
   

}


// all input value function

function getinputvalue(element) {
    
    const memoryCost = document.getElementById(element + '-cost');
    const memoryValue = parseInt(memoryCost.innerText);
    return memoryValue;
}

// alll calcualtion

function calcualtionTotal() {
    
    const memoryTotal = getinputvalue('memory') ;
    const storageTotal = getinputvalue('storage') ;
    const deliveryTotal = getinputvalue('delivery');
    const subtotals = memoryTotal + storageTotal + deliveryTotal + 1299;
    const subtotal = document.getElementById('sub-total-price');
    subtotal.innerText = subtotals;

    const totalprice = document.getElementById('total-price');
    totalprice.innerText = subtotals;


    return subtotals;


}


// memory hendeler
document.getElementById('16gb-memory').addEventListener('click', function () {
    
    extraMemory('memory', 180, true);
    calcualtionTotal();
   
   
    
})

document.getElementById('8gb-memory').addEventListener('click', function () {
    
    extraMemory('memory', 0 ,false);
    calcualtionTotal();
    
})

// storoge hendeler 256gb-storage

document.getElementById('256gb-storage').addEventListener('click', function () {
    
    extraMemory('storage', 0 ,false);
    calcualtionTotal();
    
})
// 512 gb ssd
document.getElementById('512gb-storage').addEventListener('click', function () {
    
    extraMemory('storage', 100 ,true);
    calcualtionTotal();
    
})
// 1tb gb ssd
document.getElementById('1tb-storage').addEventListener('click', function () {
    
    extraMemory('storage', 180 ,true);
    calcualtionTotal();
    
})

// Choose your delivery option

document.getElementById('free-charge').addEventListener('click', function () {
    
    extraMemory('delivery', 0 ,false);  extraMemory('delivery', 0 ,false);
    calcualtionTotal();
    
})

document.getElementById('prime-charge').addEventListener('click', function () {
    
    extraMemory('delivery', 20 ,true);
   
    calcualtionTotal();
})

// promo code
document.getElementById('apply').addEventListener('click', function(){
    const promoCodeInput = document.getElementById('promo-code');
    const userInputPormoCode = promoCodeInput.value;
    const netPrice = parseFloat(document.getElementById("sub-total-price").innerText);
    if(userInputPormoCode == "stevekaku"){
        const discountPrice = netPrice - (netPrice * 0.2);
        document.getElementById('total-price').innerText = discountPrice;
    }
    promoCodeInput.value = "";
})




