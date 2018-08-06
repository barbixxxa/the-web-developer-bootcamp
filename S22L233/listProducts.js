var faker = require('faker');

for (let i = 0; i < 10; i++) {
    // var productName = faker.commerce.productName();
    // var price = faker.commerce.price();
    //console.log(productName + " - R$ " + price);
    console.log(faker.fake("{{commerce.productName}} - R$ {{commerce.price}}"))

}
