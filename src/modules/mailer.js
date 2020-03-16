const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const {
    host,
    port,
    user,
    pass
} = require('../config/mail')

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
        user,
        pass
    }
});
transport.use('compile', hbs({
    /*viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',*/

    viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('./resources/mail/auth'),
        layoutsDir: path.resolve('./resources/mail/auth'),
        defaultLayout: 'forgot_password.html',
    },
    viewPath: path.resolve('./resources/mail/'),
    extName: '.html'


}));

module.exports = transport;