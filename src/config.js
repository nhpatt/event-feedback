module.exports = {
    site: {
        name: 'LechazoConf 2018',
        footer: 'LechazoConf 2018',
        twitter: '@lechazoconf',
        url: 'http://127.0.0.1:8080'
    },
    admin: {
        user: 'lechazoconf',
        password: '********',
        realm: 'LechazoConf'
    },
    session: {
        secret: process.env.SESSION_SECRET || 'secret',
        cookieMaxAge: 2592000000 // one month
    },
    host: {
        address: '0.0.0.0',
        port: process.env.PORT || 8080
    },
    options: {
        cert: process.env.CERT,
        key: process.env.KEY
    },
    infrastructure: {
        redisURL: process.env.REDIS_URL || 'redis://127.0.0.1:6379/',
        databaseURL: 'postgresql://postgres:12345@localhost/eventfeedback_dev'
    }
};
