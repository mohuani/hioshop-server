const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabsDB',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: 'sh-cynosdbmysql-grp-gw2qx4nm.sql.tencentcdb.com',
    port: '25910',
    user: 'root',
    password: 'mohuani@123',
    dateStrings: true
};