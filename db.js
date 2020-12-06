const Sequelize = require('sequelize');
const config = require('./libs/config');

let sequelize = null;

module.exports = () => {

    if (sequelize) {
        return sequelize;
    }

    sequelize = new Sequelize(config.database,
        config.username, config.password, config.params);

    return sequelize;
}