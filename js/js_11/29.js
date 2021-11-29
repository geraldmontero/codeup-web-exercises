function reverseString(str) { return str.split("")
    .reverse()
    .join();
    
}

console.log(reverseString("maggie"))

function applyDiscount(price,discountPercent ) {
    return (price - ( price * discountPercent))

}

console.log(applyDiscount(100,.2))