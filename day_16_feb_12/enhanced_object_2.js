function getLaptop(brand, model, year, price) {
    return {  // es-5
        brand: brand,
        model: model,
        year: year,
        price: price,
    }
}
console.log(getLaptop('HP', 'probook', 2021, 45000));

function getLaptop2(brand, model, year, price) {
    return { brand, model, year, price }; // es-6
}
console.log(getLaptop2('HP', 'probook', 2021, 45000));