const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');

const session = require('express-session'); // 세션 사용

const cors = require("cors");

module.exports = function () {
    const app = express();

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(methodOverride());
    const corsOptions = {
        origin : true,
        credentials : true
    }
    app.use(cors(corsOptions));
    
    app.use(session({
        resave:false,
        saveUninitialized:true,
        secret:"비밀비밀",
        cookie:{
            httpOnly:true,
            secure:false
        }
    }));
    
    // app.use(express.static(process.cwd() + '/public'));

    /* App (Android, iOS) */
    //require('../src/app/routes/indexRoute')(app);
    require('../src/app/routes/userRoute')(app);

    /* Web */
    // require('../src/web/routes/indexRoute')(app);

    /* Web Admin*/
    // require('../src/web-admin/routes/indexRoute')(app);
    return app;
};