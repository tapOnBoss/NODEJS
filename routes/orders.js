const express = require('express');
const router = express.Router();
const db = require('../models');

// GET all orders
router.get('/', async (req, res) => {
    try {
        const orders = await db.order.findAll({
            include: [
                {
                    model: db.customer,
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: db.employee,
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: db.shipper,
                    attributes: ['id', 'name', 'phone']
                }
            ]
        });
        res.json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// GET single order by id
router.get('/:id', async (req, res) => {
    try {
        const order = await db.order.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: db.customer,
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: db.employee,
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: db.shipper,
                    attributes: ['id', 'name', 'phone']
                }
            ]
        });
        
        if (!order) {
            return res.status(404).send('Order not found');
        }
        res.json(order);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// POST create new order
router.post('/', async (req, res) => {
    try {
        const { customerId, employeeId, orderDate, shipperId } = req.body;
        const order = await db.order.create({
            customerId,
            employeeId,
            orderDate,
            shipperId
        });
        res.json(order);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
