// config.js
const s_config = {
    user: 'tu_usuario',
    password: 'tu_contraseña',
    server: 'tu_servidor', // Por ejemplo, 'tu_servidor.database.windows.net'
    database: 'tu_base_de_datos',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

module.exports = s_config;