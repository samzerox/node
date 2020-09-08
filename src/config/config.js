require('dotenv').config();

const {
    PORT,
    CADUCIDAD_TOKEN,
    SEED,
    DS_SQL_SERVER,
    DS_SQL_USER,
    DS_SQL_PASSWORD,
    DS_SQL_DATABASE,
    GEN_FOLDER_WIN,
    GEN_FOLDER_MAC,
    LOG_BASE_FOLDER_WIN,
    LOG_BASE_FOLDER_MAC,
    SSL_VALIDATION,
    VUCEM_USER,
    VUCEM_PWD,
    WSDL_PEDIMENTO_COMPLETO
} = process.env;

const config = {
    GEN_FOLDER_WIN,
    GEN_FOLDER_MAC,
    LOG_BASE_FOLDER_WIN,
    LOG_BASE_FOLDER_MAC,
    SSL_VALIDATION,
    port: PORT,
    CADUCIDAD_TOKEN,
    SEED,
    urlWsdl: WSDL_PEDIMENTO_COMPLETO,
    datasource: {
        server: DS_SQL_SERVER,
        user: DS_SQL_USER,
        password: DS_SQL_PASSWORD,
        database: DS_SQL_DATABASE
    },
    vucem: {
        usuario: VUCEM_USER,
        password: VUCEM_PWD
    }
}

module.exports = config;