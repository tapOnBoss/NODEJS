'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            product_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            supplier_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'suppliers',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categories',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            quantity_per_unit: {
                type: Sequelize.STRING,
                allowNull: false
            },
            unit_price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            units_in_stock: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            units_on_order: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            reorder_level: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            discontinued: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('products');
    }

};


'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },createdAt: {
        allowNull: false,
        type: Sequelize.DATE},
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }); 
},

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
}
};
