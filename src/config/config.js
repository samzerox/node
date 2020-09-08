require('dotenv').config();

const {
    PORT,
    CADUCIDAD_TOKEN,
    SEED,
    DS_SQL_SERVER,
    DS_SQL_USER,
    DS_SQL_PASSWORD,
    DS_SQL_DATABASE,

} = process.env;

const config = {
    port: PORT,
    CADUCIDAD_TOKEN,
    SEED,
    datasource: {
        server: DS_SQL_SERVER,
        user: DS_SQL_USER,
        password: DS_SQL_PASSWORD,
        database: DS_SQL_DATABASE
    }
}

module.exports = config;