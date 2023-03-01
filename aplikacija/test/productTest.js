const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('Products', () => {
    describe('GET /api/products', () => {
        it('should get all products', (done) => {
            chai.request(app).get('/api/products').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
        });
    });
    
    describe('GET /api/products/:id', () => {
        it('should get a product by id', (done) => {
            const id = 1;
            chai.request(app).get(`/api/products/${id}`).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id').eql(id);
                done();
            });
        });
    });
    
    describe('POST /api/products', () => {
        it('should create a new product', (done) => {
            const product = {
                name: 'New Product',
                price: 9.99
            };
            chai.request(app).post('/api/products').send(product).end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql(product.name);
                res.body.should.have.property('price').eql(product.price);
                done();
            });
        });
    });
    
    describe('PUT /api/products/:id', () => {
        it('should update a product by id', (done) => {
            const id = 1;
            const updatedProduct = {
                name: 'Updated Product',
                price: 19.99
            };
            chai.request(app)
            .put(`/api/products/${id}`)
            .send(updatedProduct)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql(updatedProduct.name);
                res.body.should.have.property('price').eql(updatedProduct.price);
                done();
            });
        });
    });
    
    describe('DELETE /api/products/:id', () => {
        it('should delete a product by id', (done) => {
            const id = 1;
            chai.request(app).delete(`/api/products/${id}`).end((err, res) => {
                res.should.have.status(204);
                done();
            });
        });
    });
});
