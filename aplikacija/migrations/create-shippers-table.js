const { connection } = require('../config/db');

const createShippersTable = () => {
    const sql = `CREATE TABLE shippers (
        shipper_id INT NOT NULL AUTO_INCREMENT,
        company_name VARCHAR(50) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        PRIMARY KEY (shipper_id)
        )`;
        connection.query(sql, (err) => {
            if (err) throw err;
            console.log('Shippers table created');
        });
};

'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('shippers', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            company_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('shippers');
    }

};


module.exports = createShippersTable;



