const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            serial_num: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                unique: true
            },
            unit_num: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            permission: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {}
}

module.exports = User;