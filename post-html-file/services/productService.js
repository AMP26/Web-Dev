const addProduct = (productData) => {

    const product = {
        name: productData.name,
        price: productData.price
    };

    // Console log on server
    console.log('Received Product:', product);

    return {
        message: 'Product added successfully',
        product
    };
};

module.exports = {
    addProduct
};