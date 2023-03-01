axios.get('/api/products').then((response) => {
    const products = response.data;
    const productListTemplate = ejs.compile(fs.readFileSync('views/productList.ejs', 'utf8'));

    const productListHtml = productListTemplate({ products: products });

    document.getElementById('product-list').innerHTML = productListHtml;

}).catch((error) => {console.log(error);

});
